import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51Hf0OuAJ8Ce1xwdmgLwzueimskIhUF4bg5arqX3ohgHwRKFWRLQnXBV08K4wuf0374EqdDMg8wLSUzgt3rM5SLpV00XOcvIsy0'
  );


function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<<   POWERFULL
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in..

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out..

        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });

    return () => {
      //Any cleanup operation is operations goes in here...
      unsubscribe();
    }

  }, []);

  console.log("user is ", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
          <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
           <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
           <Header />
           <Elements stripe={promise}>
              <Payment />
           </Elements>
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
