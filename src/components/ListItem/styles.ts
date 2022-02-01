import theme from "src/styles/theme";
import styled, { keyframes } from "styled-components";

const animeBottomToTop = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const ContainerItem = styled.div`
  width: 352px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.colorBoxListItem};
  border-radius: 2px;
  padding: 8px 16px;
  margin-bottom: 8px;

  opacity: 0;
  transform: translateY(10px);
  animation: ${animeBottomToTop} 0.4s forwards;

  span {
    color: ${theme.colors.colorListItemText};
    font-size: 14px;
    line-height: 16px;
  }

  img {
    height: 16px;
    width: 12px;
  }
`;
