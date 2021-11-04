import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldMUI from "../../components/TextField";
import ButtonMUI from "../../components/Button";
import CheckboxMUI from "../../components/Checkbox";
import { authLogin } from "../../services/backend";
import * as S from "./styles";
import validationSchema from "./utils/validationSchema";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      user: "",
      password: "",
      keepMeConnected: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {};

  return (
    <S.Box>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">COVID Monitoring</h1>
        <S.WrapperField>
          <Controller
            name="user"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="Número de matrícula(ou funcional):"
                error={errors?.user}
                helperText={errors?.user?.message}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                type="password"
                label="Senha:"
                error={errors?.password}
                helperText={errors?.password?.message}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <Controller
          name="keepMeConnected"
          control={control}
          render={({ field }) => (
            <CheckboxMUI label="Manter-me conectado" {...field} />
          )}
        />
        <S.WrapperButton>
          <ButtonMUI type="submit" disabled={isSubmitting}>
            Entrar
          </ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
};

export default Login;
