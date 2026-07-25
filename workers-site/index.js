export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    let pathname = url.pathname;
    if (pathname === "/") {
      pathname = "/index.html";
    }

    const assetUrl = new URL(pathname + url.search, url.origin);
    const assetRequest = new Request(assetUrl, request);
    const response = await env.ASSETS.fetch(assetRequest);

    if (response.status === 404) {
      const fallbackRequest = new Request(new URL("/index.html", url.origin), request);
      const fallbackResponse = await env.ASSETS.fetch(fallbackRequest);
      if (fallbackResponse.status < 500) {
        return fallbackResponse;
      }
    }

    return response;
  },
};
