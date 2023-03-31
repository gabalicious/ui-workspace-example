import { defineConfig } from "vite";
import path from "path";

import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // This is the alias is just for this local app
      "@": path.resolve(__dirname, "../src"),

      /*
       * Aliases below should match the ones in tsconfig.json and also the ones in packages/ui/vite.config.ts
       * This is done so that we can use the same alias in both apps and packages and so sb-vue-app build doesn't fail
       * in CI/CD pipeline
       */

      "@utils": path.resolve(__dirname, "../../packages/ui/src/utils"),
      "@tenants": path.resolve(__dirname, "../../packages/ui/src/tenants"),
      "@components": path.resolve(
        __dirname,
        "../../packages/ui/src/components"
      ),
      "@composables": path.resolve(
        __dirname,
        "../../packages/ui/src/composables/"
      ),
    },
  },
  optimizeDeps: {
    include: [
      "@tenants/**/*",
      "@utils/**/*",
      "@components/**/*",
      "@composables/**/*",
    ],
  },
});
