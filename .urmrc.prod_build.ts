import { defineConfig } from "umi";
export default defineConfig({
  define: {
    'process.env': {
      BASE_RUL: 'https://xxx.dev',
      MODE: 'prod'
    }
  }
});
