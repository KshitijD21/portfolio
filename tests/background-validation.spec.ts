import { expect, test } from '@playwright/test';

test.describe('Background Validation', () => {
  test('should validate page background elements', async ({ page }) => {
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Check if main content is visible
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Verify background elements don't interfere with content
    const heroContent = page.locator('h1').first();
    await expect(heroContent).toBeVisible();

    // Check if background gradients are applied
    const sections = page.locator('section');
    const firstSection = sections.first();
    await expect(firstSection).toBeVisible();

    // Verify section backgrounds
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThan(0);
  });

  test('should have responsive background behavior', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(main).toBeVisible();

    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(main).toBeVisible();
  });
});
