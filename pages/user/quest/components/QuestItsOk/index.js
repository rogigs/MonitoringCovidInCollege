import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";
import RadioMUI from "~/components/Radio";
import { registerHealth } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import RADIOS from "../../utils";

function QuestItsOk({ setQuestItsOk, setRegistered }) {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      itsOk: "ok",
    },
  });

  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
    icon: "",
  });

  const handleCloseModal = () => setModal({ ...modal, open: false });

  const submitData = async () => {
    try {
      await registerHealth([]);
      setRegistered(true);
    } catch (error) {
      setRegistered(false);
      if (error.message === "Sintoma já existente.") {
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
          "Não foi possível cadastrar o sintoma, por favor tente novamente",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  const onSubmit = (data) => {
    const formattedData = data.itsOk === "ok";

    setQuestItsOk(formattedData);

    formattedData && submitData();
  };

  return (
    <S.Box>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <DialogMUI
          open={modal?.open}
          onClose={handleCloseModal}
          buttonName={modal?.buttonName}
          title={modal?.title}
          children={modal?.message}
          icon={modal?.icon}
        />
        <h1 className="title">Como você está se sentindo hoje?</h1>
        <S.BoxRadios>
          <S.WrapperField>
            <Controller
              name="itsOk"
              control={control}
              render={({ field }) => (
                <RadioMUI
                  row
                  radios={RADIOS.RADIOS_QUEST_ITS_OK}
                  field={field}
                />
              )}
            />
          </S.WrapperField>
        </S.BoxRadios>
        <S.WrapperButton>
          <ButtonMUI type="submit">Registrar</ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
}

QuestItsOk.propTypes = {
  setQuestItsOk: PropTypes.func.isRequired,
};

export default QuestItsOk;
