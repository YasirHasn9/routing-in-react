import { Component } from "react";
// we need to import Router and link packages from react-router-dom
// Router helps to render a specific code for each path
// Link helps the users to navigate them to the wanted pages depends on the path
import { Route, Link } from "react-router-dom";
import "./App.css";

// pages
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Product } from "./pages/product";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="product">Product</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/product" component={Product} />
      </div>
    );
  }
}

export default App;
