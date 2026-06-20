import { expect, test } from "@playwright/test";

test("guide pages expose page-specific SEO metadata", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  await expect(page).toHaveTitle("Principios SOLID | Guia de entrevistas tecnicas");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Resumen de los principios SOLID y recursos para aplicarlos en entrevistas tecnicas."
  );
});
