import {
  getAssetFromKV,
  mapRequestToAsset,
} from "@cloudflare/kv-asset-handler";

const assetManifest = {
  version: "1",
};

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);

  if (url.pathname === "/") {
    url.pathname = "/index.html";
  }

  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: (req) =>
        mapRequestToAsset(req, { cacheControl: "public, max-age=31536000" }),
      ASSET_NAMESPACE: globalThis.__STATIC_CONTENT,
      ASSET_MANIFEST: assetManifest,
    });
  } catch (e) {
    return new Response("Not Found", { status: 404 });
  }
}
