import React, { useState } from "react";
import { registerUserExcel } from "~/services/backend";
import DialogMUI from "~/components/Dialog";
import ButtonMUI from "~/components/Button";
import * as S from "../../styles";

const FormExcel = () => {
  const [modal, setModal] = useState({
    open: false,
    title: "",
    message: "",
    buttonName: "",
    icon: "",
  });

  const handleCloseModal = () => setModal({ ...modal, open: false });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();

      formData.append("sheet", selectedFile, selectedFile.name);

      await registerUserExcel(formData);

      setModal({
        open: true,
        title: "Usuário cadastrado",
        message: "Parabéns, o usuário foi cadastrado com sucesso",
        buttonName: "Concluir",
        icon: "success",
      });
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      if (error.message === "Documento de planilha ausente.") {
        return setModal({
          open: true,
          title: "Erro ao registrar usuário",
          message:
            "Nenhuma planilha foi inserida. Insira uma planilha e tente novamente.",
          buttonName: "Tentar novamente",
          icon: "warning",
        });
      }

      setModal({
        open: true,
        title: "Erro ao registrar usuário",
        message:
          "Não foi possível cadastrar o usuário, por favor verifique se o arquivo está sendo enviado da forma correta e tente novamente.",
        buttonName: "Tentar novamente",
        icon: "danger",
      });
    }
  };

  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>Datalhes do arquivo:</h2>

          <p>
            <strong>Nome do arquivo:</strong> {selectedFile.name}
          </p>

          <p>
            <strong> Tipo do arquivo::</strong> {selectedFile.type}
          </p>

          <p>
            <strong>Última modificação: :</strong>{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <DialogMUI
        open={modal?.open}
        onClose={handleCloseModal}
        buttonName={modal?.buttonName}
        title={modal?.title}
        children={modal?.message}
        icon={modal?.icon}
      />

      <S.WrapperField>
        <S.WrapperButton>
          <br />
          <br />
          <label>Inserir arquivo Excel:</label>
          <br />
          <ButtonMUI variant="outlined">
            <input
              type="file"
              name="file"
              accept=".xlsx"
              onChange={onFileChange}
            />
          </ButtonMUI>
        </S.WrapperButton>
      </S.WrapperField>
      {fileData()}

      <S.WrapperButton>
        <ButtonMUI onClick={onFileUpload} loading={isSubmitting}>
          {" "}
          Cadastrar
        </ButtonMUI>
      </S.WrapperButton>
    </>
  );
};

export default FormExcel;
