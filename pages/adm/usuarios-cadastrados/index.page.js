import React, { useState } from "react";
import { useRouter } from "next/router";

import ButtonMUI from "~/components/Button";
import TableUser from "~/components/Table/TableUser";
import * as S from "./styles";

function UsersRegistered() {
  const router = useRouter();
  const onClickRegister = () => router.push("/adm/registro");

  return (
    <>
      <h1>Usuários registrados</h1>
      <br />
      <S.WrapperButton>
        <ButtonMUI onClick={onClickRegister}>Registrar novo usuário</ButtonMUI>
      </S.WrapperButton>

      <br />
      <br />
      <TableUser />
    </>
  );
}

export default UsersRegistered;
