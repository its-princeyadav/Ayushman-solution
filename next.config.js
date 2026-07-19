/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // These are plain public/ files (unhashed filenames), so no "immutable"
    // - if one gets edited, browsers must be able to pick up the change
    // within a bounded window. stale-while-revalidate lets a cached copy
    // keep serving instantly while a fresh copy is fetched in the
    // background, rather than every repeat visit re-downloading in full.
    // Raised from 1h/1d (Phase 4) to 1d/30d for production: Lighthouse's
    // cache-lifetime audit wants much longer TTLs than that, and these
    // vendor/image files change far less often than the app code that was
    // still actively being edited when the shorter values were chosen.
    // True long-term (1y, immutable) caching needs fingerprinted filenames
    // (a build-step change) - see the Phase 5 report.
    return [
      {
        source: "/assets/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=7776000" },
        ],
      },
      {
        source: "/assets/:type(css|js)/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
