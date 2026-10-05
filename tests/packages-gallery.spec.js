import { test } from '@playwright/test';

test('capture packages photo gallery and lightbox', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  // --- DESKTOP CAPTURE ---
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/packages/');
  await page.waitForLoadState('networkidle');

  const gallery = page.locator('section[aria-labelledby="gallery-title"]');
  await gallery.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  // Temporarily hide fixed header so element screenshot is completely clean
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = 'hidden';
  });

  // 1. Desktop full gallery view
  await gallery.screenshot({ path: `${brainDir}/packages-gallery-desktop.png` });

  // Restore header
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = '';
  });

  // 2. Click first card to test lightbox
  const firstCard = gallery.locator('article').first();
  await firstCard.click();
  await page.waitForTimeout(600);

  // 3. Screenshot lightbox modal
  await page.screenshot({ path: `${brainDir}/packages-lightbox.png` });

  // 4. Test arrow navigation inside lightbox
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/packages-lightbox-next.png` });

  // 5. Close lightbox with Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);

  // 6. Test category filter: Pool & Lounge
  await gallery.locator('button:has-text("Pool & Lounge")').click();
  await page.waitForTimeout(500);

  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = 'hidden';
  });
  await gallery.screenshot({ path: `${brainDir}/packages-gallery-filtered.png` });

  // --- MOBILE CAPTURE ---
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.waitForLoadState('networkidle');

  const mobileGallery = page.locator('section[aria-labelledby="gallery-title"]');
  await mobileGallery.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = 'hidden';
  });
  await mobileGallery.screenshot({ path: `${brainDir}/packages-gallery-mobile.png` });
});

test('capture updated Corporate Events card and Plan Your Gathering', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/packages/');
  await page.waitForLoadState('networkidle');

  // 1. Corporate Events card
  const corpCard = page.locator('article:has-text("Corporate Events")');
  await corpCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/package-corporate-card.png` });

  // 2. Plan Your Gathering section
  const enquire = page.locator('#enquire');
  await enquire.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/package-plan-gathering.png` });
});


