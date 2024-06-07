import Adjust from "@adjustcom/adjust-web-sdk";
import { Config } from "../Config";
import { unityOnCTAClick } from "./Unity";
import { hybeOnCTAClick } from "./Hybe";
import { isIOS } from "react-device-detect";

export const clickCTAButtonHandle = () => {
  console.log("CTA Button Click");

  if (Config.adjust) {
    Adjust &&
      Adjust.trackEvent({
        eventToken: isIOS
          ? Config.adjustEventToken_IOS
          : Config.adjustEventToken_ANDROID,
      });
  }

  if (Config.platform === "unity") {
    unityOnCTAClick();
  } else if (Config.platform === "hybe") {
    hybeOnCTAClick();
  }
};
