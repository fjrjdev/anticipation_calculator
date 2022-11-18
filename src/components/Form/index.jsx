import { useContext } from "react";
import { StatesContext } from "../../contexts/StateContext";

import { StyledForm } from "./styles";
import { useForm, useNumber } from "lx-react-form";
import Tags from "../Tags";

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
      <label htmlFor="venda">Informe o valor da venda *</label>
      <input
        type="number"
        id="venda"
        min="1"
        placeholder="Digite aqui seu valor da venda"
        {...venda.inputProps}
      />
      {venda.error ? <p>{venda.error}</p> : null}

      <label htmlFor="parcelas">Em quantas parcelas *</label>
      <input
        type="number"
        id="parcelas"
        min="2"
        placeholder="Digite aqui em quantas parcelas"
        {...parcelas.inputProps}
      />
      {parcelas.error ? <p>{parcelas.error}</p> : null}

      <label htmlFor="mdr">Informe o percentual de MDR *</label>
      <input
        type="number"
        id="mdr"
        min="0"
        placeholder="Digite aqui o percentual de MDR *"
        {...mdr.inputProps}
      />
      {mdr.error ? <p>{mdr.error}</p> : null}

      <label htmlFor="periodos">Informe os períodos de recebimento</label>
      <Tags id="periodos" />
      <button type="submit">Calcular</button>
    </StyledForm>
  );
};

export default Form;
