import { useState, useEffect } from "react";
import Router from "next/router";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return loading ? 
  <div className="loading-component">
    <Spinner animation="border" variant="secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div> 
  :
   null;
};

export default Loading;