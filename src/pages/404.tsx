import * as React from "react";
import { Helmet } from "react-helmet";
import NotFound from "../components/notFound";

// styles
const pageStyles = {
  display: "flex",
  justifyContent: "center",
  height: "100vh",
};

// markup
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <main style={pageStyles}>
        <NotFound />
      </main>
    </React.Fragment>
  );
};

export default NotFoundPage;
