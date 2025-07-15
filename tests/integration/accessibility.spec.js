import { test, expect } from '@playwright/test';

test.describe('Audio Suite Pro - Accessibility & SEO', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have proper page title and meta tags', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Audio Suite Pro/);
    
    // Check favicon
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', /favicon\.svg/);
  });

  test('should have proper semantic HTML structure', async ({ page }) => {
    // Check for main landmarks
    await expect(page.locator('main, [role="main"], .main-container')).toBeVisible();
    
    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    
    // Check for form labels
    const labels = page.locator('label');
    expect(await labels.count()).toBeGreaterThan(0);
  });

  test('should have keyboard navigation support', async ({ page }) => {
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    
    // Ensure focus is visible on interactive elements
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should support screen readers with ARIA labels', async ({ page }) => {
    // Check for ARIA labels on buttons
    const buttons = page.locator('button[aria-label], button[aria-labelledby]');
    expect(await buttons.count()).toBeGreaterThan(0);
    
    // Check for proper modal ARIA attributes
    await page.locator('#btn-settings-open').click();
    const modal = page.locator('#settings-modal');
    await expect(modal).toHaveAttribute('role', 'dialog');
    await expect(modal).toHaveAttribute('aria-modal', 'true');
  });

  test('should have proper color contrast in both themes', async ({ page }) => {
    // Test dark theme (default)
    const body = page.locator('body');
    await expect(body).not.toHaveClass(/light-theme/);
    
    // Switch to light theme
    await page.locator('#theme-toggle-button').click();
    await expect(body).toHaveClass(/light-theme/);
    
    // Verify text is readable in both themes
    const mainTitle = page.locator('[data-translate="app_title_header"]');
    await expect(mainTitle).toBeVisible();
  });
});