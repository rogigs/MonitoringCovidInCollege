import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextFieldMUI from "~/components/TextField";
import { getReports } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import TableReports from "./components/TableReports";

function Symptoms() {
  const [reports, setReports] = useState([]);

  useEffect(async () => {}, []);

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
      symptom: "",
    },
  });

  const resetForm = () => reset();

  const onSubmit = async (data) => {
    try {
      const res = await getReports(data);

      setReports(res.data);
    } catch (error) {
      if (error.message === "Sintoma já existente.") {
        return setModal({
          open: true,
          title: "Erro ao registrar sintoma",
          message: "Você está tentando cadastrar um sintoma que já existe",
          buttonName: "Tentar novamente",
          icon: "warning",
        });
      }

      return setModal({
        open: true,
        title: "Erro ao registrar sintoma",
        message:
          "Não foi possível cadastrar o sintoma, por favor tente novamente",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  return (
    <>
      <S.Box>
        <DialogMUI
          open={modal?.open}
          onClose={handleCloseModal}
          buttonName={modal?.buttonName}
          title={modal?.title}
          children={modal?.message}
          icon={modal?.icon}
        />
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Ver estados de saúde</h1>
          <S.WrapperField>
            <Controller
              name="initialDate"
              control={control}
              render={({ field }) => (
                <TextFieldMUI
                  label="Data inicial:"
                  type="date"
                  error={errors?.initialDate}
                  helperText={errors?.initialDate?.message}
                  {...field}
                />
              )}
            />
          </S.WrapperField>
          <S.WrapperField>
            <Controller
              name="finalDate"
              control={control}
              render={({ field }) => (
                <TextFieldMUI
                  label="Data final:"
                  type="date"
                  error={errors?.finalDate}
                  helperText={errors?.finalDate?.message}
                  {...field}
                />
              )}
            />
          </S.WrapperField>
          {/* TODO: Adicionar checkobox setor */}
          <S.WrapperButton>
            <ButtonMUI type="submit" loading={isSubmitting}>
              Filtrar
            </ButtonMUI>
          </S.WrapperButton>
        </form>
      </S.Box>
      <TableReports reports={reports} />
    </>
  );
}

export default Symptoms;
