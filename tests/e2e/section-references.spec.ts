import { expect, test } from "@playwright/test";

test("section pages render original references with readable labels", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  await expect(page.getByRole("heading", { name: "Referencias", level: 2 })).toBeVisible();
  await expect(page.getByRole("link", { name: "SOLID en Python - Inglés" })).toHaveAttribute(
    "href",
    "https://realpython.com/solid-principles-python/"
  );
});
