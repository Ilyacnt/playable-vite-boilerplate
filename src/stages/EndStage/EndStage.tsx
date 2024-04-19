import Adjust from '@adjustcom/adjust-web-sdk'
import { animationVariants } from '../../animations'
import { Button } from '../../components/Button/Button'
import { Typography } from '../../components/Typography/Typography'
import { unityOnCTAClick } from '../../platforms/Unity'
import { EAnimationType } from '../../types'
import { StageBase } from '../StageBase.styled'
import { EndStageContainer } from './EndStage.styled'
import { Config } from '../../Config'

export const EndStage = () => {
    const clickCTAButtonHandle = () => {
        console.log('CTA Button Click')

        Adjust.trackEvent({
            eventToken: Config.adjustEventToken,
        })
        unityOnCTAClick()
    }

    return (
        <StageBase>
            <EndStageContainer animate={EAnimationType.APPEARANCE} variants={animationVariants}>
                <Typography>You are on EndStage</Typography>
                <Button animation={EAnimationType.PULSE} onClick={clickCTAButtonHandle}>
                    CTA Button
                </Button>
            </EndStageContainer>
        </StageBase>
    )
}
