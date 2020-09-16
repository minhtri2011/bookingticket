/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registry from './Pages/Registry'
import MovieDetail from './Pages/MovieDetail';
import Booking from './Pages/Booking';
import Profile from './Pages/Profile';
import AdminUser from './Pages/AdminUser';
import AdminMovie from './Pages/AdminMovie';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { HomeTemplate } from './Template/Home';
import { userLogin } from './Config/setting';
import { useDispatch } from 'react-redux';
import { LoginAction} from './redux/action/user';
import { PropfileTemplate } from './Template/Profile';
import {AdminTemplate} from './Template/Admin';

function App() {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem(userLogin);
  const getUserName=()=>{
    if(isLogin){
      dispatch(LoginAction(JSON.parse(isLogin).taiKhoan))
    }
  }
  useEffect(() => {
    getUserName();
  }, [])
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/booking/:id" component={Booking} />
          <HomeTemplate exact path="/" component={Home} />
          <HomeTemplate exact path="/moviedetail/:id" component={MovieDetail} />
          <PropfileTemplate exact path="/profile" component={Profile} />
          <AdminTemplate exact path="/admin" component={AdminUser} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default App;
