import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "build",
  target: "esnext",
  format: "esm",
  dts: true,
  treeshake: true,
  sourcemap: true,
  splitting: true,
  clean: true,
});
