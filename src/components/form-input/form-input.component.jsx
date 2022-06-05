import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  // console.log(otherProps.value);
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        // TODO: Fix shrink issue on otherProps.value
        <FormInputLabel shrink={otherProps.value}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
