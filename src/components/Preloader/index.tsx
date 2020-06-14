import React, { useEffect } from 'react';
import Lottie, { AnimationConfigWithData } from 'lottie-web';

import { RootState } from 'reducers';
import { useSelector } from 'react-redux';
import animationData from 'assets/animations/loading.json';
import {
  PreloaderContainer,
  PreloaderWrapper,
  PreloaderAnimationContainer,
} from './styles';

const Preloader: React.FC = (props) => {
  const preloaderState = useSelector((state: RootState) => state.preloader);

  useEffect(() => {
    const container = document.getElementById(
      'lottie-animation-container'
    ) as Element;
    const preloaderAnimationData: AnimationConfigWithData = {
      container,
      animationData,
      loop: true,
      autoplay: true,
      renderer: 'canvas',
    };
    Lottie.loadAnimation(preloaderAnimationData);
  }, []);

  return (
    <PreloaderContainer isActive={preloaderState.isPreloaderVisible}>
      <PreloaderWrapper>
        <PreloaderAnimationContainer id="lottie-animation-container" />
      </PreloaderWrapper>
    </PreloaderContainer>
  );
};

export default Preloader;
