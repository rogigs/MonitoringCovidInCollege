import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import ButtonMUI from "~/components/Button";
import TableUser from "~/components/Table/TableUser";
import * as S from "./styles";
import { getUsers } from "~/services/backend";
import TitleHeader from "~/components/TitleHeader";

function UsersRegistered() {
  const router = useRouter();
  const onClickRegister = () => router.push("/adm/registro");

  const [usersState, setUsersState] = useState([]);

  useEffect(async () => {
    const { users } = await getUsers();
    return users && setUsersState(users);
  }, []);

  return (
    <>
      <TitleHeader title="Usuários registrados" />
      <br />
      <S.WrapperButton>
        <ButtonMUI onClick={onClickRegister}>Registrar novo usuário</ButtonMUI>
      </S.WrapperButton>

      <TableUser data={usersState} />
    </>
  );
}

export default UsersRegistered;
