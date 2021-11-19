import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import TextFieldMUI from "~/components/TextField";
import ButtonMUI from "~/components/Button";
import { resetPassword } from "~/services/backend";
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

  const onSubmit = async (data) => {
    try {
      await resetPassword(data);

      router.push("/adm/dashboard");
    } catch (error) {
      setModal({
        open: true,
        title: "Erro ao trocar de senha",
        message:
          "Não foi possível realizar a troca de senha. Verifique se a antiga senha está correta.",
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
                name="oldPassword"
                control={control}
                render={({ field }) => (
                  <TextFieldMUI
                    type="password"
                    label="Senha antiga:"
                    error={errors?.oldPassword}
                    helperText={errors?.oldPassword?.message}
                    {...field}
                  />
                )}
              />
            </S.WrapperField>
            <S.WrapperField>
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <TextFieldMUI
                    type="password"
                    label="Nova senha:"
                    error={errors?.newPassword}
                    helperText={errors?.newPassword?.message}
                    {...field}
                  />
                )}
              />
            </S.WrapperField>
            <S.WrapperButton>
              <ButtonMUI type="submit" loading={isSubmitting}>
                Trocar senha
              </ButtonMUI>
            </S.WrapperButton>
          </form>
        </S.Box>
      </div>
    </S.WrappperMain>
  );
};

export default Login;
