import styled from 'styled-components'

export const StageBase = styled.div<{ background?: string }>`
    width: 100%;
    height: 100vh;
    height: 100dvh;

    background: ${(props) => props.background || 'white'};
`
