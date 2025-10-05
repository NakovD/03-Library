import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           
  timeout: 60 * 1000,           
  use: {
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]], 
});