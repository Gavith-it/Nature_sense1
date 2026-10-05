import { test } from '@playwright/test';

test('capture facilities page visual verification', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  // Desktop
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/facilities/');
  await page.waitForLoadState('networkidle');

  // 1. Hero
  await page.screenshot({ path: `${brainDir}/facilities-hero.png` });

  // 2. Editorial intro + 16 facilities
  const intro = page.locator('section[aria-labelledby="facilities-intro-title"]');
  await intro.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = 'hidden';
  });
  await intro.screenshot({ path: `${brainDir}/facilities-intro-list.png` });

  // 3. Farm Kitchen zone
  const kitchen = page.locator('#kitchen');
  await kitchen.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await kitchen.screenshot({ path: `${brainDir}/facilities-farm-kitchen.png` });

  // Mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: `${brainDir}/facilities-mobile-hero.png` });

  const mobileIntro = page.locator('section[aria-labelledby="facilities-intro-title"]');
  await mobileIntro.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = 'hidden';
  });
  await mobileIntro.screenshot({ path: `${brainDir}/facilities-mobile-intro.png` });
});

test('capture facilities around the estate zones', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/facilities/');
  await page.waitForLoadState('networkidle');

  const zonesTitle = page.locator('#zones-title');
  await zonesTitle.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);

  await page.evaluate(() => {
    const header = document.querySelector('header');
    if (header) header.style.visibility = 'hidden';
  });

  await page.screenshot({ path: `${brainDir}/facilities-zones-updated.png` });

  const lawn = page.locator('#lawn');
  await lawn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await lawn.screenshot({ path: `${brainDir}/facilities-lawn-card.png` });

  const games = page.locator('#games');
  await games.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await games.screenshot({ path: `${brainDir}/facilities-games-card.png` });

  const eventSpace = page.locator('#event-space');
  await eventSpace.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await eventSpace.screenshot({ path: `${brainDir}/facilities-event-space-card.png` });

  const play = page.locator('#play');
  await play.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await play.screenshot({ path: `${brainDir}/facilities-play-card.png` });

  const kitchen = page.locator('#kitchen');
  await kitchen.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await kitchen.screenshot({ path: `${brainDir}/facilities-kitchen-card.png` });
});
