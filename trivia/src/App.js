import React from 'react';
import StartPage from "./components/start/StartPage"
import Questions from "./components/play/Questions"
import Question from "./components/play/Question"
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/questions" render={(props) => <Questions {...props} />} />
        <Route exact path="/questions/:index" render={(props) => <Question {...props} />} />
        <Route exact path="/" render={(props) => <StartPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
