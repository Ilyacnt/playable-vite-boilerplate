interface IConfig {
    platform: 'unity'
    adjust: boolean
    adjustEventToken: string
    appToken: string
    appUrl: string
}

export const Config: IConfig = {
    platform: 'unity',
    adjust: true,
    appToken: '3xedbfy9nakv',
    adjustEventToken: 'CALL_AUTO_DEALER_ALL,CHAT_1ST_MESSAGE_SENT,CALL_AUTO_TAP,USER_VALUE',
    appUrl: 'https://apps.apple.com/ru/app/id507760450',
} as const
