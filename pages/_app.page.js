import "../index.css";
import React from "react";

import { useRouter } from "next/router";

import Cookies from "universal-cookie";
import "./index.css";
// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const isBrowser = typeof window !== "undefined";
  const router = useRouter();
  const cookies = new Cookies();

  const user = cookies.get("token");

  React.useEffect(() => {
    if (!user) {
      return router.push("/login");
    }
  }, [user]);

  return isBrowser ? <Component {...pageProps} /> : null;
};

export default App;
