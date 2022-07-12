import { defineConfig } from '@modern-js/app-tools';
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin';

// https://modernjs.dev/docs/apis/config/overview
export default defineConfig({
  tools: {
    webpack: (_config, { appendPlugins }) => {
      // 添加插件
      appendPlugins([new WindiCSSWebpackPlugin() as any]);
    },
  },
});
