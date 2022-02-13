import { Fragment, useEffect } from "react";
import { Link, Route,useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";

import HighlightedQuote from "../quotes/HighlightedQuote";
import LoadingSpinner from "../UI/LoadingSpinner";


const QuoteDetails = () => {
  const Param = useParams();
  const match = useRouteMatch();

  const {quoteId} = Param

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote,true);

  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest,quoteId])
  
  if(status==='pending'){
    return <div className='centered'>
      <LoadingSpinner/>
    </div>
  }

  if(error){
    return <div className="centered">{error}</div>
  }

  if (!loadedQuote.text) {
    return <p>No Quote found!</p>;
    
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
