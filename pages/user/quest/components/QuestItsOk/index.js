import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";
import RadioMUI from "~/components/Radio";

import RADIOS from "../../utils";

function QuestItsOk({ setQuestItsOk }) {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      itsOk: "ok",
    },
  });

  const [showMessage, setShowMessage] = useState(false);

  const onSubmit = (data) => {
    // TODO: Resolve the bug of Next.js with material-ui
    //        \-> the bug don't render checked radio when the value is of type booolean
    const formattedData = data.itsOk === "ok";

    setQuestItsOk(formattedData);
    formattedData && setShowMessage(true);

    // TODO: virfify if change day
  };

  return (
    <S.Box>
      {showMessage ? (
        <>
          <h1>Obrigado pela colaboração!</h1>
          <button onClick={() => setShowMessage(false)}>
            Apagar [Apenas para resetar o estado]
          </button>
        </>
      ) : (
        <form className="container" onSubmit={handleSubmit(onSubmit)}>
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
      )}
    </S.Box>
  );
}

QuestItsOk.propTypes = {
  setQuestItsOk: PropTypes.func.isRequired,
};

export default QuestItsOk;
