import { Config } from '../Config'

export const unityOnCTAClick = () => {
    window.mraid && window.mraid.open(Config.appUrl)
}
