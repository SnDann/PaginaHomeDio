import styled from 'styled-components';

export const Container = styled.div
`
    width: 100%;
    max-width: 80%;
    heigt: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

`;

export const Row = styled.div
`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Colum = styled.div
`
    display: flex;
    flex-direction: colum;
    align-items: center;
`;

export const Wrapper = styled.div
`
  background-color: #A151515;
  width: 100%;
  heigth: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuscarInputContainer = styled.div
`
  width: 275px;
  height: 30px;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  background-color: #2D2D37;

  display:flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a
`
  font-family: 'Open Sans',
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #FFFFFF;
  margin-rigth: 12px;
  text-decoration: none;
`;

export const MenuRigth = styled.a
`
  font-family: 'Open Sans',
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #white;
  margin-rigth: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img
`
  border: 2px solid #white;
  color: #FFF;
  width: 32px;
  heigth: 42px;
  }
`;

export const Input = styled.input
`
  background: transparent;
  flex: 1;
  border: 0;
  color: #FFF;
  }
`;