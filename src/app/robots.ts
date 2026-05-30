import type { MetadataRoute } from "next";

const SITE_URL = "https://marrow-library-marketing-site.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/success"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
