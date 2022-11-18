import { CustomError } from "./styles";

const FormInput = ({
  inputType = "text",
  defaultName,
  labelText,
  min = 0,
  placeholder,
  formField,
}) => {
  return (
    <>
      <label htmlFor={defaultName}>{labelText}</label>
      {formField.error ? (
        <CustomError>{formField.error}</CustomError>
      ) : (
        <CustomError />
      )}
      <input
        type={inputType}
        id={defaultName}
        min={min}
        placeholder={placeholder}
        {...{ formField }.inputProps}
      />
    </>
  );
};
export default FormInput;
