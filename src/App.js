import React from 'react';
import {
  Switch,
  Route,
 
} from "react-router-dom";


import SignUpPage from './pages/signup-page';
import SignInPage from './pages/signin-page';
import TaskMainPage from './pages/task-main-page';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={SignUpPage}/>
      <Route exact path='/signin' component={SignInPage}/>
      <Route exact path='/main' component={TaskMainPage}/>
    </Switch>
    
  );
}

export default App;
