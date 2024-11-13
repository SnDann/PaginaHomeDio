import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 30px;
    max-width: 275px;
    border-botton 1px solid #38345D;

    display: flex;
    align-itens: center;
    margin-botton: 28px;
 
`;

 export const IconContainer = styled.div`
 
    margin-rigth: 10px;
`;

export const InputText = styled.input`
   background-color: transparent;
   color: #FFFFFF;
   border: 0;
   heigth: 30px;
`;

export const ErrorText = styled.p`
  color: #FF0000;
  font-size: 12px;
  margin: 5px 0;
`;