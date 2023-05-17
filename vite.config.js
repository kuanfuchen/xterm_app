import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy' 
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }),
  viteStaticCopy({
    targets: [
      {
        src: './src/assets/images.png',
        dest: './'//包裹的資料夾名稱，給予./為無資料夾
      }
    ]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      // entry: resolve(__dirname, 'lib/main.js'),
      entry: './src/main.ce.js',//只包裝這個部分
      name: 'CustomElements',
      fileName:(format)=>`custom-elements.${format}.js`
    },
  },
  define: {
    'process.env': process.env
  }
})
