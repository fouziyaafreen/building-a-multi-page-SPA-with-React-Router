import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./components/Pages/AllQuotes";
import NewQuote from "./components/Pages/NewQuote";
import QuoteDetails from "./components/Pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import NotFound from "./components/Pages/NotFound";

function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quote" />
      </Route>
      <Route path="/quote" exact>
        <AllQuotes />
      </Route>
      <Route path="/quote/:quoteId">
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
     <Route path="*">
       <NotFound/>
     </Route>
    </Switch>
    </Layout>
  );
}

export default App;
