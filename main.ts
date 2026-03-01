// main.ts
import { serveDir } from "https://deno.land/std/http/file_server.ts";

Deno.serve((req) => {
	return serveDir(req, {
		fsRoot: "dist",
		urlRoot: "",
		showDirListing: false,
		enableCors: true,
	});
});
