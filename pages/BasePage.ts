import { Page, expect } from '@playwright/test';
// Page (capital P) must be imported because it is a TypeScript type, clearly defining that the variable `page` is of this type (i.e., it has all the methods and properties that a Playwright Page object has: goto(), click(), locator(), etc.).
// In a class like BasePage, `page` is just a reference/parameter; it doesn't "exist" on its own.
// Only in BaseTest (or in tests run by Playwright) does `page` become a real object that Playwright automatically creates and injects (fixture).
// expect is a direct Playwright function


export class BasePage {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // The web page is loaded, basic version
  async waitForAppReadyBasic(selector: string, timeout: number = 10_000) {
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('networkidle');
    await expect(this.page.locator(selector)).toBeVisible({ timeout });
  }

  // The web page is loaded, masive full version

  async waitForAppReadyFull(selector: string, timeout: number = 15000) {
  const { page } = this;

  // 1. All Playwright load state fases
  await page.waitForLoadState('domcontentloaded', { timeout });
  await page.waitForLoadState('load', { timeout });
  await page.waitForLoadState('networkidle', { timeout });

  // 2. Extra checks to ensure the page is fully stable
  await page.waitForFunction(() => {
    const docReady = document.readyState === 'complete';
    const imgsLoaded = Array.from(document.images).every(
      (img) => img.complete && img.naturalWidth > 0
    );
    const fontsLoaded =
      !('fonts' in document) || (document as any).fonts.status === 'loaded';
    const noAnimations =
      !(document as any).getAnimations ||
      (document as any)
        .getAnimations({ subtree: true })
        .every((a: any) => a.playState !== 'running');
    return docReady && imgsLoaded && fontsLoaded && noAnimations;
  }, { timeout });


 // 3. Target element is ready and visible
  const locator = page.locator(selector);
  await expect(locator).toBeVisible({ timeout });
}

  // 4. A short pause to fully stabilize the UI
 

// Calls all three Playwright page load phases (domcontentloaded, load, networkidle).
// Waits for all images, fonts, and animations to finish.
// Checks that the targeted web element is visible and ready for interaction.
// Adds a short stabilization pause of 300 ms for complete safety.




  
}
