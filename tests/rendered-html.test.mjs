import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders every public route", async () => {
  for (const pathname of ["/a1", "/a2", "/a3", "/obrigado"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  }
});

test("changes only the hero angle between sales routes", async () => {
  const html = await Promise.all(
    ["/a1", "/a2", "/a3"].map(async (pathname) => {
      const response = await render(pathname);
      return response.text();
    }),
  );

  assert.match(html[0], /Seu dinheiro está comportado demais/);
  assert.match(html[1], /Cripto não é o problema/);
  assert.match(html[2], /Você não precisa morar na frente de um gráfico/);

  const sharedMarkers = [
    /Não comece pela moeda/,
    /Três encontros para tirar o mercado cripto da névoa/,
    /Quem é Roger/,
    /Escolha o lote em que você vai entrar/,
  ];

  for (const page of html) {
    for (const marker of sharedMarkers) {
      assert.match(page, marker);
    }
  }
});

test("keeps forbidden dash characters out of rendered copy", async () => {
  for (const pathname of ["/a1", "/a2", "/a3", "/obrigado"]) {
    const response = await render(pathname);
    const html = await response.text();
    assert.doesNotMatch(html, /[\u2014\u2013]/u, pathname);
  }
});

test("renders the expected project images", async () => {
  const response = await render("/a1");
  const html = await response.text();
  assert.match(html, /roger-hero\.png/);
  assert.match(html, /roger-autoridade\.png/);
});
