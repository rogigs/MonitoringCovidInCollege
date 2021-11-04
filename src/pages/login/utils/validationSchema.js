import * as yup from "yup";

const validationSchema = yup
  .object({
    user: yup.string().required("Preencha o campo com o TIA/Funcional"),
    password: yup.string().required("Preencha o campo senha"),
  })
  .required();

export default validationSchema;
