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

export const resetPassword = async ({ newPassword, oldPassword }) => {
  try {
    const { data } = await HttpConfig.withToken.post("auth/changePassword", {
      old_password: oldPassword,
      new_password: newPassword,
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

    const { data } = await HttpConfig.withToken.post("auth/register", {
      code: registrationNumber,
      password: registrationNumber,
      full_name: fullName,
      birth_date: StringHelper.formatStringToTimestamp(bornDate).getTime(),
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

export const registerUserExcel = async (formData) => {
  try {
    const { data } = await HttpConfig.withToken.post("/user/batch_register", {
      sheet: formData,
    });

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getUsers = async () => {
  try {
    const { data } = await HttpConfig.withToken.get("user/all");

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createSymptom = async (symptom) => {
  try {
    const { data } = await HttpConfig.withToken.post(
      "/symptoms/create",
      symptom
    );

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getSymptoms = async () => {
  try {
    const { data } = await HttpConfig.withToken.get("symptoms/");

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getReports = async ({ initialDate, finalDate }) => {
  try {
    const { data } = await HttpConfig.withToken.get("health/report", {
      params: {
        by_sector: "True",
        initial_date:
          StringHelper.formatStringToTimestamp(initialDate).getTime(),
        final_date: StringHelper.formatStringToTimestamp(finalDate).getTime(),
      },
    });

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getFrequency = async ({ initialDate, finalDate }) => {
  try {
    const response = await HttpConfig.withToken.get("health/frequency", {
      params: {
        initial_date:
          StringHelper.formatStringToTimestamp(initialDate).getTime(),
        final_date: StringHelper.formatStringToTimestamp(finalDate).getTime(),
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const registerHealth = async (listSymptoms) => {
  try {
    const today = new Date();
    const data = await HttpConfig.withToken.post("health/register", {
      symptoms: listSymptoms,
      date: today.getTime(),
    });

    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const healthHistoryUser = async () => {
  try {
    const data = await HttpConfig.withToken.get("health/history");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
