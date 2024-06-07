interface IConfig {
  platform: "unity" | "hybe";
  adjust: boolean;
  appToken_IOS: string;
  adjustEventToken_IOS: string;
  appToken_ANDROID: string;
  adjustEventToken_ANDROID: string;
  appUrl_IOS: string;
  appUrl_ANDROID: string;
  changeImageDelayMS: number;
}

export const Config: IConfig = {
  platform: "unity",
  adjust: true,
  appToken_IOS: "8bbzllaj7hxc",
  adjustEventToken_IOS: "18rujp",
  appUrl_IOS: "https://apps.apple.com/ru/app/id1632443454",
  appToken_ANDROID: "uah41mk7u51c",
  adjustEventToken_ANDROID: "2l3o46",
  appUrl_ANDROID:
    "https://play.google.com/store/apps/details?id=ru.yandex.travel&hl=ru",
  changeImageDelayMS: 100,
} as const;
