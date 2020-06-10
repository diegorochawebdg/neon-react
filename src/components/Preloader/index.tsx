import React from 'react';
import Lottie from 'react-lottie';

import { RootState } from 'reducers';
import { useSelector } from 'react-redux';
import { PreloaderContainer, PreloaderWrapper } from './styles';

interface IPreloaderProps {
  isActive: boolean;
}

const animationData = require('assets/animations/loading.json');

const Preloader: React.FC = (props) => {
  const preloaderState = useSelector((state: RootState) => state.preloader);
  const preloaderAnimationData = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <PreloaderContainer isActive={preloaderState.isPreloaderVisible}>
      <PreloaderWrapper>
        <Lottie options={preloaderAnimationData} width={115} height={115} />
      </PreloaderWrapper>
    </PreloaderContainer>
  );
};

export default Preloader;
