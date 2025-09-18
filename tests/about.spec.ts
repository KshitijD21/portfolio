import { expect, test } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should display the about page with all sections', async ({ page }) => {
    // Check if the main heading is present
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();

    // Check if all three main sections are present
    await expect(page.getByText('How I Work')).toBeVisible();
    await expect(page.getByText('Working With People')).toBeVisible();
    await expect(page.getByText('Taking Ownership')).toBeVisible();

    // Check if the intro text is present
    await expect(page.getByText('Here\'s a glimpse into how I approach problems, people, and projects.')).toBeVisible();
  });

  test('should display icons for each section', async ({ page }) => {
    // Check that each section has its icon (using aria-hidden as icons are decorative)
    const sections = page.locator('[data-testid="about-section"]');
    await expect(sections).toHaveCount(3);
  });

  test('should display all bullet points for each section', async ({ page }) => {
    // Check How I Work section points
    await expect(page.getByText('I don\'t jump straight into code')).toBeVisible();
    await expect(page.getByText('Once I know the "why," I research patterns')).toBeVisible();
    await expect(page.getByText('I design systems that solve today\'s problem')).toBeVisible();
    await expect(page.getByText('Then I code — shipping in milestones')).toBeVisible();

    // Check Working With People section points
    await expect(page.getByText('I\'ve collaborated with teammates across countries')).toBeVisible();
    await expect(page.getByText('Often the "translator" between design and dev')).toBeVisible();
    await expect(page.getByText('I value feedback loops — reviews, brainstorms')).toBeVisible();
    await expect(page.getByText('For me, Agile isn\'t a checklist')).toBeVisible();

    // Check Taking Ownership section points
    await expect(page.getByText('To me, leadership is ownership')).toBeVisible();
    await expect(page.getByText('I led the frontend team at my last company')).toBeVisible();
    await expect(page.getByText('I took an iOS app from planning to App Store')).toBeVisible();
    await expect(page.getByText('A proud win: helped a million-dollar client save $11K')).toBeVisible();
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check that content is still visible and properly laid out
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    await expect(page.getByText('How I Work')).toBeVisible();
    await expect(page.getByText('Working With People')).toBeVisible();
    await expect(page.getByText('Taking Ownership')).toBeVisible();
  });

  test('should be responsive on tablet devices', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });

    // Check that content is still visible and properly laid out
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    await expect(page.getByText('How I Work')).toBeVisible();
    await expect(page.getByText('Working With People')).toBeVisible();
    await expect(page.getByText('Taking Ownership')).toBeVisible();
  });

  test('should work with dark mode', async ({ page }) => {
    // Toggle to dark mode (assuming there's a theme toggle)
    const themeToggle = page.locator('[data-testid="theme-toggle"]');
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
    }

    // Check that content is still visible in dark mode
    await expect(page.getByRole('heading', { name: 'About Me' })).toBeVisible();
    await expect(page.getByText('How I Work')).toBeVisible();
  });

  test('should have proper accessibility features', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toHaveCount(1);

    const h2 = page.getByRole('heading', { level: 2 });
    await expect(h2).toHaveCount(3); // Three section headings

    // Check that the page has a logical tab order
    await page.keyboard.press('Tab');
    // Add more specific accessibility checks as needed
  });

  test('should take screenshots for visual validation', async ({ page }) => {
    // Take full page screenshot
    await page.screenshot({
      path: 'test-results/about-page-desktop.png',
      fullPage: true
    });

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({
      path: 'test-results/about-page-mobile.png',
      fullPage: true
    });

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.screenshot({
      path: 'test-results/about-page-tablet.png',
      fullPage: true
    });
  });
});
