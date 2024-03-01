import DropDown from "./components/DropDown";
import "./styles/App.scss";
import AppProgreesBar from "./components/AppProgressBar";
import { ContextState } from "./context/AppContext";
import { Group } from "./types/types";

function App() {
  const contextState = ContextState();
  const groupList = contextState ? contextState.groupList : [];
  const progressBarValue = contextState ? contextState.progressBarValue : 0;

  return (
    <main className="app-container">
      <header>
        <h3>Lodgify Grouped Tasks</h3>
        <div className="app-container__progress-bar">
          <AppProgreesBar value={progressBarValue} />
        </div>
      </header>
      {groupList.length ? (
        <div className="app-container__drop-down-wrapper">
          {groupList.map((el: Group, index: number) => (
            <DropDown key={index} name={el.name} tasks={el.tasks} />
          ))}
        </div>
      ) : (
        <div style={{marginTop: '200px'}}> Loading...</div>
      )}
    </main>
  );
}

export default App;
