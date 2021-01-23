import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shops/shops';
import Header from '../src/components/header/header';
import SignInUp from './pages/sign-in-up/sign-in-up';
import {auth} from './firebase/firebase.utitlis'

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user})
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
            <Route path='/sign-in-up' component={SignInUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
