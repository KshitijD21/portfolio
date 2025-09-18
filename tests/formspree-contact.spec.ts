import { expect, test } from '@playwright/test';

test.describe('Formspree Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page where the contact form is integrated
    await page.goto('http://localhost:3002');

    // Wait for the page to load and scroll to the contact form
    await page.waitForLoadState('networkidle');
    await page.locator('#contact-form').scrollIntoViewIfNeeded();
  });

  test('should display contact form with correct elements and labels', async ({ page }) => {
    // Check if the main heading is visible
    await expect(page.locator('h2:has-text("📬 Get in Touch")')).toBeVisible();

    // Check if the subheading is visible
    await expect(page.locator('text=✨ Let\'s Build Something Cool')).toBeVisible();

    // Check if the subtext is visible
    await expect(page.locator('text=Drop me a message, and let\'s see where this goes')).toBeVisible();

    // Check form fields with correct labels
    await expect(page.locator('label:has-text("Your good name?")')).toBeVisible();
    await expect(page.locator('label:has-text("Where do I reply back?")')).toBeVisible();
    await expect(page.locator('label:has-text("Type it out…")')).toBeVisible();

    // Check if all form inputs are present
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();

    // Check submit button
    await expect(page.locator('button:has-text("Say Hi 👋")')).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit empty form
    await page.locator('button:has-text("Say Hi 👋")').click();

    // Check if HTML5 validation is working (name field should be focused)
    await expect(page.locator('input[name="name"]')).toBeFocused();

    // Fill name and try again
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('button:has-text("Say Hi 👋")').click();

    // Email field should be focused next
    await expect(page.locator('input[name="email"]')).toBeFocused();

    // Fill email and try again
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('button:has-text("Say Hi 👋")').click();

    // Message field should be focused next
    await expect(page.locator('textarea[name="message"]')).toBeFocused();
  });

  test('should handle form submission states', async ({ page }) => {
    // Fill out the form completely
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('textarea[name="message"]').fill('This is a test message for the contact form.');

    // Submit the form
    await page.locator('button:has-text("Say Hi 👋")').click();

    // Check if button shows loading state
    await expect(page.locator('button:has-text("Sending...")')).toBeVisible();
    await expect(page.locator('.animate-spin')).toBeVisible();

    // Wait for response (will likely show error since formspreeId is placeholder)
    await page.waitForSelector('[class*="bg-red-50"], [class*="bg-green-50"]', { timeout: 10000 });

    // Check if error message is shown (expected since using placeholder ID)
    await expect(page.locator('text=Oops, something went wrong. Try again?')).toBeVisible();
  });

  test('should be accessible', async ({ page }) => {
    // Check if form has proper labels and associations
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');

    // Check if inputs have associated labels
    await expect(nameInput).toHaveAttribute('id', 'name');
    await expect(emailInput).toHaveAttribute('id', 'email');
    await expect(messageInput).toHaveAttribute('id', 'message');

    // Check if labels point to correct inputs
    await expect(page.locator('label[for="name"]')).toBeVisible();
    await expect(page.locator('label[for="email"]')).toBeVisible();
    await expect(page.locator('label[for="message"]')).toBeVisible();

    // Check if email input has correct type
    await expect(emailInput).toHaveAttribute('type', 'email');

    // Check if required fields are marked as required
    await expect(nameInput).toHaveAttribute('required');
    await expect(emailInput).toHaveAttribute('required');
    await expect(messageInput).toHaveAttribute('required');
  });

  test('should be responsive on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Scroll to contact form
    await page.locator('#contact-form').scrollIntoViewIfNeeded();

    // Check if form is visible and properly sized
    await expect(page.locator('#contact-form')).toBeVisible();

    // Check if all form elements are visible on mobile
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.locator('button:has-text("Say Hi 👋")')).toBeVisible();

    // Check if button is full-width on mobile
    const button = page.locator('button:has-text("Say Hi 👋")');
    const buttonBounds = await button.boundingBox();
    const containerBounds = await page.locator('#contact-form .max-w-xl').boundingBox();

    // Button should be close to full container width (accounting for padding)
    expect(buttonBounds?.width).toBeGreaterThan((containerBounds?.width || 0) * 0.8);
  });

  test('should be responsive on tablet viewport', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });

    // Scroll to contact form
    await page.locator('#contact-form').scrollIntoViewIfNeeded();

    // Check if form is visible and properly sized
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('h2:has-text("📬 Get in Touch")')).toBeVisible();

    // Check if all form elements maintain proper spacing
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test('should be responsive on desktop viewport', async ({ page }) => {
    // Set large desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Scroll to contact form
    await page.locator('#contact-form').scrollIntoViewIfNeeded();

    // Check if form maintains max-width and is centered
    await expect(page.locator('#contact-form')).toBeVisible();

    // The form should be centered and not too wide
    const formContainer = page.locator('#contact-form .max-w-xl');
    const containerBounds = await formContainer.boundingBox();

    // Should maintain max-width constraint
    expect(containerBounds?.width).toBeLessThanOrEqual(576); // max-w-xl is 576px
  });
});

test.describe('Contact Form Dark Mode', () => {
  test('should work properly in dark mode', async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:3002');

    // Try to toggle to dark mode if there's a toggle button
    const darkModeToggle = page.locator('[aria-label*="theme"], [aria-label*="dark"], button:has-text("dark")');
    if (await darkModeToggle.isVisible()) {
      await darkModeToggle.click();
      await page.waitForTimeout(500); // Wait for theme change
    }

    // Scroll to contact form
    await page.locator('#contact-form').scrollIntoViewIfNeeded();

    // Check if form is still visible and functional in dark mode
    await expect(page.locator('#contact-form')).toBeVisible();
    await expect(page.locator('h2:has-text("📬 Get in Touch")')).toBeVisible();

    // Test form interaction in dark mode
    await page.locator('input[name="name"]').fill('Dark Mode Test');
    await page.locator('input[name="email"]').fill('darkmode@test.com');
    await page.locator('textarea[name="message"]').fill('Testing the form in dark mode.');

    // Submit button should be visible and clickable
    await expect(page.locator('button:has-text("Say Hi 👋")')).toBeVisible();
  });
});
