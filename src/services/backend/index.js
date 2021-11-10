import HttpConfig from "./HttpConfig";
// TODO: Create config axios

export const authLogin = async ({ user, password }) => {
  try {
    const { data } = await HttpConfig.withoutToken.post(`auth/login`, {
      code: user,
      password,
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const registerUser = async ({
  registrationNumber,
  fullName,
  bornDate,
  city,
  sector,
  uf,
  typeUser,
}) => {
  try {
    const { data } = await HttpConfig.withToken.post(`auth/register`, {
      code: registrationNumber,
      password: "123",
      full_name: fullName,
      birth_date: bornDate, // timestamp
      city,
      uf,
      sector, // Opcional, para caso o usuário seja funcionário
      permission: typeUser,
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
