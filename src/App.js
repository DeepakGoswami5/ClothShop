import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shops/shops';
import Header from '../src/components/header/header';
import SignInUp from './pages/sign-in-up/sign-in-up';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/sign-in-up' component={SignInUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
