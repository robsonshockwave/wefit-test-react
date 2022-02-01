import theme from "src/styles/theme";
import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    color: ${theme.colors.colorInputItemText};
    height: 48px;
    width: 288px;
    padding: 16px;
    margin-right: 16px;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 18.75px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    border-radius: 100%;
    background-color: ${theme.colors.colorButton};
    border: none;
    cursor: pointer;
    outline: none;

    img {
      height: 24px;
      width: 24px;
    }
  }
`;
