import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig, UserConfigFn } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

console.log(__dirname, path.resolve(__dirname, './cobalt_modules/node_modules/@cobalt'));

const userConfigFn: UserConfigFn = (env) => {
  return {
    base:
      env.mode === 'development' ? '' : 'https://tdyipengtan.github.io/react-storyline/',
    resolve: {
      alias: {
        '@cobalt': path.resolve(__dirname, './cobalt_modules/node_modules/@cobalt'),
      },
    },
    plugins: [reactRefresh(), tsconfigPaths()],
  };
};

// https://vitejs.dev/config/
export default defineConfig(userConfigFn);
