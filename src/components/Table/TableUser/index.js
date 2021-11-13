import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const TableUser = ({}) => (
  <S.Table>
    <thead>
      <tr>
        <th>TIA/Funcional</th>
        <th>Nome</th>
        <th>Setor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </tbody>
  </S.Table>
);

TableUser.propTypes = {};

export default TableUser;
