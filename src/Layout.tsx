import { useMemo, useState } from 'react'
import { GameStage } from './stages/GameStage/GameStage'
import { EndStage } from './stages/EndStage/EndStage'

function Layout() {
    const [stage, setStage] = useState<number>(0)

    const renderStage = useMemo(() => {
        switch (stage) {
            case 0:
                return <GameStage setStage={setStage} />
            case 1:
                return <EndStage />
            default:
                return <GameStage setStage={setStage} />
        }
    }, [stage])

    return renderStage
}

export default Layout
