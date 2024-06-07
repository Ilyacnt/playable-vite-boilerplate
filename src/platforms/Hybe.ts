// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { isAndroid, isIOS } from 'react-device-detect'
import { Config } from '../Config'

export const hybeOnCTAClick = () => {
  if (isIOS) {
    window.mraid && window.mraid.open(`%%CLICK_URL_UNESC%%${Config.appUrl_IOS}`)
  } else if (isAndroid) {
    window.mraid && window.mraid.open(`%%CLICK_URL_UNESC%%${Config.appUrl_ANDROID}`)
  }
}
