import React from "react";
import styled from "styled-components";
import media from "~/css/styledMedias";

const BoxCentral = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  overflow: hidden;
  margin-bottom: 48px;
  padding-bottom: 24px;
`;

const BoxMain = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  ${media.lessThan("tablet")`
      margin: 0 16px 0 16px;
  `}
`;

const WrapperLayout = ({ children }) => (
  <div style={{ backgroundColor: "#3490dc" }}>
    <BoxCentral>{children}</BoxCentral>
  </div>
);
const Navbar = () => (
  <WrapperLayout>
    <iframe
      src="https://embed.lottiefiles.com/animation/17169"
      frameBorder="0"
      title="logo"
    />
    <h1
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "16px",
      }}
    >
      COVID Monitoring
    </h1>
  </WrapperLayout>
);

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <BoxMain>{children}</BoxMain>
    </>
  );
}
