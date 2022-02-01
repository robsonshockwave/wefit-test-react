import theme from "src/styles/theme";
import styled, { keyframes } from "styled-components";

const animeBottomToTop = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const ContainerEmpty = styled.div`
  width: 352px;
  height: 280px;
  background: ${theme.colors.colorBoxEmptyList};
  border: 1px dashed ${theme.colors.colorBoxEmptyListBorder};
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: translateY(15px);
  animation: ${animeBottomToTop} 0.3s forwards;

  span {
    font-size: 12px;
    color: ${theme.colors.colorListItemText};
    line-height: 14px;
    font-weight: 400;
  }
`;
