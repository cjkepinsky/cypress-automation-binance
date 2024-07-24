import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://testnet.binancefuture.com/en/login',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    defaultCommandTimeout: 10000,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
  },
});