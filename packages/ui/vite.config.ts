import { defineConfig } from "vite";
import path from "path";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config"

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "happy-dom",
  },
}
const vue = require("@vitejs/plugin-vue");
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "/index.ts"),
      name: "UI",

      // the proper extensions will be added
      fileName: "ui",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
    target: "esnext",
    sourcemap: true,
  },
  plugins: [vue()],
  //  If you want to use @ alias
  resolve: {
    alias: {
      /*
       * Aliases below should match the ones in tsconfig.json and also the ones in apps/sb-vue-app/vite.config.ts
       * This is done so that we can use the same alias in both apps and packages and so sb-vue-app build doesn't fail
       * in CI/CD pipeline
       */
      "@utils": path.resolve(__dirname, "src/utils"),
      "@tenants": path.resolve(__dirname, "src/tenants"),
      "@components": path.resolve(__dirname, "src/components"),
      "@composables": path.resolve(__dirname, "src/composables/"),
    },
  },
  test: vitestConfig.test,


});
