import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import TextFieldMUI from "~/components/TextField";
import { getReports } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import TableReports from "./components/TableReports";
import TitleHeader from "~/components/TitleHeader";

function Symptoms() {
  const [reports, setReports] = useState([]);

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

      resetForm();

      return setReports(res.data);
    } catch (error) {
      if (error.message === "Sem registros.") {
        return setModal({
          open: true,
          title: "Erro ao buscar registros",
          message:
            "Não existem registros nas datas selecionadas. Tente novamente com outras datas.",
          buttonName: "Tentar novamente",
          icon: "warning",
        });
      }

      return setModal({
        open: true,
        title: "Erro ao buscar registros",
        message:
          "Não foi possível buscar os registros, por favor tente novamente",
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
      <TitleHeader title="Ver estados de saúde" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <TableReports reports={reports} />
    </>
  );
}

export default Symptoms;
