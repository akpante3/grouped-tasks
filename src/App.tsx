import React from "react";
import DropDown from "./components/DropDown";
import "./styles/App.scss";
import AppProgreesBar from "./components/AppProgressBar";
import { ContextState } from "./Context";
import { DropDownDetail } from "./types/types"; 

function App() {
  const {groupList} = ContextState()

  console.log(groupList, 'list')
  return (
    <main className="app-container">
      <div>
        <header>
          <h3>Lodgify Grouped Tasks</h3>
          <div className="app-container__progress-bar">
            <AppProgreesBar />
          </div>
        </header>

        <div className="app-container__drop-down-wrapper">
          { groupList.map((el:DropDownDetail , index: number) =>(<DropDown dropDownDetail={el} key={index} />))}
        </div>
      </div>
    </main>
  );
}

export default App;
