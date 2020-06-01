import React from 'react';
import NavBar from './components/NavBar';
import Content from './components/Content';
import BottonContainer from './components/BottonContainer'
import InfoContainer from './components/InfoContainer'
import BottonBar from './components/BottonBar'
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <InfoContainer />
      <BottonContainer />
      <BottonBar />
    </>
  );
}

export default App;
