import * as React from "react";
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
    <main style={pageStyles}>
      <title>Not found</title>
      <NotFound />
    </main>
  );
};

export default NotFoundPage;
