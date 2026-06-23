import { expect, test } from "@playwright/test";

test("navigation controls are keyboard reachable and named", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/guia/buenas-practicas/solid-principles");

  await expect(page.getByRole("navigation", { name: "Secciones de la guia" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Menu" })).toBeAttached();
  await expect(page.getByRole("button", { name: "Cambiar tema" })).toBeVisible();
});
