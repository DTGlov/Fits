import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop';
import SignIn from './Pages/sign-in-page/sign-in';
import SignUp from './Pages/sign-up-page/sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = createUserProfileDocument(userAuth);

      (await userRef).onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, () => {
           console.log(this.state);
        });
      });
     
    } else {
      this.setState({
        currentUser:userAuth
      })
   }
    })
  }
componentWillUnmount() {
  this.unsubscribeFromAuth()
}
  
  render() {
    return (
        <Router>
      <div className="App">
          <Header currentUser={this.state.currentUser}/>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path ="/shop" component ={ShopPage}/>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
      </Router>
   
     );
  }
}
 
export default App;


