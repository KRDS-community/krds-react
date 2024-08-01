import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
/*
This is for debugging rollup only.
import { visualizer } from 'rollup-plugin-visualizer';
*/

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      name: 'krds-ui-core',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [
    react({
      jsxImportSource: 'react',
    }),
    dts({ rollupTypes: true }),
    /* This is for debugging rollup only.
    visualizer({
      open: true,
      filename: 'inspect/rollup.html',
    }),
    */
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
