import React, { useState } from "react";
import QuestAboutHealth from "./components/QuestAboutHealth";
import QuestItsOk from "./components/QuestItsOk";
import * as S from "./styles";

function Register() {
  const [itsOk, setQuestItsOk] = useState(true);
  const [registered, setRegistered] = useState(false);

  if (registered) {
    return (
      <S.Card>
        <h1>Obrigado pela sua contribuição de hoje!!!</h1>
        <p>
          Procure atendimento médico se tiver febre, tosse e dificuldade para
          respirar. Ligue com antecedência para o órgão prestador de cuidados de
          saúde e peça direcionamento à unidade mais adequada. Isso protege você
          e evita a propagação de vírus e outras infecções. <br />
          <strong>Cuide-se! E não se esqueça de voltar aqui amanhã.</strong>
        </p>
      </S.Card>
    );
  }
  return itsOk ? (
    <QuestItsOk
      itsOk={itsOk}
      setQuestItsOk={setQuestItsOk}
      setRegistered={setRegistered}
    />
  ) : (
    <QuestAboutHealth setRegistered={setRegistered} />
  );
}

export default Register;
