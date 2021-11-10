import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldMUI from "~/components/TextField";
import ButtonMUI from "~/components/Button";
import CheckboxMUI from "~/components/Checkbox";
import { authLogin } from "~/services/backend";
import * as S from "./styles";
import validationSchema from "./utils/validationSchema";
import DialogMUI from "~/components/Dialog";

const Login = () => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
  });

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

  const router = useRouter();

  const handleCloseModal = () => setModal({ ...modal, open: false });

  const cookies = new Cookies();
  const onSubmit = async (data) => {
    try {
      const { token } = await authLogin(data);

      cookies.set("token", token);

      router.push("/adm/dashboard");
    } catch (error) {
      if (error.message === "Error: Request failed with status code 401") {
        setModal({
          open: true,
          title: "Erro ao logar",
          message: "Número de matrícula/funcional ou senha incorretos",
          buttonName: "Tentar novamente",
        });
      }

      setModal({
        open: true,
        title: "Erro ao logar",
        message: "Número de matrícula/funcional ou senha incorretos",
        buttonName: "Tentar novamente",
      });
    }
  };

  return (
    <S.WrappperMain>
      <div>
        <iframe
          src="https://embed.lottiefiles.com/animation/17169"
          frameBorder="0"
        />
      </div>
      <div>
        <DialogMUI
          open={modal?.open}
          onClose={handleCloseModal}
          buttonName={modal?.buttonName}
          title={modal?.title}
          children={modal?.message}
          icon="danger"
        />
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
      </div>
    </S.WrappperMain>
  );
};

export default Login;
