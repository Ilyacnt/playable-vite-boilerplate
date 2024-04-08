import { Button } from '../../components/Button/Button'
import { Typography } from '../../components/Typography/Typography'
import { StageBase } from '../StageBase.styled'
import { EndStageContainer } from './EndStage.styled'

export const EndStage = () => {
    const clickCTAButtonHandle = () => {
        console.log('CTA Button Click')
    }

    return (
        <StageBase>
            <EndStageContainer>
                <Typography>You are on EndStage</Typography>
                <Button onClick={clickCTAButtonHandle}>CTA Button</Button>
            </EndStageContainer>
        </StageBase>
    )
}
