import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import validationSchema from "./utils/validationSchema";
import TextFieldMUI from "~/components/TextField";
import { registerUser } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import RadioMUI from "~/components/Radio";
import RADIOS from "./utils";
import FormManual from "./components/FormManual";
import FormExcel from "./components/FormExcel";

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
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
    icon: "",
  });

  const router = useRouter();
  const onClickSeeUsers = () => router.push("/adm/usuarios-cadastrados");

  const handleCloseModal = () => setModal({ ...modal, open: false });

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      typeUser: "admin",
      registrationNumber: "",
      fullName: "",
      bornDate: "",
      city: "",
      uf: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const resetForm = () => reset();
  const onSubmit = async (data) => {
    try {
      await registerUser(data);

      resetForm();

      setModal({
        open: true,
        title: "Usuário cadastrado",
        message: "Parabéns, o usuário foi cadastrado com sucesso",
        buttonName: "Concluir",
        icon: "success",
      });
    } catch (error) {
      if (error.message === "User already exists") {
        return setModal({
          open: true,
          title: "Erro ao registrar usuário",
          message: "Você está tentando cadastrar um usúario que já existe",
          buttonName: "Tentar novamente",
          icon: "warning",
        });
      }

      setModal({
        open: true,
        title: "Erro ao registrar usuário",
        message:
          "Não foi possível cadastrar o usuário, por favor tente novamente",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  return (
    <S.Box>
      <DialogMUI
        open={modal?.open}
        onClose={handleCloseModal}
        buttonName={modal?.buttonName}
        title={modal?.title}
        children={modal?.message}
        icon={modal?.icon}
      />
      <div className="container">
        <h1 className="title">Registro de usuários</h1>
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
