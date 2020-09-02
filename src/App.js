import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registry from './Pages/Registry'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { HomeTemplate } from './Template/Home';
import MovieDetail from './Pages/movieDetail';
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registry" component={Registry} />
          <HomeTemplate exact path="/" component={MovieDetail} />
          <HomeTemplate exact path="/moviedetail" component={MovieDetail} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default App;
