import { StageBase } from '../StageBase.styled'
import { GameStageContainer } from './GameStage.styled'
import picture1 from '../../assets/picture1.png'

const GameStage = () => {
    return (
        <StageBase background="#464DFF">
            <GameStageContainer>
                <p>Your Playable Content Here</p>
                <img src={picture1} />
            </GameStageContainer>
        </StageBase>
    )
}

export default GameStage
