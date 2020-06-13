import React from 'react';

import { useLocation } from 'react-router-dom';
import { IHeroProps } from 'interfaces/Hero.interface';
import './index.scss';
import Markdown from 'markdown-to-jsx';

const Hero: React.FC<IHeroProps> = (props) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <section className={`section-hero ${isHome ? 'home' : location.pathname}`}>
      <div className="container">
        <div className="row">
          <div
            className={`section-hero__text-wrapper color-branco ${
              !isHome ? 'offset-md-1 col-md-10 col-sm-12' : ''
            }`}
          >
            <Markdown>{props.content?.heroText}</Markdown>
          </div>
        </div>
      </div>
      <Markdown>{props.content?.additionalContent}</Markdown>
    </section>
  );
};

export default Hero;
