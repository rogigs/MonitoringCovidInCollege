import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const TableReports = ({ reports }) => (
  <div style={{ position: "relative" }}>
    <div style={{ overflow: "auto" }}>
      <S.Table>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Setor</th>
            <th>Saudáveis</th>
            <th>Não saudáveis</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((symptom) => (
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

TableReports.propTypes = {
  reports: PropTypes.array.isRequired,
};

export default TableReports;
