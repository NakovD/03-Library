import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           
  timeout: 60 * 1000,           
  use: {
    trace: 'retain-on-failure', 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  command: 'npm run start',
  port: 3000,
  timeout: 120 * 1000,
  reuseExistingServer: !process.env.CI,
  reporter: [['html', { open: 'never' }]], 
});