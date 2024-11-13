import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: sapce-between;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

export const Title = styled.h3`
  font-family: 'Open-Sans';
  font-style: normal;
  font-weigth: 700;
  font-size: 32px;
  width: 320px;
  margin-botton: 20px;
  line-heigth: 44px;

  color: #FFFFFF;

`;

export const TitleHighligth = styled.h3`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   line-height: 25px;
   color: #FFFFFF;
   margin-botton: 24px;
`;

export const Column = styled.div`
flex:${({flex}) => flex};
padding-rigth: 24px;
`;