import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUpPage from './pages/signup-page';
import SignInPage from './pages/signin-page';
import TaskMainPage from './pages/task-main-page';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (localStorage.getItem('token') ? <Redirect to="/main" /> : <SignInPage />)}
      ></Route>
      <Route exact path="/signup" component={SignUpPage} />

      <Route
        exact
        path="/main"
        render={() => (localStorage.getItem('token') ? <TaskMainPage /> : <Redirect to="/" />)}
      ></Route>
    </Switch>
  );
}

export default App;
