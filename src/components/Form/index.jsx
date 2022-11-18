import { useContext } from "react";
import { StatesContext } from "../../contexts/StateContext";

import { StyledForm } from "./styles";
import { useForm, useNumber } from "lx-react-form";
import Tags from "../Tags";
import FormInput from "../FormInput";

const Form = () => {
  const { tags } = useContext(StatesContext);

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
  });

  const form = useForm({
    formFields: [venda, parcelas, mdr],
    submitCallback: (formData) => {
      if (tags?.length >= 1) {
        const request = { days: tags, ...formData };
        console.log(request);
      } else {
        console.log(formData);
      }
    },
  });
  return (
    <StyledForm onSubmit={form.handleSubmit}>
      <FormInput
        inputType={"number"}
        defaultName={"venda"}
        labelText={"Informe o valor da venda *"}
        min={0}
        placeholder={"Digite aqui seu valor da venda"}
        formField={venda}
      />

      <FormInput
        inputType={"number"}
        defaultName={"parcelas"}
        labelText={"Em quantas parcelas *"}
        min={2}
        placeholder={"Digite aqui em quantas parcelas"}
        formField={parcelas}
      />
      <FormInput
        inputType={"number"}
        defaultName={"mdr"}
        labelText={"Informe o percentual de MDR *"}
        min={0}
        placeholder={"Digite aqui o percentual de MDR *"}
        formField={mdr}
      />

      <label htmlFor="periodos">Informe os períodos de recebimento</label>
      <Tags id="periodos" />
      <button type="submit">Calcular</button>
    </StyledForm>
  );
};

export default Form;
