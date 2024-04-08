import { StageBase } from '../StageBase.styled'
import { GameStageContainer } from './GameStage.styled'
import picture1 from '../../assets/picture1.png'
import { Button } from '../../components/Button/Button'
import { Typography } from '../../components/Typography/Typography'
import { EAnimationType } from '../../types'
import { animationVariants } from '../../animations'

type TGameStage = {
    setStage: (stage: number) => void
}

export const GameStage = ({ setStage }: TGameStage) => {
    const changeStageHandle = () => {
        setStage(1)
    }

    return (
        <StageBase>
            <GameStageContainer animate={EAnimationType.APPEARANCE} variants={animationVariants}>
                <Typography animation={EAnimationType.PULSE}>Your Playable Content Here</Typography>
                <img src={picture1} />
                <Button animation={EAnimationType.PULSE} onClick={changeStageHandle}>
                    Go to EndStage
                </Button>
            </GameStageContainer>
        </StageBase>
    )
}
