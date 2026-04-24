const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  fullyParallel: true, // Jalankan test secara bersamaan
  reporter: 'html',    // Laporan hasil test dalam bentuk HTML
  use: {
    baseURL: 'https://automationexercise.com/', // URL dasar
    trace: 'on-first-retry',                   // Rekam jejak jika test gagal
    screenshot: 'only-on-failure',             // Ambil gambar jika gagal
     video: {
      mode: 'on',
      size: { width: 1280, height: 720 }
    }
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
});