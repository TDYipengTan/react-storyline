import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://tdyipengtan.github.io/react-storyline/',
  plugins: [reactRefresh(), tsconfigPaths()],
});
