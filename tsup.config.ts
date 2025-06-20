import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],  // punto de entrada principal
  outDir: 'dist',
  format: ['esm'],          // puedes usar 'esm' si tu proyecto lo permite
  dts: true,                // genera archivos .d.ts
  clean: true,              // limpia la carpeta dist antes
  minify: true,             // minifica para producción
  sourcemap: true,          // útil para debugging
  splitting: false,         // desactiva split si es una API
  tsconfig: './tsconfig.json'
});
