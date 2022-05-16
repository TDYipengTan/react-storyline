import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig, UserConfigFn } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const userConfigFn: UserConfigFn = (env) => {
  return {
    base: env.mode === 'dev' ? '' : 'https://tdyipengtan.github.io/react-storyline/',
    plugins: [reactRefresh(), tsconfigPaths()],
  };
};

// https://vitejs.dev/config/
export default defineConfig(userConfigFn);
