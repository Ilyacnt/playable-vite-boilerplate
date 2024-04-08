import { motion } from 'framer-motion'
import styled from 'styled-components'

export const EndStageContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vmin;

    height: 100%;

    background: var(--secondary-color);
`
