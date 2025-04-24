import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:8080");

  await expect(page.locator(".with-content")).toMatchAriaSnapshot(`
    - img "Alt text missing in the aria-snapshot"
    `);
});
