import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ButtonStyled = styled(motion.button)`
    background: var(--button-background);
    color: var(--button-color);

    padding: 3vmin 6vmin;
    font-size: 6vmin;
    border-radius: 2vmin;
    border: none;

    @media (orientation: landscape) {
        & {
            font-size: 4vmin;
        }
    }
`
