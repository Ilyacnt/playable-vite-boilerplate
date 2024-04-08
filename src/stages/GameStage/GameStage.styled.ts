import styled from 'styled-components'

export const GameStageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vmin;

    height: 100%;

    img {
        width: 80vmin;
    }

    @media (orientation: landscape) {
        img {
            width: 60vmin;
        }
    }
`
