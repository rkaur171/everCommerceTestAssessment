// @ts-check
const { defineConfig, devices } = require("@playwright/test");
import dotenv from "dotenv";
import path, { dirname } from "path";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

dotenv.config({ path: path.resolve(__dirname, "./dataset/my.env") });

module.exports = defineConfig({
  testDir: "./tests",

  // Folder for test artifacts such as screenshots, videos, traces, etc
  outputDir: "test-results",

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120 * 1000,
  //   stdout: 'ignore',
  //   stderr: 'pipe',
  // },

  // Each test is given 30 seconds by default
  timeout: 30 * 1000,

  expect: {
    // Maximum time expect() should wait for the condition to be met
    timeout: 5 * 1000,

    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      maxDiffPixels: 10,
    },

    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.1,
    },
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 6 : undefined,

  //workers: 10,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? "blob" : "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  use: {
    // Emulates 'prefers-colors-scheme' media feature.
    colorScheme: "dark",

    // Emulates the user locale.
    locale: "en-ca",

    // Grants specified permissions to the browser context.
    permissions: ["geolocation"],

    // Emulates the user timezone.
    timezoneId: "US/Eastern",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    launchOptions: {
      slowMo: 2000,
    },

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "https://the-internet.herokuapp.com/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
        // Viewport used for all pages in the context.
        // viewport: { width: 800, height: 500 },
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "safari",
      use: { ...devices["Desktop Safari"] },
    },

    /* Test against mobile viewports. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
