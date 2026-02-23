import { expect, test } from "@playwright/test";

test("renders key launch sections", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Runaid is launching soon." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What Runaid Does" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Join the Waitlist" })).toBeVisible();
});

test("shows validation failure state for invalid form", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Join the waitlist" }).first().click();
  await expect(page.getByText("Please provide a valid email address.")).toBeVisible();
});

test("shows safe failure message if API fails", async ({ page }) => {
  await page.route("**/api/waitlist/subscribe", async (route) => {
    await route.fulfill({
      status: 502,
      contentType: "application/json",
      body: JSON.stringify({ ok: false, message: "Unable to submit right now. Please try again." }),
    });
  });

  await page.goto("/");
  await page.getByLabel("Email").first().fill("runner@example.com");
  await page.getByRole("checkbox").first().check();
  await page.getByRole("button", { name: "Join the waitlist" }).first().click();

  await expect(page.getByText("Unable to submit right now. Please try again.")).toBeVisible();
});
