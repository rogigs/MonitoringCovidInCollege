import "../index.css";
import React from "react";

// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const isBrowser = typeof window !== "undefined";
  return isBrowser ? <Component {...pageProps} /> : null;
};

export default App;
