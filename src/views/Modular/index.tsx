import React, { useEffect, useState } from 'react';

import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { hidePreloader } from 'features/preloader/preloaderSlice';
import Hero from 'components/Hero';
import SectionFeatureContent from 'components/SectionFeatureContent';
import IComponents from 'interfaces/Components.interface';

const Modular: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPagePath =
    location.pathname === '/' ? 'home' : location.pathname;

  const [pageContent, setPageContent] = useState<IComponents>();

  const heroComponent = pageContent?.Hero ? (
    <Hero content={pageContent.Hero} />
  ) : null;

  const sectionFeatureContentComponent = pageContent?.SectionFeatureContent ? (
    <SectionFeatureContent content={pageContent.SectionFeatureContent} />
  ) : null;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/${currentPagePath}`)
      .then((response) => {
        setPageContent(response.data);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.error(error))
      .finally(() => dispatch(hidePreloader()));
  }, [location, dispatch, currentPagePath]);

  return (
    <>
      {heroComponent}
      {sectionFeatureContentComponent}
    </>
  );
};

export default Modular as React.FC;
