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
      <input
        type={inputType}
        id={defaultName}
        min={min}
        placeholder={placeholder}
        {...{ formField }.inputProps}
      />
      {formField.error ? <p>{formField.error}</p> : null}
    </>
  );
};
export default FormInput;
