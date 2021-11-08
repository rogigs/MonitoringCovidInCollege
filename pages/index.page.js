import React, { useEffect } from "react";
import Router from "next/router";

export default function index() {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/login");
    }
  });

  return <></>;
}
