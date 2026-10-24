import {test, expect,chromium} from "@playwright/test";
import {POManager} from "../../pageobjects/POManager.js";
import {Before,After,BeforeStep,AfterStep,Status} from '@cucumber/cucumber';

Before({tags:"@Regression"},async function(){
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page);
})

After({tags:"@Regression"},async function(){

    console.log("I have completed the execution");
    
})
BeforeStep(function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});

AfterStep(async function ({result}) {
  // This hook will be executed after all steps, and take a screenshot on step failure
  if (result.status === Status.FAILED) {
    
    await this.page.takeScreenshot({path:screenshot1.png});
  }
}) 