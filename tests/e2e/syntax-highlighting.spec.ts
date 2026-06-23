import { expect, test } from "@playwright/test";

test("code examples use Shiki-highlighted code blocks", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  const codeBlock = page.locator("pre.astro-code").first();
  await expect(codeBlock).toBeVisible();
  await expect(codeBlock.locator(".line").first()).toBeVisible();
});
