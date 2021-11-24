import * as yup from "yup";

const validationSchema = yup
  .object({
    initialDate: yup.string().required("Preencha o campo com a Data Inicial"),
    finalDate: yup.string().required("Preencha o campo com a Data Final"),
  })
  .required();

export default validationSchema;
