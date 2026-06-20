import { expect, test } from "@playwright/test";

test("sidebar navigation opens multiple guide pages", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  await expect(page.getByRole("heading", { name: "Principios SOLID", level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Clean Code" }).click();

  await expect(page).toHaveURL(/\/guia\/buenas-practicas\/clean-code$/);
  await expect(page.getByRole("heading", { name: "Clean Code", level: 1 })).toBeVisible();
});
