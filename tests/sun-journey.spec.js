import { test } from '@playwright/test';

test('capture Sun Arc Estate Journey on Home page', async ({ page }) => {
  const brainDir = 'C:/Users/AmanKumar/.gemini/antigravity/brain/527ed68f-ca95-470c-859f-605f5c98dd0d';

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  // Scroll to #around-estate
  const section = page.locator('#around-estate');
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  // Capture initial 09:30 AM (Clubhouse & Lawns)
  await page.screenshot({ path: brainDir + '/sun-package-0930.png' });

  // Click on 11:30 AM (Games & Gym - index 1)
  const gamesCircle = page.locator('svg g.cursor-pointer').nth(1);
  await gamesCircle.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/sun-package-1130.png' });

  // Click on 01:00 PM (Farm Kitchen Buffet Lunch - index 2)
  const lunchCircle = page.locator('svg g.cursor-pointer').nth(2);
  await lunchCircle.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/sun-package-0100.png' });

  // Click on 03:30 PM (Swimming Pool - index 3)
  const poolCircle = page.locator('svg g.cursor-pointer').nth(3);
  await poolCircle.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/sun-package-0330.png' });

  // Click on 05:30 PM (Hi-Tea - index 4)
  const hiTeaCircle = page.locator('svg g.cursor-pointer').nth(4);
  await hiTeaCircle.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/sun-package-0530.png' });

  // Click on 06:30 PM (Play & Twilight - index 5)
  const playCircle = page.locator('svg g.cursor-pointer').nth(5);
  await playCircle.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/sun-package-0630.png' });

  // Scroll to #rooms-title and capture Farm Stay
  const roomsHeading = page.locator('#rooms-title');
  await roomsHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/farm-stay-header.png' });

  // Scroll to #day-title and capture Farm Kitchen on Home
  const kitchenHeading = page.locator('#day-title');
  await kitchenHeading.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/farm-kitchen-home.png' });

  // Visit /stay/ and capture Tent Rooms card
  await page.goto('/stay/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);
  const tentRoomsCard = page.locator('article:has-text("Tent Rooms")');
  await tentRoomsCard.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: brainDir + '/tent-rooms-card.png' });

  // Mobile viewport capture on Home
  await page.goto('/');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  const mobileSection = page.locator('#around-estate');
  await mobileSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: brainDir + '/sun-package-mobile.png' });
});
