import React from 'react';
import './App.less';
import { Header } from './modules/header/Header';
import { News } from './modules/news/News';

function App() {
  return (
    <div className="App">
      <Header />
      <News />
    </div>
  );
}

export default App;
