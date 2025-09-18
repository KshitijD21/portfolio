import { expect, test } from '@playwright/test';

test.describe('Navigation Enhanced', () => {
  test('should have sticky navigation', async ({ page }) => {
    await page.goto('/');

    const navigation = page.locator('nav');
    await expect(navigation).toBeVisible();

    // Check if navigation has sticky class
    await expect(navigation).toHaveClass(/sticky/);
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    const navigation = page.locator('nav');
    await expect(navigation).toBeVisible();

    // Check for navigation links
    const homeLink = navigation.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();

    const aboutLink = navigation.locator('a[href="/about"]');
    await expect(aboutLink).toBeVisible();

    const contactLink = navigation.locator('a[href="/contact"]');
    await expect(contactLink).toBeVisible();
  });

  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileMenuButton = page.locator('button[aria-label*="menu" i]');
    await expect(mobileMenuButton).toBeVisible();
  });
});
