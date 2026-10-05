import { test } from '@playwright/test';

test('capture visit page visual verification', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/visit/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  // 1. Hero
  await page.screenshot({ path: `${brainDir}/visit-hero.png` });

  // 2. Intro + Quick Facts + Action Buttons
  await page.evaluate(() => window.scrollBy(0, 420));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${brainDir}/visit-intro-section.png` });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${brainDir}/visit-mobile-hero.png` });

  await page.evaluate(() => window.scrollBy(0, 360));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${brainDir}/visit-mobile-intro.png` });
});
