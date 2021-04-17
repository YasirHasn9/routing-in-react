# React router dom

Long stroy short, react-router-dom packages enables us to create single page application for the user to brows over.
Think of as instructions for the user. lets say you want to buy an office table and wanna install it. You are gonna look for a small textbook that holds all the instructions for you and on each page there's information for you to follow/apply to set up the table, the textbook is the router. Now, go check any know web site, you would find it has many pages, one for making an account, one for about, one for the product and so on so forth. But wait a minute, we said we have single page application and now we have many pages ? Technically we have one single page of HTML that hold all the pages but by the use of JS we can create many pages and each page has specific URL path, React-router helps us as web creators to help the user by providing buttons, links or whatever way we are gonna choose to make it easy for them to navigate over all the pages

### How does it work?

1. first we need to install the react-router-dom package <br />
   `npm install react-router-dom` or `yarn add react-router-dom`
2. import { BrowserRouter } from "react-router-dom";
3. Wrap your main component with BrowserRouter
