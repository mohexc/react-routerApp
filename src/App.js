import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

//! <Route> componet have 3 propsDefaut (history, location, match)
//! params stay in propsMatch
//! Query string params are in the propsLocation propertySearch 

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="content container">
        <Switch> {/* force path have'nt attribute-exact */ }
          <Route path="/products/:id" component={ ProductDetails } />  {/* route parameter */ }
          <Route path="/products" render={ (props) => <Products sortBy='newest' { ...props } /> } />  {/* addition props*/ }
          <Route path="/posts/:year?/:month?" component={ Posts } />  {/* Optional parameters */ }
          <Route path="/admin" component={ Dashboard } />
          {/* move resources from your website from one url to another one. 
            you canuse the redirect component to achieve this  */ }
          <Redirect from="/messages" to="/posts" />
          <Route path="/not-found" component={ NotFound } />
          <Route path="/" exact component={ Home } />
          <Redirect to="/not-found" />
        </Switch>

      </div>
    </div>
  );
}

export default App;