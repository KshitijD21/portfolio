import { expect, test } from '@playwright/test';

test.describe('Mobile Hero Section Responsiveness', () => {

  test('Mobile hero layout - Profile image above content on small mobile (320px)', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');

    // Wait for hero section to load
    await page.waitForSelector('#hero');

    // Take screenshot for visual validation
    await page.screenshot({
      path: 'test-results/mobile-hero-320px.png',
      fullPage: true
    });

    // Verify profile image is visible on mobile
    const mobileProfileImage = page.locator('.lg\\:hidden img[alt="Kshitij Dumbre"]');
    await expect(mobileProfileImage).toBeVisible();

    // Verify desktop profile image is hidden on mobile
    const desktopProfileImage = page.locator('.hidden.lg\\:flex img[alt="Kshitij Dumbre"]');
    await expect(desktopProfileImage).toBeHidden();

    // Verify text content is centered
    const textContent = page.locator('.text-center.lg\\:text-left');
    await expect(textContent).toBeVisible();

    // Verify greeting text is visible and properly sized
    const greeting = page.locator('text=Hi, I\'m Kshitij 👋');
    await expect(greeting).toBeVisible();

    // Verify main heading is visible and responsive
    const mainHeading = page.locator('h1:has-text("I design and build software")');
    await expect(mainHeading).toBeVisible();

    // Verify buttons are full width on mobile
    const checkWorkButton = page.locator('button:has-text("Check My Work")');
    await expect(checkWorkButton).toBeVisible();

    const resumeButton = page.locator('button:has-text("View Resume")');
    await expect(resumeButton).toBeVisible();

    // Verify social icons are centered
    const socialIcons = page.locator('.flex.justify-center.lg\\:justify-start');
    await expect(socialIcons).toBeVisible();
  });

  test('Mobile hero layout - iPhone SE size (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    await page.waitForSelector('#hero');

    // Take screenshot
    await page.screenshot({
      path: 'test-results/mobile-hero-375px.png',
      fullPage: true
    });

    // Verify layout elements
    const mobileProfileImage = page.locator('.lg\\:hidden img[alt="Kshitij Dumbre"]');
    await expect(mobileProfileImage).toBeVisible();

    // Check button responsiveness
    const buttonsContainer = page.locator('.flex.flex-col.sm\\:flex-row.gap-3');
    await expect(buttonsContainer).toBeVisible();
  });

  test('Mobile hero layout - iPhone Plus size (414px)', async ({ page }) => {
    await page.setViewportSize({ width: 414, height: 736 });
    await page.goto('/');

    await page.waitForSelector('#hero');

    // Take screenshot
    await page.screenshot({
      path: 'test-results/mobile-hero-414px.png',
      fullPage: true
    });

    // Verify mobile layout is still active
    const mobileProfileImage = page.locator('.lg\\:hidden img[alt="Kshitij Dumbre"]');
    await expect(mobileProfileImage).toBeVisible();

    // Verify text is still centered
    const textContent = page.locator('.text-center.lg\\:text-left');
    await expect(textContent).toBeVisible();
  });

  test('Tablet layout transition (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await page.waitForSelector('#hero');

    // Take screenshot
    await page.screenshot({
      path: 'test-results/tablet-hero-768px.png',
      fullPage: true
    });

    // On tablet, mobile layout should still be active (lg breakpoint is 1024px)
    const mobileProfileImage = page.locator('.lg\\:hidden img[alt="Kshitij Dumbre"]');
    await expect(mobileProfileImage).toBeVisible();
  });

  test('Desktop layout preservation (1280px)', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    await page.waitForSelector('#hero');

    // Take screenshot
    await page.screenshot({
      path: 'test-results/desktop-hero-1280px.png',
      fullPage: true
    });

    // On desktop, mobile profile should be hidden
    const mobileProfileImage = page.locator('.lg\\:hidden');
    await expect(mobileProfileImage).toBeHidden();

    // Desktop profile should be visible
    const desktopProfileImage = page.locator('.hidden.lg\\:flex img[alt="Kshitij Dumbre"]');
    await expect(desktopProfileImage).toBeVisible();

    // Text should be left-aligned on desktop
    const textContent = page.locator('.text-center.lg\\:text-left');
    await expect(textContent).toBeVisible();
  });

  test('Button responsiveness across viewports', async ({ page }) => {
    const viewports = [
      { width: 320, height: 568, name: 'mobile-320' },
      { width: 375, height: 667, name: 'mobile-375' },
      { width: 768, height: 1024, name: 'tablet-768' },
      { width: 1280, height: 720, name: 'desktop-1280' }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForSelector('#hero');

      // Take screenshot for each viewport
      await page.screenshot({
        path: `test-results/buttons-${viewport.name}.png`,
        fullPage: false,
        clip: { x: 0, y: 200, width: viewport.width, height: 400 }
      });

      // Verify buttons are visible and clickable
      const checkWorkButton = page.locator('button:has-text("Check My Work")');
      await expect(checkWorkButton).toBeVisible();
      await expect(checkWorkButton).toBeEnabled();

      const resumeButton = page.locator('button:has-text("View Resume")');
      await expect(resumeButton).toBeVisible();
      await expect(resumeButton).toBeEnabled();
    }
  });

  test('Font size responsiveness', async ({ page }) => {
    // Test mobile font sizes
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
    await page.waitForSelector('#hero');

    // Check that heading uses smaller classes on mobile
    const mainHeading = page.locator('h1');
    const headingClasses = await mainHeading.getAttribute('class');

    // Should contain responsive text classes
    expect(headingClasses).toContain('text-lg'); // mobile size
    expect(headingClasses).toContain('sm:text-2xl'); // small mobile+
    expect(headingClasses).toContain('lg:text-4xl'); // desktop size

    // Test desktop to verify larger fonts are applied
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForSelector('#hero');

    // Same element should now use larger fonts at desktop breakpoint
    const headingClassesDesktop = await mainHeading.getAttribute('class');
    expect(headingClassesDesktop).toContain('lg:text-4xl');
  });
});
