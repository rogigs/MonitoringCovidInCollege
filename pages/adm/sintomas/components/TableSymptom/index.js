import React, { useEffect, useState } from "react";
import { getSymptoms } from "~/services/backend";
import * as S from "./styles";

const TableSymptom = () => {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(async () => {
    const { symptoms } = await getSymptoms();
    symptoms && setSymptoms(symptoms);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ overflow: "auto" }}>
        <S.Table>
          <thead>
            <tr>
              <th>Sintoma</th>
              <th>Criado em</th>
            </tr>
          </thead>
          <tbody>
            {symptoms.map((symptom) => (
              <tr>
                <td>{symptom?.name ?? "--"}</td>
                <td>{symptom?.creation_date ?? "--"}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </div>
    </div>
  );
};

TableSymptom.propTypes = {};

export default TableSymptom;
