import React from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";
import RadioMUI from "~/components/Radio";

import RADIOS from "../../utils";
import transformValuesRadiosInBoolean from "../../helpers";

function QuestAboutHealth() {
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    // TODO: Resolve the bug of Next.js with material-ui
    //        \-> the bug don't render checked radio when the value is of type booolean
    transformValuesRadiosInBoolean(data);
    console.log(data);
  };

  const RowOfFormWithRadios = ({ text, name }) => (
    <S.WrapperField>
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
    </S.WrapperField>
  );

  RowOfFormWithRadios.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
    <S.Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Marque os sintomas que voce esta sentido</h1>
        <S.BoxRadios>
          <RowOfFormWithRadios text="Falta de ar" name="shortnessOfBreathe" />
          <RowOfFormWithRadios text="Cansaço" name="tiredness" />
          <RowOfFormWithRadios text="Febre" name="ferver" />
          <RowOfFormWithRadios text="Calafrio" name="chill" />
          <RowOfFormWithRadios text="Tosse" name="cough" />
          <RowOfFormWithRadios text="Dor de garganta" name="soreThroat" />
          <RowOfFormWithRadios text="Dor de cabeça" name="headache" />
          <RowOfFormWithRadios text="Dor no peito" name="headache" />
          <RowOfFormWithRadios text="Dores musculares" name="chestPain" />
          <RowOfFormWithRadios text="Perda de olfato" name="lossOfSmell" />
          <RowOfFormWithRadios text="Perda de paladar" name="lossOfTaste" />
          <RowOfFormWithRadios text="Diarréia" name="diarrhea" />
          <RowOfFormWithRadios text="Espirros" name="sneezes" />
        </S.BoxRadios>
        <S.WrapperButton>
          <ButtonMUI type="submit">Registrar</ButtonMUI>
        </S.WrapperButton>
      </form>
    </S.Box>
  );
}

export default QuestAboutHealth;
