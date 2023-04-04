import { defineConfig } from "umi";
import alias from './config/alias'
import routesDefaultData from './config/routes/routesDefault'
export default defineConfig({
  define: {
    'process.env': {
      BASE_RUL: 'https://xxx.prod',
      MODE: 'prod'
    }
  },
  routes: routesDefaultData,
  hash: true,
  // 兼容低版本浏览器，开启会增加打包时间
  legacy: {},
  sassLoader: {},
  alias,
  autoprefixer: {},
  clickToComponent: {},
  npmClient: 'yarn',
});
