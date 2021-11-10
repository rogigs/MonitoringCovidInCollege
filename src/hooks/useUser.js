import { useState } from "react";

export const useUser = (data) => {
  const [user, setUser] = useState({});

  if (data) {
    setUser(data);
  }

  return user;
};

export default useUser;
