import { test } from '@playwright/test';

test('capture palette preview', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/options-preview/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  const preview = page.locator('#palette-preview');
  await preview.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await preview.screenshot({ path: brainDir + '/palette-evaluation.png' });
});
