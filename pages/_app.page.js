import React, { useEffect } from "react";

import { useRouter } from "next/router";

import "./index.css";
import Layout from "~/components/layout";
// This default export is required in a new `pages/_app.js` file.
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
  const isBrowser = typeof window !== "undefined";
  const router = useRouter();

  const user =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!user) {
      return router.push("/login");
    }
  }, []);

  if (router.pathname === "/login" || router.pathname === "/trocar-senha") {
    return isBrowser ? <Component {...pageProps} /> : null;
  }

  return isBrowser ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : null;
};

export default App;
