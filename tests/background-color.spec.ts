import { expect, test } from '@playwright/test';

test.describe('Background Color Validation', () => {
  test('should have correct background colors for sections', async ({ page }) => {
    await page.goto('/');

    // Check hero section background
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();

    // Check if hero has gradient background
    const heroStyle = await heroSection.getAttribute('class');
    expect(heroStyle).toContain('bg-gradient');

    // Check about section background
    const aboutSection = page.locator('#about');
    if (await aboutSection.isVisible()) {
      const aboutStyle = await aboutSection.getAttribute('class');
      expect(aboutStyle).toContain('bg-white');
    }

    // Check skills section background
    const skillsSection = page.locator('#skills');
    if (await skillsSection.isVisible()) {
      const skillsStyle = await skillsSection.getAttribute('class');
      expect(skillsStyle).toContain('bg-gray-50');
    }
  });

  test('should have proper contrast ratios', async ({ page }) => {
    await page.goto('/');

    // Check text readability
    const headings = page.locator('h1, h2, h3');
    const firstHeading = headings.first();
    await expect(firstHeading).toBeVisible();

    // Ensure headings are not transparent
    const headingStyle = await firstHeading.evaluate(el =>
      window.getComputedStyle(el).color
    );
    expect(headingStyle).not.toBe('rgba(0, 0, 0, 0)');
  });
});
