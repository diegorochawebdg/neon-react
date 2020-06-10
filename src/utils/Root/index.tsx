import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import App from 'App';
import { useDispatch } from 'react-redux';
import { showPreloader } from 'features/preloader/preloaderSlice';

const Root: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return history.listen((location) => {
      console.log('location => ', location);
      dispatch(showPreloader());
    });
  }, [history, dispatch]);

  return <App />;
};

export default Root;
