import theme from "src/styles/theme";
import styled from "styled-components";

export const ContainerList = styled.div`
  margin: 24px 0;

  ul {
    width: 352px;
    height: 280px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: ${theme.colors.colorScroll};
      border-radius: 4px;
      border: 1px solid ${theme.colors.colorBackground};
    }
    ::-webkit-scrollbar-thumb:vertical {
      background-color: ${theme.colors.colorBoxEmptyListBorder};
      border-radius: 4px;
      border: 1px solid ${theme.colors.colorBackground};
    }
  }
`;
