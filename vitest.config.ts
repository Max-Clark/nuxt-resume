import { defineVitestConfig } from "@nuxt/test-utils/config";
import { coverageConfigDefaults } from "vitest/config";
export default defineVitestConfig({
  test: {
    environment: "nuxt",
    coverage: {
      exclude: ["nuxt.config.ts", ...coverageConfigDefaults.exclude],
    },
  },
});
