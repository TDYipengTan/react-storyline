import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { defineConfig, UserConfigFn } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const userConfigFn: UserConfigFn = (env) => {
  return {
    base: env.mode === 'dev' ? '' : 'https://tdyipengtan.github.io/react-storyline/',
    resolve: {
      alias: {
        '@cobalt': resolve(__dirname, './src/components/@cobalt'),
      },
    },
    plugins: [reactRefresh(), tsconfigPaths()],
  };
};

// https://vitejs.dev/config/
export default defineConfig(userConfigFn);
