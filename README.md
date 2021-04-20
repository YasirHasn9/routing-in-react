# React router dom

Long stroy short, react-router-dom packages enables us to create single page application for the user to brows over.
Think of as instructions for the user. lets say you want to buy an office table and wanna install it. You are gonna look for a small textbook that holds all the instructions for you and on each page there's information for you to follow/apply to set up the table, the textbook is the router. Now, go check any know web site, you would find it has many pages, one for making an account, one for about, one for the product and so on so forth. But wait a minute, we said we have single page application and now we have many pages ? Technically we have one single page of HTML that hold all the pages but by the use of JS we can create many pages and each page has specific URL path, React-router helps us as web creators to help the user by providing buttons, links or whatever way we are gonna choose to make it easy for them to navigate over all the pages

### How does it work?

1. first we need to install the react-router-dom package <br />
   `npm install react-router-dom` or `yarn add react-router-dom`
2. import { BrowserRouter } from "react-router-dom"
   `BrowserRouter` works as HOC that wraps the whole app so we can use the api history of the html so we can jump from one page to another
3. Wrap your main component with BrowserRouter
4. import {Route} from "react-router-dom
   Route package determines which component to render base on the path, you can say it replaces itself with the component we want to render.
5. import {Link} from "react-router.dom
   Link helps to navigate to the Route/component that match the path. Helps to switch between components.

**_ note _**
in out React app, we don't the page to reload each time we switch to different page on the app because that means out JS code will start a new and we are gonna lost the state. And this is why we are gonna use `Link` to prevent the reloading when switch different component. It just tells react what to render on the DOM.

**_ Example _**

```js
import {Route,Link} from "react-router-dom"
import Home from "./component/home"
import About from "./component/about"
function App(){
   return (
      <>
      <Link to="/takeMeToHomeComponent">Home</Link>
      <Link to="/takeMeToAboutComponent">Home</Link>


      <Route path="/takeMeToHomeComponent" component={Home}>
      <Route path="/takeMeToAboutComponent" component={About}>
      </>
   )
}
```

`<Link to="pathName">`
{to} props in the Link refers to different type of paths: relative and absolute.
relative is when the url is part of the current page. Let's say you are of products page that has the url `currentPageUrl/product/` and want to see a specific details about one product like shoes so the url of the page would be `currentPageUrl/product/shoes/1` so `shoes/1` is relative of url page because it gets appended to the url. With absolute, it would be `currentPageUrl/shoes/1`

### Route

The Route package comes with configurations that helps us to solidified our logic
like `path`, `exact`, `render`, `component` and `children`
`path` [string] sets a location for the component.
`exact` [boolean] when it exits on the route it means it takes us exactly to the component if the path matched exactly because without it, we will get other component that have prefixes of the their path that partially matched the path of the component we want to render.
`component` need a reference to a Component
`render` function that helps to pass props to the component
`children` is function that works exactly like render excepts it helps us to find if we have matched path or not

#### Link

it create an anchor tag that helps to navigate between the pages in the app through using the url

#### NavLink

it works same as Link between with extra feature like we can style the anchor tag if it was in active mood by adding a className called active.
