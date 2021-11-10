import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./utils/validationSchema";
import TextFieldMUI from "~/components/TextField";
import { registerUser } from "~/services/backend";

import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import RadioMUI from "~/components/Radio";
import RADIOS from "./utils";

function Register() {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
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
      typeUser: "student",
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
        title: "Usuario cadastrado com sucesso",
        message: "",
        buttonName: "Concluir",
      });
    } catch (error) {
      setModal({
        open: true,
        title: "Erro ao registrar usuario",
        message: "Mensagem",
        buttonName: "Tentar novamente",
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
        icon={<> </>}
      />
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Registro de usuários</h1>
        <S.WrapperField>
          <Controller
            name="typeUser"
            control={control}
            render={({ field }) => (
              <RadioMUI row radios={RADIOS} field={field} />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="registrationNumber"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="Número de matrícula(ou funcional):"
                error={errors?.registrationNumber}
                helperText={errors?.registrationNumber?.message}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="Nome completo:"
                error={errors?.fullName}
                helperText={errors?.fullName?.message}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        {/* TODO: Will should a select with option of according typeUser  */}
        <S.WrapperField>
          <Controller
            name="sector"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="Área:"
                error={errors?.sector}
                helperText={errors?.sector?.message}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="bornDate"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                type="date"
                label="Data de nascimento:"
                error={errors?.bornDate}
                helperText={errors?.bornDate?.message}
                InputProps={{
                  inputProps: {
                    min: "1900-01-01",
                    max: format(Date.now(), "yyyy-MM-dd"),
                    formatDate: "dd-mm-yyyy",
                  },
                }}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="Cidade:"
                error={errors?.city}
                helperText={errors?.city?.message}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="uf"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="UF"
                error={errors?.uf}
                helperText={errors?.uf?.message}
                inputProps={{ maxLength: 2 }}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperButton>
          <ButtonMUI type="submit" disabled={isSubmitting}>
            Cadastrar
          </ButtonMUI>
          <ButtonMUI className="reset" onClick={resetForm}>
            Limpar
          </ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
}

export default Register;
