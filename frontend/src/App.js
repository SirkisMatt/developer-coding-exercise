import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import AllBlogPostTitles from "./pages/AllBlogPostTitles";
import BlogDetails from "./pages/BlogDetails";
import NotFound from "./pages/NotFound";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/posts" />
        </Route>
        <Route path="/posts" exact>
          <AllBlogPostTitles />
        </Route>
        <Route path="/posts/:slug">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
