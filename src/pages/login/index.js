import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextFieldMUI from "../../components/TextField";

import ButtonMUI from "../../components/Button";
import CheckboxMUI from "../../components/Checkbox";

import * as S from "./styles";

const Login = () => {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <S.Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="centralize">COVID Monitoring</h1>
        <S.WrapperField>
          <Controller
            name="user"
            control={control}
            render={({ field }) => <TextFieldMUI label="Usuario" {...field} />}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="password"
            control={control}
            render={({ field }) => <TextFieldMUI label="Senha" {...field} />}
          />
        </S.WrapperField>
        <CheckboxMUI label="Manter-me conectado" />
        <S.WrapperButton>
          <ButtonMUI type="submit" name="Entrar" />
          <ButtonMUI
            text
            className="centralize"
            name="Cadastrar-se"
            size="small"
            disableElevation
          />
        </S.WrapperButton>
      </form>
    </S.Box>
  );
};

export default Login;
