/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 21:17:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 21:03:15
 * @FilePath: /uniapp-vite/vite.config.ts
 * @Description: 
 * 
 */
import { ConfigEnv, loadEnv, UserConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  }
  const server= {
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    port: 5001, // 类型： number 指定服务器端口;
    open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: true // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    // proxy: {
    //   '/api': {
    //     target: loadEnv(mode, process.cwd()).VITE_APP_PROXY_URL,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
  const preview= {
    port: 5001,
    host: '0.0.0.0',
    strictPort: true
  }
 const plugins= [uni(),
    VueSetupExtend(),
  ]
 const resolve= {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url)),
      '~': fileURLToPath(new URL("./public", import.meta.url)),
    }
  }
  return {
    server,
    preview,
    plugins,
    resolve,
  }
};
