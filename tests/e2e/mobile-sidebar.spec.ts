import { expect, test } from "@playwright/test";

test("mobile sidebar opens and closes after selecting a page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/guia/buenas-practicas/solid-principles");

  const menu = page.getByRole("button", { name: "Menu" });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");

  await page.getByRole("link", { name: "Clean Code" }).click();
  await expect(page).toHaveURL(/\/guia\/buenas-practicas\/clean-code$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});
