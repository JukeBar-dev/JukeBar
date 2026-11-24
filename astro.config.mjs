import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// URL de production : à changer ici si un nom de domaine (ex. lejukebar.fr) est branché sur Vercel.
// Elle sert aux liens canoniques, aux images Open Graph, au sitemap et au robots.txt.
export default defineConfig({
  site: "https://juke-bar.vercel.app",
  integrations: [sitemap()],
});
