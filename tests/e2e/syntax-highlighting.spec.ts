import { expect, test } from "@playwright/test";

test("code examples use Shiki-highlighted code blocks", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  const codeBlock = page.locator("pre.astro-code").first();
  await expect(codeBlock).toBeVisible();
  await expect(codeBlock.locator(".line").first()).toBeVisible();
});

test("code examples use the active theme colors", async ({ page }) => {
  await page.goto("/guia/buenas-practicas/solid-principles");

  const codeBlock = page.locator("pre.astro-code").first();
  const token = codeBlock.locator("span[style*='--shiki-dark']").first();
  const tokenUsesThemeColor = (property: string) =>
    token.evaluate((element, customProperty) => {
      const styles = getComputedStyle(element);
      const probe = document.createElement("span");
      probe.style.color = styles.getPropertyValue(customProperty);
      document.body.append(probe);
      const expectedColor = getComputedStyle(probe).color;
      probe.remove();
      return styles.color === expectedColor;
    }, property);

  await expect(codeBlock).toHaveCSS("background-color", "rgb(17, 24, 39)");
  expect(await tokenUsesThemeColor("--shiki-dark")).toBe(true);

  await page.getByRole("button", { name: "Cambiar tema" }).click();

  await expect(codeBlock).toHaveCSS("background-color", "rgb(241, 245, 249)");
  expect(await tokenUsesThemeColor("--shiki-light")).toBe(true);
});
