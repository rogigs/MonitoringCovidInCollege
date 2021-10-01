import React from "react";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import TextFieldMUI from "../../components/TextField";

import ButtonMUI from "../../components/Button";
import * as S from "./styles";
import RadioMUI from "../../components/Radio";
import RADIOS from "./utils";

function Register() {
  const { handleSubmit, control, watch, reset } = useForm({
    mode: "onSubmit",
    defaultValues: {
      typeUser: "student",
      registrationNumber: "",
      fullName: "",
      bornDate: "",
      city: "",
      uf: "",
    },
  });

  const watched = watch();
  console.log(watched);
  const isDisabled = Object.values(watched).some((value) => value === "");

  const resetForm = () => reset();
  // TODO: aleatory password
  const onSubmit = (data) => {
    console.log(data);
    resetForm();
  };

  return (
    <S.Box>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="centralize">Registro de usuarios</h1>
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
                label="Numero de matricula(ou funcional): *"
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
              <TextFieldMUI label="Nome completo" {...field} />
            )}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextFieldMUI label="Nome completo" {...field} />
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
                label="Data de nascimento"
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
            render={({ field }) => <TextFieldMUI label="Cidade" {...field} />}
          />
        </S.WrapperField>
        <S.WrapperField>
          <Controller
            name="uf"
            control={control}
            render={({ field }) => (
              <TextFieldMUI
                label="UF"
                inputProps={{ maxLength: 2 }}
                {...field}
              />
            )}
          />
        </S.WrapperField>
        <S.WrapperButton>
          <ButtonMUI type="submit" disabled={isDisabled}>
            Cadastrar
          </ButtonMUI>
          <ButtonMUI onClick={resetForm}>Limpar</ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
}

export default Register;
