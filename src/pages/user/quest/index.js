import React, { useState } from "react";
import QuestAboutHealth from "./components/QuestAboutHealth";
import QuestItsOk from "./components/QuestItsOk";

function Register() {
  const [itsOk, setQuestItsOk] = useState(true);

  return itsOk ? (
    <QuestItsOk itsOk={itsOk} setQuestItsOk={setQuestItsOk} />
  ) : (
    <QuestAboutHealth />
  );
}

export default Register;
