import React from "react";
import "./notFound.scss";
import { StaticImage } from "gatsby-plugin-image";

// import { Link } from "gatsby";

interface Props {}

export default function NotFound({}: Props) {
  return (
    <div className="container">
      <StaticImage src="../images/not_found.png" alt="not-found" />
      <h1>Page Not Found</h1>
      {/* <Link to="/">Go home</Link>. */}
    </div>
  );
}
