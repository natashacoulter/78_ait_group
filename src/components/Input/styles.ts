import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  width: 100%;
  min-width: 0;
  padding: 12px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font: inherit;

  &:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;


