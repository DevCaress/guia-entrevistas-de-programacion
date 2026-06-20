import { expect, test } from "@playwright/test";

test("theme toggle persists light and dark preferences", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Cambiar tema" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});
