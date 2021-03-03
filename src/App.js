import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop';

function App() {
  return (
      <Router>
      <div className="App">
        <Header/>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path ="/shop" component ={ShopPage}/>
        </Switch>
      </div>
      </Router>
   
   
  );
}

export default App;
