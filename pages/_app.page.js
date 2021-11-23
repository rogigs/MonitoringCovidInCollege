import React, { useEffect } from "react";

import { useRouter } from "next/router";

import "./index.css";
import Layout from "~/components/layout";

const App = ({ Component, pageProps }) => {
  const isBrowser = typeof window !== "undefined";
  const router = useRouter();

  const getWindow = typeof window !== "undefined" ?? null;
  const getToken = getWindow && localStorage.getItem("token");
  const getkeepMeConnected =
    getWindow && localStorage.getItem("keepMeConnected");
  const user = getToken || getkeepMeConnected;

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
