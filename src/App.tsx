import React from 'react';
import DropDown from './components/DropDown';
import './styles/App.scss'

function App() {
  return (
    <div className="app-container">
      <div className="app-container__drop-down-wrapper">
      <DropDown/>
      <DropDown/>
      <DropDown/>
      </div>

    </div>
  );
}

export default App;
