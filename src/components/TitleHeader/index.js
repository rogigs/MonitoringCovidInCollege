import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ArrowBackOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";

const Header = styled.header`
  width: 100%;
  display: flex;
  margin-bottom: 12px;

  > * {
    &:first-child {
      margin: 4px 8px 12px 0;
      cursor: pointer;
    }
  }
`;

const TitleHeader = ({ title, icon = true }) => {
  const router = useRouter();
  const onClickIcon = () => router.push("/adm/dashboard");

  return (
    <>
      <Header>
        {icon ? <ArrowBackOutlined onClick={onClickIcon} /> : <span />}
        <h1>{title}</h1>
      </Header>
      <hr />
    </>
  );
};

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.bool,
};

export default TitleHeader;
