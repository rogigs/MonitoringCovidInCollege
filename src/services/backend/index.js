import StringHelper from "~/helpers/StringHelper";
import HttpConfig from "../HttpConfig";

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
    const permission = {
      student: 0,
      employee: 1,
      admin: 9,
    };

    const { data } = await HttpConfig.withToken.post(`auth/register`, {
      code: registrationNumber,
      password: bornDate,
      full_name: fullName,
      birth_date: StringHelper.formatStringToTimestamp(bornDate).getTime(), // timestamp
      city,
      uf,
      sector,
      permission: permission[typeUser],
    });

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
