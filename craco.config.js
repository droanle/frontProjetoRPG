const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@utils": "@/utils",
      "@type": "@utils/type",
      "@views": "@/views",
      "@assets": "@views/assets",
      "@pages": "@views/pages",
    },
  },
};
