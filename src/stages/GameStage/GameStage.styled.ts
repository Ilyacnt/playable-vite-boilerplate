import { motion } from 'framer-motion'
import styled from 'styled-components'
import picture1 from '../../assets/picture1.png'

export const GameStageContainer = styled.div`
    /* padding: 3vmin; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vmin;

    height: 100%;
`

export const GameStageTitle = styled(motion.h1)`
    font-size: 8vmin;
    font-weight: bold;

    /* @media (orientation: landscape) {
        font-size: 5vmin;
    } */
`

export const GameStagePicture = styled(motion.div)`
    position: relative;

    border-radius: 10vmin;

    width: 75vmin;
    height: 75vmin;

    background: white;
    background-image: url(${picture1});
    background-size: cover;

    @media (orientation: landscape) {
        width: 55vmin;
        height: 55vmin;
    }
`

export const GameStageSubtitle = styled(motion.h1)`
    font-size: 5vmin;
`
