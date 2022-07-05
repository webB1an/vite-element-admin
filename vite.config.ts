import path, { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, 'env'))

  const baseApiProxy = env.VITE_APP_BASE_API ? {
    [env.VITE_APP_BASE_API]: {
      target: 'https://admin.uat.dusto-yc.com',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(`^${env.VITE_APP_BASE_API}`, '')
    }
  } : {}

  return defineConfig({
    base: './',
    envDir: resolve(__dirname, 'env'),
    server: {
      port: 9527,
      cors: true, // 允许跨域
      // 设置代理，根据我们项目实际情况配置
      proxy: {
        ...baseApiProxy
      }
    },
    plugins: [
      vue(),
      // DefineOptions(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    }
    // build: {
    //   brotliSize: false,
    //   target: 'esnext',
    //   minify: 'esbuild',
    //   rollupOptions: {
    //     output: {
    //       manualChunks: (id) => {
    //         if (id.includes('element-plus')) {
    //           return 'element-plus'
    //         }
    //         if (id.includes('vue-router')) {
    //           return 'vue-router'
    //         }
    //         if (id.includes('vuex')) {
    //           return 'vuex'
    //         }
    //         if (id.includes('lodash-es')) {
    //           return 'lodash-es'
    //         }

    //         return 'vendor'
    //       }
    //     }
    //   }
    // }
  })
}
