import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { registerUserExcel } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";

function FormExcel() {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
    icon: "",
  });

  const handleCloseModal = () => setModal({ ...modal, open: false });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      excel: "",
    },
  });

  const resetForm = () => reset();
  const onSubmit = async (data) => {
    try {
      if (data.excel === "") {
        throw new Error();
      }

      await registerUserExcel(data);

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
          "Não foi possível cadastrar o usuário, por favor verifique se o arquivo está sendo enviado da forma correta e tente novamente",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  return (
    <>
      <DialogMUI
        open={modal?.open}
        onClose={handleCloseModal}
        buttonName={modal?.buttonName}
        title={modal?.title}
        children={modal?.message}
        icon={modal?.icon}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.WrapperField>
          <Controller
            name="excel"
            control={control}
            render={({ field }) => (
              <S.WrapperButton>
                <label>Inserir arquivo Excel:</label>
                <ButtonMUI variant="outlined" {...field}>
                  <input type="file" name="file" accept=".xlsx" />
                </ButtonMUI>
                <label style={{ color: "red" }}>{errors?.excel?.message}</label>
              </S.WrapperButton>
            )}
          />
        </S.WrapperField>

        <S.WrapperButton>
          <ButtonMUI type="submit" loading={isSubmitting}>
            Cadastrar
          </ButtonMUI>
        </S.WrapperButton>
      </form>
    </>
  );
}

export default FormExcel;
