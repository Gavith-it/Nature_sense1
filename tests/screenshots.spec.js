import { test } from '@playwright/test';

test('capture hero and welcome screenshots', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  
  const device = testInfo.project.name.toLowerCase().replace(/\s+/g, '-');
  
  // Hero view
  await page.screenshot({ path: `screenshots/${device}-hero.png` });
  
  // Scroll to welcome section
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(600);
  await page.screenshot({ path: `screenshots/${device}-welcome.png` });
});
