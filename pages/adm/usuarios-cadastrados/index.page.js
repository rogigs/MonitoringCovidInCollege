import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ButtonMUI from "~/components/Button";
import TableUser from "~/components/Table/TableUser";
import * as S from "./styles";
import { getUsers } from "~/services/backend";

function UsersRegistered() {
  const router = useRouter();
  const onClickRegister = () => router.push("/adm/registro");

  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const { users } = await getUsers();
    users && setUsers(users);
  }, [users]);

  return (
    <>
      <h1>Usuários registrados</h1>
      <br />
      <S.WrapperButton>
        <ButtonMUI onClick={onClickRegister}>Registrar novo usuário</ButtonMUI>
      </S.WrapperButton>

      <br />
      <br />
      <TableUser data={users} />
    </>
  );
}

export default UsersRegistered;
