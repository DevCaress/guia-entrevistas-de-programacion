import { expect, test } from "@playwright/test";

test("expanding a long sidebar group does not shift its controls", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/guia/algoritmos-y-estructuras-de-datos/algoritmos");

  const sidebar = page.locator("[data-sidebar]");
  const groupToggle = page.getByRole("button", { name: "Buenas practicas en" });
  await expect(groupToggle).toHaveAttribute("aria-expanded", "false");

  const collapsedWidth = await sidebar.evaluate((element) => element.clientWidth);
  await groupToggle.click();
  await expect(groupToggle).toHaveAttribute("aria-expanded", "true");

  await expect
    .poll(() => sidebar.evaluate((element) => element.scrollHeight > element.clientHeight))
    .toBe(true);
  await expect.poll(() => sidebar.evaluate((element) => element.clientWidth)).toBe(collapsedWidth);
});
