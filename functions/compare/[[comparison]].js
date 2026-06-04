export async function onRequest(context) {
  const assetResponse = await context.next();

  if (assetResponse.status !== 404) {
    return assetResponse;
  }

  const requestUrl = new URL(context.request.url);
  const fallbackUrl = new URL(context.request.url);
  fallbackUrl.pathname = "/compare";

  const fallbackResponse = await context.env.ASSETS.fetch(
    new Request(fallbackUrl.toString(), context.request)
  );

  const contentType = fallbackResponse.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) {
    return fallbackResponse;
  }

  const requestedPath = `${requestUrl.pathname}${requestUrl.search}`;
  const escapedPath = JSON.stringify(requestedPath).replaceAll("<", "\\u003c");

  return new HTMLRewriter()
    .on("head", {
      element(element) {
        element.append(
          `<script>window.__COMPARE_FALLBACK_PATH=${escapedPath}</script>`,
          { html: true }
        );
      },
    })
    .transform(fallbackResponse);
}
