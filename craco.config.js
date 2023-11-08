const path = require("path");

module.exports = {
  webpack: {
    alias: {
      // @
      "@": path.resolve(__dirname, "src"),

      // @ -> @utils
      "@utils": "@/utils",
      "@type": "@utils/type",

      // @ -> @views
      "@views": "@/views",
      "@assets": "@views/assets",
      "@pages": "@views/pages",

      // @ -> @views -> @assets
      "@components/*": "@assets/components",
      "@elements/*": "@assets/elements",
      "@styles/*": "@assets/styles",
    },
  },
  eslint: {
    enable: false,
  },
};
