import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
           <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* this is a default router */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

      {
        /* WE NEED REACT ROUTER TO DO THIS */
      }

      {/* localhost.com */}

      {
        /* localhost.com/checkout */
      }

      {
        /* localhost.com/login */
      }

export default App;
