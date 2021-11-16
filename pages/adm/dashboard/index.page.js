import React from "react";

import { useRouter } from "next/router";
import ButtonMUI from "~/components/Button";
import * as S from "./styles";
import TableUser from "~/components/Table/TableUser";

function Dashboard() {
  const router = useRouter();

  const onClickRegister = () => router.push("/adm/registro");
  const onClickViewMore = () => router.push("/adm/usuarios-cadastrados");
  const onClickSympton = () => router.push("/adm/sintomas");

  return (
    <>
      <h1>Dashboard</h1> {/* box aqui */}
      <S.Box>
        <p>Realizar registros de:</p>
        <S.WrapperButton>
          <ButtonMUI onClick={onClickRegister}>Usuários</ButtonMUI>
          <ButtonMUI onClick={onClickSympton}>Sintomas</ButtonMUI>
        </S.WrapperButton>
      </S.Box>
      <S.Box>
        <p>Ver históricos de:</p>
        <S.WrapperButton>
          <ButtonMUI onClick={onClickRegister}>
            Frequência de usuários
          </ButtonMUI>
          <ButtonMUI onClick={onClickRegister}>Registro de usuários</ButtonMUI>
        </S.WrapperButton>
        <p>Ultimos usuarios cadastrados:</p>

        <TableUser />
        <p onClick={onClickViewMore}>Ver mais</p>
      </S.Box>
      <S.Box>
        <p>Relatórios:</p>
        <S.WrapperButton>
          <ButtonMUI onClick={onClickRegister}>Criar relatórios</ButtonMUI>
          <ButtonMUI onClick={onClickRegister}>Ver relatórios</ButtonMUI>
        </S.WrapperButton>
      </S.Box>
    </>
  );
}

export default Dashboard;
