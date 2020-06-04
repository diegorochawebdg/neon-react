import React from 'react';

import { IHeroProps } from '../../interfaces/Hero.interface';
import { HeroContainer } from './styles';

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <HeroContainer>
      <div className="container">
        <div className="row">
          <div
            className="col-md-10 col-sm-12"
            dangerouslySetInnerHTML={{ __html: props.content?.hero_text }}
          />
        </div>
      </div>
    </HeroContainer>
  );
  // return <div dangerouslySetInnerHTML={props.content?.hero_text as string} />;
  // return <HeroContainer dangerouslySetInnerHTML={props.content?.hero_text} />;
};

export default Hero;
