import { expect, test } from "@playwright/test";

test("direct guide URL renders sidebar with active section", async ({ page }) => {
  await page.goto("/guia/buenas-practicas-en/angular");

  await expect(page.getByRole("heading", { name: "Angular", level: 1 })).toBeVisible();
  const sidebar = page.getByRole("navigation", { name: "Secciones de la guia" });
  await expect(sidebar).toBeVisible();
  await expect(sidebar.getByRole("link", { name: "Angular", exact: true })).toHaveAttribute("aria-current", "page");
});
