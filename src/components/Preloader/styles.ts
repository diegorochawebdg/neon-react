import styled from 'styled-components';

interface IPreloaderProps {
  readonly isActive: boolean;
}

export const PreloaderContainer = styled.div<IPreloaderProps>`
  display: flex;
  visibility: hidden;
  position: fixed;
  z-index: 999999999;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  transition: opacity 500ms ease 0ms, visibility 0ms linear 500ms;
  opacity: 0;
  pointer-events: none;
  background: linear-gradient(to right, #00a5f0 0%, #00d7d7 90%);

  ${({ isActive }) =>
    isActive &&
    `
      visibility: visible;
      transition: opacity 0ms ease 0ms, visibility 0ms linear 0ms;
      opacity: 1;
      pointer-events: all;
    `}
`;

export const PreloaderWrapper = styled.div``;

export const PreloaderAnimationContainer = styled.div``;
