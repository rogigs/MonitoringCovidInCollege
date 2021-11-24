import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { healthHistoryUser } from "~/services/backend";
import StringHelper from "~/helpers/StringHelper";

function PanelRegister() {
  const [history, setHistory] = useState({});

  useEffect(async () => {
    const { data } = await healthHistoryUser();

    return data && setHistory(data);
  }, []);

  return (
    <section>
      <>
        <h1>Obrigado pela sua contribuição de hoje!!!</h1>
        <p>
          Procure atendimento médico se tiver febre, tosse e dificuldade para
          respirar. Ligue com antecedência para o órgão prestador de cuidados de
          saúde e peça direcionamento à unidade mais adequada. Isso protege você
          e evita a propagação de vírus e outras infecções. <br />
          <strong>Cuide-se! E não se esqueça de voltar aqui amanhã.</strong>
        </p>
      </>

      {Object.keys(history).map((key) => {
        if (history[key].length === 0) {
          return (
            <S.Card>
              <p> {StringHelper.formatTimestampToDateReadble(key)} </p>
              <p>Você estava bem neste dia !!!</p>
            </S.Card>
          );
        }

        return (
          <S.Card>
            <p> {StringHelper.formatTimestampToDateReadble(key)} </p>
            <p>
              Você estava com{" "}
              <strong>
                {history[key].map((symptom) => (
                  <>{symptom}, </>
                ))}
              </strong>
            </p>
          </S.Card>
        );
      })}
    </section>
  );
}

export default PanelRegister;
