import Adjust from '@adjustcom/adjust-web-sdk'
import { Config } from '../Config'
import { unityOnCTAClick } from './Unity'

export const clickCTAButtonHandle = () => {
    console.log('CTA Button Click')

    if (Config.adjust) {
        Adjust.trackEvent({
            eventToken: Config.adjustEventToken,
        })
    }

    if (Config.platform === 'unity') {
        unityOnCTAClick()
    }
}
