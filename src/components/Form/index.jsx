import { useContext } from "react";
import { StatesContext } from "../../contexts/StateContext";

import { StyledForm } from "./styles";
import { useForm, useNumber } from "lx-react-form";
import Tags from "../Tags";
import { CustomError } from "../CustomError/styles";
import LabelForm from "./LabelForm";

const Form = () => {
  const { tags, calculateRequest, loading } = useContext(StatesContext);

  const venda = useNumber({
    name: "venda",
    initialValue: 0,
  });
  const parcelas = useNumber({
    name: "parcelas",
    min: 2,
    max: 12,
    errorText: {
      maxLength: "Máximo de 12 Parcelas",
    },
  });
  const mdr = useNumber({
    name: "mdr",
    min: 0,
    max: 100,
  });

  const form = useForm({
    formFields: [venda, parcelas, mdr],
    submitCallback: (formData) => {
      const request = {
        amount: formData.venda,
        installments: formData.parcelas,
        mdr: formData.mdr,
      };
      if (tags?.length >= 1) {
        const requestTags = {
          days: tags,
          ...request,
        };
        calculateRequest(requestTags);
      } else {
        calculateRequest(request);
      }
    },
  });
  return (
    <StyledForm onSubmit={form.handleSubmit}>
      <LabelForm inputName="venda" labelText="Informe o valor da venda *" />
      {venda.error ? <CustomError>{venda.error}</CustomError> : <CustomError />}
      <input
        type={"number"}
        id="venda"
        min={0}
        placeholder={"Digite aqui seu valor da venda"}
        {...venda.inputProps}
      />
      <LabelForm inputName="parcelas" labelText="Em quantas parcelas *" />
      {parcelas.error ? (
        <CustomError>{parcelas.error}</CustomError>
      ) : (
        <CustomError />
      )}
      <input
        type={"number"}
        id={"parcelas"}
        min={2}
        placeholder={"Digite aqui em quantas parcelas"}
        {...parcelas.inputProps}
      />
      <LabelForm inputName="mdr" labelText="Informe  o percentual de MDR *" />
      {mdr.error ? <CustomError>{mdr.error}</CustomError> : <CustomError />}
      <input
        type={"number"}
        id={"mdr"}
        min={0}
        step="0.01"
        placeholder={"Digite aqui o percentual de MDR *"}
        {...mdr.inputProps}
      />
      <LabelForm
        inputName="periodos"
        labelText="Informe os períodos para recebimento"
      />
      <Tags id="periodos" />
      <button type="submit" disabled={loading}>
        Calcular
      </button>
    </StyledForm>
  );
};

export default Form;
