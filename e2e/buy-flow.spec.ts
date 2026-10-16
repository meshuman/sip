import { expect, test } from '@playwright/test';

test('buy a piece, see it recorded, write to the maker', async ({ page }) => {
  await page.goto('/pieces/ptn-mt-26-0142-shakyamuni-earth-touching');
  await page
    .getByRole('button', { name: /Make it yours/ })
    .first()
    .click();
  await expect(page).toHaveURL(/\/cart$/);
  await page.getByRole('link', { name: 'Continue to details' }).click();
  await page.getByRole('button', { name: /Pay and record it to me/ }).click();
  await expect(page).toHaveURL(/\/checkout\/complete\/SP-/);
  await expect(page.getByRole('heading', { name: 'Recorded to you' })).toBeVisible();

  await page.getByRole('button', { name: /Send to Raju/ }).click();
  await expect(page.getByText('Sent to Raju.')).toBeVisible();
  await expect(page.locator('.sp-thread__reply')).toContainText('Raju replied', { timeout: 10_000 });

  await page.goto('/record/ptn-mt-26-0142');
  await expect(page.getByText('This piece is recorded to you.')).toBeVisible();
});

test('registry check opens a record and explains a bad number', async ({ page }) => {
  await page.goto('/registry');
  await page.getByLabel('Registry number').fill('abc');
  await page.getByRole('button', { name: 'Check a number' }).click();
  await expect(page.locator('.reg-err')).toContainText('isn’t a registry number');
  await page.getByLabel('Registry number').fill('jnk-mh-26-0029');
  await page.getByRole('button', { name: 'Check a number' }).click();
  await expect(page).toHaveURL(/\/record\/jnk-mh-26-0029$/);
});
