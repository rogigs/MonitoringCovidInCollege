import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import dynamic from "next/dynamic";
import TextFieldMUI from "~/components/TextField";
import { getReports } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";

import TitleHeader from "~/components/TitleHeader";
import validationSchema from "./utils/validationSchema";
import RadioMUI from "~/components/Radio";
import StringHelper from "~/helpers/StringHelper";

const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const RADIOS = [
  {
    value: "ok",
    label: "Sim",
  },
  {
    value: "-",
    label: "Não",
  },
];

function StateHealth() {
  const [dataChart, setDataChart] = useState({
    seriesHealth: [],
    xAxis: [],
    seriesUnhealthy: [],
  });

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
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      initialDate: "",
      finalDate: "",
      bySector: "-",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const reports = await getReports(data);

      const xAxis = Object.keys(reports).map((key) =>
        StringHelper.formatTimestampToDateReadble(key)
      );

      const seriesHealth = Object.values(reports).map(
        (values) => values.healthy
      );
      const seriesUnhealthy = Object.values(reports).map(
        (values) => values.unhealthy
      );

      return setDataChart({ seriesHealth, xAxis, seriesUnhealthy });
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
        title: "Erro ao buscar registros",
        message:
          "Não foi possível buscar os registros, por favor tente novamente",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  const options = {
    series: [
      {
        data: [44, 55, 41, 64, 22, 43, 21],
      },
      {
        data: [53, 32, 33, 52, 13, 44, 32],
      },
    ],
    chart: {
      type: "bar",
      height: 430,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: dataChart.xAxis ?? [],
    },
  };

  const series = [
    {
      name: "Com saúde:",
      data: dataChart.seriesHealth ?? [],
    },
    {
      name: "Sem saúde:",
      data: dataChart.seriesUnhealthy ?? [],
    },
  ];

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
        <S.WrapperRadios>
          <p className="label">Filtrar por setor: </p>
          <Controller
            name="bySector"
            control={control}
            render={({ field }) => (
              <RadioMUI row radios={RADIOS} field={field} />
            )}
          />
        </S.WrapperRadios>
        <S.WrapperButton>
          <ButtonMUI type="submit" loading={isSubmitting}>
            Filtrar
          </ButtonMUI>
        </S.WrapperButton>
      </form>
      <S.WrapperChart>
        <ApexChart options={options} series={series} type="bar" height="400" />
      </S.WrapperChart>
    </>
  );
}

export default StateHealth;
