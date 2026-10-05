import { test } from '@playwright/test';

test('capture farmland page visual verification', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/farmland/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);

  // 1. Hero
  await page.screenshot({ path: `${brainDir}/farmland-hero.png` });

  // 2. Metrics & Heading
  const headerElem = page.locator('#farmland-brief-title');
  await headerElem.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/farmland-metrics.png` });

  // 3. 4 Core Pillars with AI Photography
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/farmland-pillars-top.png` });

  await page.evaluate(() => window.scrollBy(0, 650));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/farmland-pillars-bottom.png` });

  // 4. Distance Strip
  const distBox = page.locator('text=Location & Connectivity');
  await distBox.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/farmland-distances.png` });

  // 5. 3-Step Journey Box & CTA
  const ctaBox = page.locator('text=How Farmland Ownership Works');
  await ctaBox.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/farmland-journey-cta.png` });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${brainDir}/farmland-mobile-hero.png` });

  await page.evaluate(() => window.scrollBy(0, 480));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${brainDir}/farmland-mobile-cards.png` });
});
