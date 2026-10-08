import type { InputHTMLAttributes } from "react";
import { InputWrapper, Label, StyledInput } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

function Input({ id, label, ...props }: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput id={id} {...props} />
    </InputWrapper>
  );
}

export default Input;