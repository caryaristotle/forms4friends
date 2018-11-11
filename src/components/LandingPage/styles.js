import { Flex } from "grid-styled";
import styled from "styled-components";

export const Button = styled.button`
    width: 60px;
    border-radius: 6px;
    background-color: white;
    color: black;
    border: 2px solid black;
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    padding: 5px 5px;
    margin: 6px 6px;

    :hover {
        background-color: black
        color: white;
    }
`;

export const InputText = styled.input`
  width: 100%;
  padding: 5px 5px;
  margin: 6px 6px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 6px;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;

  :focus {
    border: 3px solid red;
  }
`;

export const Container = styled(Flex)`
  width: 100%;
  margin: 10px;
`;

export const Div = styled(Flex)``;

export const Text = styled(Flex)`
  font: Arial;
  font-size: 18px;
  font-weight: 300;
`;

export const H1 = styled.h1`
  font: Arial;
  font-size: 32px;
  margin-bottom: 0px;
  text-decoration: underline;
`;
