import React from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import ButtonMUI from "../../../../../components/Button";
import * as S from "./styles";
import RadioMUI from "../../../../../components/Radio";

import RADIOS from "../../utils";

function QuestItsOk({ setQuestItsOk }) {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      itsOk: "ok",
    },
  });

  const onSubmit = (data) => {
    // TODO: Resolve the bug of Next.js with material-ui
    //        \-> the bug don't render checked radio when the value is of type booolean
    const formattedData = data.itsOk === "ok";

    setQuestItsOk(formattedData);
    console.log(data);
  };

  return (
    <S.Box>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="centralize">Como voce esta se sentindo hoje?</h1>
        <S.WrapperField>
          <Controller
            name="itsOk"
            control={control}
            render={({ field }) => (
              <RadioMUI row radios={RADIOS.RADIOS_QUEST_ITS_OK} field={field} />
            )}
          />
        </S.WrapperField>
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
