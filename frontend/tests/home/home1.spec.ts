import { test, expect } from "@playwright/test";

test('Should navigate to the index page and see key elements', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    // The user should see the header
    await expect(page.locator('id=BrandName')).toContainText('Critboard');

    // The user should see the welcome box
    await expect(page.locator('id=WelcomeBoxHeader')).toContainText('Creative Feedback');

    // The user notices the hottest submissions
    await expect (page.locator('id=HottestSubmissionsHeader')).toContainText('Hottest Submissions');
})