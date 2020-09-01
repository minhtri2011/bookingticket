import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Home from './Pages/Home';
import Detail from './Pages/detail';
import Login from './Pages/Login';
import Registry from './Pages/Registry'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { HomeTemplate } from './Template/Home';
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registry" component={Registry} />
          <HomeTemplate exact path="/detail" component={Detail} />
          <HomeTemplate exact path="/" component={Home} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default App;
