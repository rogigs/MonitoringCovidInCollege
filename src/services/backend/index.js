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
