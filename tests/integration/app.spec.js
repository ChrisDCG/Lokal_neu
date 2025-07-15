import { test, expect } from '@playwright/test';

test.describe('Audio Suite Pro - Basic Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the application
    await page.goto('/');
  });

  test('should load the application successfully', async ({ page }) => {
    // Check if the main title is visible
    await expect(page.locator('[data-translate="app_title_header"]')).toBeVisible();
    
    // Check if the record button is present
    await expect(page.locator('#btn-record')).toBeVisible();
    
    // Check if the transcript textarea is present
    await expect(page.locator('#txt-transcript')).toBeVisible();
  });

  test('should have working theme toggle', async ({ page }) => {
    // Find the theme toggle button
    const themeButton = page.locator('#theme-toggle-button');
    await expect(themeButton).toBeVisible();
    
    // Check initial theme (should be dark by default)
    const body = page.locator('body');
    const initialClasses = await body.getAttribute('class');
    
    // Click theme toggle
    await themeButton.click();
    
    // Check that theme changed
    const newClasses = await body.getAttribute('class');
    expect(newClasses).not.toBe(initialClasses);
  });

  test('should have working language switcher', async ({ page }) => {
    // Find the language button
    const langButton = page.locator('#btn-language-toggle');
    await expect(langButton).toBeVisible();
    
    // Click to open dropdown
    await langButton.click();
    
    // Check if dropdown is visible
    const dropdown = page.locator('#language-dropdown-menu');
    await expect(dropdown).toBeVisible();
    
    // Check if language options are present
    await expect(dropdown.locator('[data-lang="en"]')).toBeVisible();
    await expect(dropdown.locator('[data-lang="de"]')).toBeVisible();
  });

  test('should show settings modal', async ({ page }) => {
    // Find and click settings button
    const settingsButton = page.locator('#btn-settings-open');
    await expect(settingsButton).toBeVisible();
    await settingsButton.click();
    
    // Check if modal is open
    const modal = page.locator('#settings-modal');
    await expect(modal).toHaveClass(/open/);
    
    // Check if API key input is visible
    await expect(page.locator('#modal-input-api-key')).toBeVisible();
    
    // Close modal
    await page.locator('#btn-settings-close-modal').click();
    await expect(modal).not.toHaveClass(/open/);
  });

  test('should have responsive design', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('.main-container')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('.main-container')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('.main-container')).toBeVisible();
  });

  test('should handle file upload area', async ({ page }) => {
    // Check if file upload input exists
    await expect(page.locator('#file-upload')).toBeHidden(); // Should be hidden
    
    // Check if upload label/button is visible
    await expect(page.locator('label[for="file-upload"]')).toBeVisible();
  });

  test('should show vocabulary modal', async ({ page }) => {
    // Find and click vocabulary button
    const vocabButton = page.locator('#btn-vocab-open');
    await expect(vocabButton).toBeVisible();
    await vocabButton.click();
    
    // Check if modal is open
    const modal = page.locator('#vocab-modal');
    await expect(modal).toHaveClass(/open/);
    
    // Check if vocabulary table is visible
    await expect(page.locator('#vocab-table')).toBeVisible();
    
    // Close modal
    await page.locator('#btn-vocab-close-modal-x').click();
    await expect(modal).not.toHaveClass(/open/);
  });

  test('should have working audio archive button', async ({ page }) => {
    // Find audio archive button
    const archiveButton = page.locator('#btn-audio-fallback-open');
    await expect(archiveButton).toBeVisible();
    
    // Click to open modal
    await archiveButton.click();
    
    // Check if modal is open
    const modal = page.locator('#audio-fallback-modal');
    await expect(modal).toHaveClass(/open/);
    
    // Close modal
    await page.locator('#btn-audio-fallback-close-modal-x').click();
    await expect(modal).not.toHaveClass(/open/);
  });
});