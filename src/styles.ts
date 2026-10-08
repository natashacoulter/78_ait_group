import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #1e293b;
    background-color: #f1f5f9;
  }
`;

export const Page = styled.main`
  min-height: 100vh;
  padding: 48px 24px;
`;

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 32px;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
