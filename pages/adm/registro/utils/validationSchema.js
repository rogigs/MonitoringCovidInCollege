import * as yup from "yup";

const validationSchema = yup
  .object({
    bornDate: yup.string().required("Preencha o campo Data de nascimento"),
    city: yup.string().required("Preencha o campo Cidade"),
    fullName: yup.string().required("Preencha o campo Nome completo"),
    registrationNumber: yup
      .string()
      .required("Preencha o campo Número de matrícula(ou funcional)"),
    sector: yup.string().required("Preencha o campo Área"),
    uf: yup.string().required("Preencha o campo UF"),
  })
  .required();

export default validationSchema;
