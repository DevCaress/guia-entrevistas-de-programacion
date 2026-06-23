import { expect, test } from "@playwright/test";

test("examples render only for sections that define them", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  await expect(page.getByRole("heading", { name: "Ejemplos", level: 2 })).toBeVisible();
  await expect(page.getByText("Single Responsibility Principle")).toBeVisible();

  await page.goto("/guia/buenas-practicas/clean-code");
  await expect(page.getByRole("heading", { name: "Ejemplos", level: 2 })).toHaveCount(0);
});
