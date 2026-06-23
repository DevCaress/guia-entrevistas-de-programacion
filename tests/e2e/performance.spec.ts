import { expect, test } from "@playwright/test";

test("initial content and sidebar interaction meet smoke timing targets", async ({ page }) => {
  const start = Date.now();
  await page.goto("/guia/buenas-practicas/solid-principles");
  await expect(page.getByRole("heading", { name: "Principios SOLID", level: 1 })).toBeVisible();
  expect(Date.now() - start).toBeLessThan(2_000);

  const clickStart = Date.now();
  await page.getByRole("link", { name: "Clean Code" }).click();
  await expect(page.getByRole("heading", { name: "Clean Code", level: 1 })).toBeVisible();
  expect(Date.now() - clickStart).toBeLessThan(1_000);
});
