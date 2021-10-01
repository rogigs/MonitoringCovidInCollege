import React from "react";

import { useRouter } from "next/router";
import ButtonMUI from "../../components/Button";

function Dashboard() {
  const router = useRouter();
  const onClickRegister = () => router.push("/registro");

  return <ButtonMUI onClick={onClickRegister}>Registrar usuario</ButtonMUI>;
}

export default Dashboard;
