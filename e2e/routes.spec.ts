import { expect, test } from '@playwright/test';

// Every public route renders a heading, raises no console errors, and never scrolls sideways.
const ROUTES = [
  '/',
  '/rooms',
  '/rooms/buddha',
  '/rooms/mithila',
  '/pieces',
  '/pieces?craft=newar-woodcarving',
  '/pieces/ptn-mt-26-0142-shakyamuni-earth-touching',
  '/pieces/jnk-mh-26-0031-fish-pair-for-a-new-home',
  '/pieces/ktm-tk-26-0012-green-tara-thangka',
  '/pieces/bkt-wd-26-0018-ganesh-seated',
  '/pieces/bkt-wd-26-0021-peacock-window-panel',
  '/pieces/ptn-st-26-0007-shakyamuni-meditation-stone',
  '/makers',
  '/makers/raju-shakya',
  '/makers/sunita-jha',
  '/places',
  '/places/patan',
  '/places/lumbini',
  '/crafts',
  '/crafts/lost-wax-casting',
  '/meaning',
  '/meaning/green-tara',
  '/care',
  '/care/wood',
  '/care/refills',
  '/journal',
  '/journal/why-we-film-the-whole-making',
  '/registry',
  '/record/ptn-mt-26-0118',
  '/about',
  '/about/makers-share',
  '/about/how-we-work',
  '/visit',
  '/trade',
  '/contact',
  '/help',
  '/help/shipping',
  '/help/returns',
  '/help/export-and-customs',
  '/help/payments',
  '/help/faq',
  '/search?q=patan',
  '/legal/terms',
  '/legal/privacy',
  '/legal/cookies',
  '/cart',
  '/account/collection',
  '/does-not-exist',
];

for (const route of ROUTES) {
  test(`renders ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto(route);
    if (route !== '/') await expect(page.locator('main h1').first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, 'page scrolls sideways').toBeLessThanOrEqual(0);
    expect(errors.filter((e) => !e.includes('404'))).toEqual([]);
  });
}

test('short links redirect', async ({ page }) => {
  await page.goto('/p/ptn-mt-26-0142');
  await expect(page).toHaveURL(/\/pieces\/ptn-mt-26-0142-shakyamuni-earth-touching$/);
  await page.goto('/r/ptn-mt-26-0142');
  await expect(page).toHaveURL(/\/record\/ptn-mt-26-0142$/);
  await page.goto('/pieces/ptn-mt-26-0142-old-slug');
  await expect(page).toHaveURL(/\/pieces\/ptn-mt-26-0142-shakyamuni-earth-touching$/);
});
