import styled from 'styled-components';

export const Header = styled.header`
  width: 1280px;
  height: 47px;
  top: 6px;
  opacity: 0;
  background: #FFFFFF;
`;


export const Content = styled.div`
  width: 388px;
  height: 308px;
  top: 141px;
  left: 65px;
  opacity: 0;

  h1 {
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    color: #000000;
  }
`;  

export const Form = styled.form`
  width: 374px;
  height: 450px;
  top: 153px;
  left: 748px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextLayout = styled.div`
  width: 368px;
  height: 44px;
  top: 153px;
  left: 750px;
  opacity: 0;

  h2 {
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    line-height: 43.58px;
    text-align: left;
    color: #FFFFFF;
  }

  p {
    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: left;
    color: #FFFFFF;
  }
`;

export const Input = styled.input`
 padding: 10px; 
 font-size: 16px; 
 border: 1px solid #ccc; 
 border-radius: 5px;
 `;

 export const Button = styled.button` 
 padding: 10px; 
 ont-size: 16px; 
 background-color: #8647AD; 
 color: white; 
 border: none;
 border-radius: 5px;
cursor: pointer;
 &:hover { background-color: #753595; } `;



