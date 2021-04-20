import { Component } from "react";
// we need to import Router and link packages from react-router-dom
// Router helps to render a specific code for each path
// Link helps the users to navigate them to the wanted pages depends on the path
import { Route, Link, NavLink } from "react-router-dom";
import { api } from "./api/withAxios";

// pages
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Account } from "./pages/account";
import { Products } from "./pages/products/Products";
class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    api
      .get("/products")
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((err) => console.log("error", err));
  }
  // fakestoreapi.com/products?category=menclothing

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                {/*
                Link create a link
                prevent the page from reloading
                needs {to} prop to set it to a path name
                 */}
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/account">Account</NavLink>
              </li>
              <li>
                <NavLink to="/products">Product</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* exact stand for exactly and only applied if the path is matched exactly. */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route
          exact
          path="/products"
          render={(renderProps) => (
            <Products {...renderProps} products={this.state.products} />
          )}
        />
      </div>
    );
  }
}

export default App;
