import { test } from '@playwright/test';

test('capture 4 home design options', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/options-preview/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);

  // 1. Option 1: Two Accommodations Showcase
  const opt1 = page.locator('#option-1');
  await opt1.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await opt1.screenshot({ path: brainDir + '/option-1-accommodations.png' });

  // 2. Option 2: Casa-Style Estate Highlights
  const opt2 = page.locator('#option-2');
  await opt2.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await opt2.screenshot({ path: brainDir + '/option-2-casa-icons.png' });

  // 3. Option 3: A Day in Nature Sensory Rhythm
  const opt3 = page.locator('#option-3');
  await opt3.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await opt3.screenshot({ path: brainDir + '/option-3-day-in-nature.png' });

  // 4. Option 4: Managed Farmlands Feature Card
  const opt4 = page.locator('#option-4');
  await opt4.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await opt4.screenshot({ path: brainDir + '/option-4-farmland-card.png' });
});
