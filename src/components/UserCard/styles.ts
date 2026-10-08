import styled from "@emotion/styled";

export const Card = styled.article`
  min-width: 0;
  padding: 32px;
  border: 1px solid #dbe2ea;
  border-radius: 16px;
  background-color: #ffffff;
`;

export const CardTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 24px;
`;

export const Details = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
`;

export const DetailRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DetailLabel = styled.dt`
  color: #64748b;
  font-size: 14px;
`;

export const DetailValue = styled.dd`
  margin: 0;
  font-size: 18px;
  overflow-wrap: anywhere;
`;
