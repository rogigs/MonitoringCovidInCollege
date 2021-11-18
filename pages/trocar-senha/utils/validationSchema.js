import * as yup from "yup";

const validationSchema = yup
  .object({
    oldPassword: yup.string().required("Preencha o campo com a senha antiga"),
    newPassword: yup.string().required("Preencha o campo com a nova senha"),
  })
  .required();

export default validationSchema;
