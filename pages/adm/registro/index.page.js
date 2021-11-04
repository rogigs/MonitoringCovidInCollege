import React from "react";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import axios from "axios";
import TextFieldMUI from "~/components/TextField";

import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import RadioMUI from "~/components/Radio";
import RADIOS from "./utils";
import { backendUrl } from "~/config";

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
  const isDisabled = Object.values(watched).some((value) => value === "");

  const resetForm = () => reset();
  // TODO: aleatory password
  const onSubmit = (data) =>
    axios
      .post(`${backendUrl}/register`, {
        admin_key: "admin_key",
        code: data.registrationNumber,
        password: data.registrationNumber,
        full_name: data.fullName,
        birth_date: data.bornDate,
        city: data.city,
        uf: data.uf,
      })
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((e) => {
        console.log(e.response.data);
      });

  return (
    <S.Box>
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
              <TextFieldMUI label="Nome completo:" {...field} />
            )}
          />
        </S.WrapperField>
        {/* TODO: Will should a select with option of according typeUser  */}
        <S.WrapperField>
          <Controller
            name=""
            control={control}
            render={({ field }) => <TextFieldMUI label="Área:" {...field} />}
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
            render={({ field }) => <TextFieldMUI label="Cidade:" {...field} />}
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
          <ButtonMUI className="reset" onClick={resetForm}>
            Limpar
          </ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
}

export default Register;
