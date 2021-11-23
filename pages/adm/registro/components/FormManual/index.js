import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../utils/validationSchema";
import TextFieldMUI from "~/components/TextField";
import { registerUser } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";
import RadioMUI from "~/components/Radio";
import RADIOS from "../../utils";

function FormManual() {
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

      return setModal({
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
    <>
      <DialogMUI
        open={modal?.open}
        onClose={handleCloseModal}
        buttonName={modal?.buttonName}
        title={modal?.title}
        icon={modal?.icon}
      >
        <p>{modal?.message}</p>
      </DialogMUI>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <ButtonMUI type="submit" loading={isSubmitting}>
            Cadastrar
          </ButtonMUI>
          <ButtonMUI className="reset" onClick={resetForm}>
            Limpar
          </ButtonMUI>
        </S.WrapperButton>
      </form>
    </>
  );
}

export default FormManual;
