import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Home from "./Components/Screens/Home";
import Category from "./Components/Screens/Category";
import Single from "./Components/Screens/Single";
import NotFound from "./Components/Screens/NotFound";


function App() {
  return (

    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/category">
        <Category />
      </Route>

      <Route path="/singlepost">
        <Single />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
