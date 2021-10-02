import React from "react";

import { useRouter } from "next/router";
import ButtonMUI from "../../../components/Button";

function Dashboard() {
  const router = useRouter();
  const onClickRegister = () => router.push("/adm/registro");

  return <ButtonMUI onClick={onClickRegister}>Registrar usuário</ButtonMUI>;
}

export default Dashboard;
