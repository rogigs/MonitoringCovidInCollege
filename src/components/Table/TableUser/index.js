import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const TableUser = ({ data = [] }) => (
  <div style={{ position: "relative" }}>
    <div style={{ overflow: "auto" }}>
      <S.Table>
        <thead>
          <tr>
            <th>TIA/Funcional</th>
            <th>Nome</th>
            <th>Setor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user?.code ?? "--"}</td>
              <td>{user?.name ?? "--"}</td>
              <td>{user?.sector === "None" ? "--" : user?.sector}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </div>
  </div>
);

TableUser.propTypes = {};

export default TableUser;
