import { StageBase } from '../StageBase.styled'
import {
    GameStageContainer,
    GameStagePicture,
    GameStageSubtitle,
    GameStageTitle,
} from './GameStage.styled'

const GameStage = () => {
    return (
        <StageBase background="#E60000">
            <GameStageContainer>
                <GameStageTitle
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: 5, repeatDelay: 1000 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Проверь свой авто
                </GameStageTitle>
                <GameStagePicture>test</GameStagePicture>
                <GameStageSubtitle
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: 5, repeatDelay: 1000 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Geely Atlas Pro, 2023
                </GameStageSubtitle>
            </GameStageContainer>
        </StageBase>
    )
}

export default GameStage
