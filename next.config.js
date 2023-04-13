const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/gentle-intro-to-crdts.html",
        destination: "/articles/intro-to-crdts",
        permanent: true,
      },
    ];
  },
  // output: "export",
});

// const withNextra = require("nextra")({
//   theme: "./theme.tsx",
// });

// module.exports = withNextra({
//   reactStrictMode: true,
// });
