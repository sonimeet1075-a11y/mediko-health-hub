import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, blogPosts, caseStudies } from "@/data/site";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/about-us", "/services", "/case-studies", "/blog", "/contact-us",
          ...services.map((s) => `/services/${s.slug}`),
          ...caseStudies.map((c) => `/case-studies/${c.slug}`),
          ...blogPosts.map((b) => `/blog/${b.slug}`),
        ];
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
