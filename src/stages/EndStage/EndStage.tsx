import { animationVariants } from '../../animations'
import { Button } from '../../components/Button/Button'
import { Typography } from '../../components/Typography/Typography'
import { EAnimationType } from '../../types'
import { StageBase } from '../StageBase.styled'
import { EndStageContainer } from './EndStage.styled'
import { clickCTAButtonHandle } from '../../platforms/CTAClick'

export const EndStage = () => {
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
