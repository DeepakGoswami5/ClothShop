import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shops/shops'

function App() {
  return (
    <div>
      <Switch>
         <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
