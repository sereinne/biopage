import { serveDir } from "https://deno.land/std@0.220.0/http/file_server.ts";

Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  
  // Serve index.html for root and any non-asset paths (SPA routing)
  if (pathname === "/" || (!pathname.includes("."))) {
    return serveDir(req, {
      fsRoot: "dist",
      urlRoot: "",
    });
  }
  
  return serveDir(req, {
    fsRoot: "dist",
    urlRoot: "",
  });
});