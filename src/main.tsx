import ReactDOM from "react-dom/client";
import Layout from "./Layout.tsx";
import "./global.css";
import Adjust from "@adjustcom/adjust-web-sdk";
import { Config } from "./Config.ts";
import { isIOS } from "react-device-detect";

if (Config.adjust) {
  Adjust.initSdk({
    appToken: isIOS ? Config.appToken_IOS : Config.appToken_ANDROID,
    environment: "production",
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Layout />);
