import { useState } from 'react'
import GameStage from './stages/GameStage/GameStage'
import { TStage } from './context/StageContext'

function Layout() {
    const [stage] = useState<TStage>({ currentStage: { stageId: 0 } })

    switch (stage.currentStage.stageId) {
        case 0:
            return <GameStage />
        default:
            return <GameStage />
    }
}

export default Layout
