import { expect, test } from '@playwright/test';

test.describe('About Me Section', () => {
  test('should display about me content correctly', async ({ page }) => {
    await page.goto('/');

    // Wait for the about section to be visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();

    // Check if the main heading is present
    const heading = aboutSection.locator('h2');
    await expect(heading).toContainText('About Me');

    // Check if description text is present
    const description = aboutSection.locator('p').first();
    await expect(description).toContainText('passionate Software Development Engineer');

    // Check if service cards are present
    const serviceCards = aboutSection.locator('[class*="grid"]').locator('[class*="Card"]');
    await expect(serviceCards).toHaveCount(3);

    // Verify service titles
    await expect(serviceCards.nth(0)).toContainText('Full-Stack Development');
    await expect(serviceCards.nth(1)).toContainText('Backend Engineering');
    await expect(serviceCards.nth(2)).toContainText('Cloud Solutions');
  });

  test('should have working skill badges', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();

    // Check if skill badges are present
    const badges = aboutSection.locator('[class*="Badge"]');
    await expect(badges.first()).toBeVisible();

    // Verify some specific skills are mentioned
    await expect(aboutSection).toContainText('React');
    await expect(aboutSection).toContainText('Next.js');
    await expect(aboutSection).toContainText('Node.js');
  });
});
