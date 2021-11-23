import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";
import RadioMUI from "~/components/Radio";
import RADIOS from "../../utils";
import transformValuesRadiosInBoolean from "../../helpers";
import { getSymptoms, registerHealth } from "~/services/backend";
import DialogMUI from "~/components/Dialog";

function QuestAboutHealth() {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
    icon: "",
  });

  const handleCloseModal = () => setModal({ ...modal, open: false });

  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });
  const router = useRouter();
  const [symptomsState, setSymptomsState] = useState([]);

  useEffect(async () => {
    const { symptoms } = await getSymptoms();
    return symptoms && setSymptomsState(symptoms);
  }, []);

  const onSubmit = async (data) => {
    try {
      transformValuesRadiosInBoolean(data);

      const keys = Object.keys(data);
      const filtered = keys.filter((key) => data[key]);

      await registerHealth(filtered);

      return router.push("/user/painel-de-registro");
    } catch (error) {
      if (error.message === "Registro já feito hoje.") {
        return setModal({
          open: true,
          title: "Erro ao registrar sintomas",
          message: "O registro já foi feito hoje, tente novamente amanhã.",
          buttonName: "Concluir",
          icon: "warning",
        });
      }

      return setModal({
        open: true,
        title: "Erro ao registrar sintomas",
        message:
          "Não foi possível cadastrar o sintoma, por favor tente novamente.",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  const RowOfFormWithRadios = ({ text, name }) => (
    <S.WrapperRadios>
      <p className="label">{text} </p>
      <Controller
        name={name}
        defaultValue="-"
        control={control}
        render={({ field }) => (
          <RadioMUI
            row
            radios={RADIOS.RADIOS_QUEST_ABOUT_HEALTH}
            field={field}
          />
        )}
      />
    </S.WrapperRadios>
  );

  RowOfFormWithRadios.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Marque os sintomas que você está sentido:</h1>
        <S.BoxRadios>
          {symptomsState.map((symptom) => (
            <RowOfFormWithRadios text={symptom.name} name={symptom.name} />
          ))}
        </S.BoxRadios>
        <S.WrapperButton>
          <ButtonMUI type="submit">Registrar</ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
}

export default QuestAboutHealth;
