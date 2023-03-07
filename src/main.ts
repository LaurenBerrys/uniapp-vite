/*
 * @Author: Nie Chengyong
 * @Date: 2023-02-09 21:17:58
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 20:59:34
 * @FilePath: /uniapp-vite/src/main.ts
 * @Description: 
 * 
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import store from './store/index'
import Exposure from './components/Exposure/index.vue'
import Buried from './components/Buried/index.vue'
import directives from './utils/directives/index.js'
export function createApp() {
  const app = createSSRApp(App);
  app.use(store)
  app.use(directives)
	app.component('Exposure', Exposure)
	app.component('Buried', Buried)
  return {
    app,
  };
}
