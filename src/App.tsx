import React from 'react';
import Home from './views/Home';
import Auth from './views/Auth';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Auth/>
      <Home/>
    </>
  );
}

export default App;
