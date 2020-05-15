import {by, element, expect, waitFor} from "detox";
import {reloadApp} from "detox-expo-helpers";

describe("Main Screen", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("Check for text on the home screen", async () => {
    await expect(
      element(by.label("Open up the code for this screen:"))
    ).toBeVisible();
  });
});
