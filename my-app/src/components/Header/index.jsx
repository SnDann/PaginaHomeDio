import React from 'react'; 
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRigth,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    return (
     <Wrapper>
        <Container>
            <Row>
              <img src={Logo} alt="Logo da dio" />
              {autenticado ? (
                <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..."/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
              </>
              ) : null}
            </Row>
            <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/109990388?v=4&size=64" />
              ) : (
                <>
              <MenuRigth href="#">Home</MenuRigth>
              <Button title="Entrar"/>
              <Button title="Cadastrar-se"/>
              </>
            )}
            </Row>
        </Container>
     </Wrapper>
    )
}

export { Header }