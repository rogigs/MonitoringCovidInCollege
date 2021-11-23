import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import TextFieldMUI from "~/components/TextField";
import { getFrequency } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import validationSchema from "./utils/validationSchema";

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

function Frequency() {
  const [dataChart, setDataChart] = useState([]);

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
      initialDate: "",
      finalDate: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const resetForm = () => reset();
  const onSubmit = async (data) => {
    try {
      const resp = await getFrequency(data);

      resetForm();

      return setDataChart(resp.data);
    } catch (error) {
      if (error.message === "Período inválido.") {
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
        title: "Erro ao filtrar dados",
        message:
          "Não foi possível filtrar os dados, por favor tente novamente.",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  const options = {
    chart: {
      id: "barYear",
      width: "100%",
      type: "bar",
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        barHeight: "75%",
        dataLabels: {
          position: "bottom",
        },
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter(val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <>
      <S.Box>
        <DialogMUI
          open={modal?.open}
          onClose={handleCloseModal}
          buttonName={modal?.buttonName}
          title={modal?.title}
          icon={modal?.icon}
        >
          <p>{modal?.message}</p>
        </DialogMUI>
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Ver frequência de usuários</h1>
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
          <S.WrapperButton>
            <ButtonMUI type="submit" loading={isSubmitting}>
              Filtrar
            </ButtonMUI>
          </S.WrapperButton>
          <S.WrapperChart>
            <ApexChart
              options={options}
              series={series}
              type="bar"
              height="400"
            />
          </S.WrapperChart>
        </form>
      </S.Box>
    </>
  );
}

export default Frequency;
