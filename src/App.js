/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect , Suspense, lazy } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { HomeTemplate } from './Template/Home';
import { userLogin } from './Config/setting';
import { useDispatch } from 'react-redux';
import { LoginAction} from './redux/action/user';
import { PropfileTemplate } from './Template/Profile';
import {AdminTemplate} from './Template/Admin';
import {BookingTemplate} from './Template/Booking';
import {FormTemplate} from './Template/Form';
import Loading from './Pages/Loading';

// lazyLoad page loading
const Home=lazy(()=>{
return new Promise((resolve)=>{
  setTimeout(() => {
    resolve(import('./Pages/Home'))
  }, 2400);
})});
const Login =lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/Login'))
    },2400);
  })});
const Registry =lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/Registry'))
    },2400);
  })});
const MovieDetail=lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/MovieDetail'))
    },2400);
  })});
const Booking =lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/Booking'))
    },2400);
  })});
const Profile =lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/Profile'))
    },2400);
  })});
const AdminUser =lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/AdminUser'))
    },2400);
  })});
const AdminMovie =lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(() =>{
      resolve(import('./Pages/AdminMovie'))
    },2400);
  })});

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
          <Suspense fallback={<Loading/>}>
          <Switch>
          <FormTemplate exact path="/login" component={Login} />
          <FormTemplate exact path="/registry" component={Registry} />
          <BookingTemplate exact path="/booking/:id" component={Booking} />
          <HomeTemplate exact path="/" component={Home} />
          <HomeTemplate exact path="/moviedetail/:id" component={MovieDetail} />
          <PropfileTemplate exact path="/profile" component={Profile} />
          <AdminTemplate exact path="/admin/movie" component={AdminMovie} />
          <AdminTemplate exact path="/admin" component={AdminUser} />
          </Switch>
          </Suspense>
      </Fragment>
    </BrowserRouter>
  );
}
export default App;
