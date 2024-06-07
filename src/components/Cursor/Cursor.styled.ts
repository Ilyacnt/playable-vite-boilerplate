import styled from "styled-components";

export const CursorContainer = styled.img<{ hidden?: boolean }>`
  display: ${(props) => (!props.hidden ? "block" : "none")};

  z-index: 10;

  position: absolute;
  width: 15vmin;

  animation: swipe 1s ease-in-out infinite;

  @keyframes swipe {
    0% {
      transform: translate(-100%) rotate(-15deg);
    }
    100% {
      transform: translate(100%) rotate(0deg);
    }
  }
`;
