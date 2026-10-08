import type { InputHTMLAttributes } from "react";
import { ErrorMessage, InputWrapper, Label, StyledInput } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

function Input({ id, label, error, ...props }: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput id={id} {...props} />
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
    </InputWrapper>
  );
}

export default Input;