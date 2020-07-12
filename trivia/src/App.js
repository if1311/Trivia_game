import React from 'react';
import StartPage from "./components/start/StartPage"
import Questions from "./components/play/Questions"
import './App.css';
import { Route, Switch } from "react-router-dom";
import EndPage from "./components/end/EndPage";

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/questions" render={(props) => <Questions {...props} />} />
        {/* <Route exact path="/questions/:index" render={(props) => <Question {...props} />} /> */}
        <Route exact path="/" render={(props) => <StartPage {...props} />} />
        <Route exact path="/questions/endOfTheRoad" render={(props) => <EndPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
