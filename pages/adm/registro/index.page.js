import React, { useState } from "react";

import { useRouter } from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import ButtonMUI from "~/components/Button";
import * as S from "./styles";

import FormManual from "./components/FormManual";
import FormExcel from "./components/FormExcel";
import TitleHeader from "~/components/TitleHeader";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

function Register() {
  const router = useRouter();
  const onClickSeeUsers = () => router.push("/adm/usuarios-cadastrados");

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.Box>
      <TitleHeader title="Registro de usuários" />
      <div className="container">
        <S.WrapperTopButton>
          <ButtonMUI onClick={onClickSeeUsers}>
            Ver usuários cadastrados
          </ButtonMUI>
        </S.WrapperTopButton>
        <AppBar position="static">
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            style={{
              backgroundColor: "#e5e5e5",
            }}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Formulário" wrapped />
            <Tab label="Inserir excel" wrapped />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <FormManual />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FormExcel />
        </TabPanel>
      </div>
    </S.Box>
  );
}

export default Register;
