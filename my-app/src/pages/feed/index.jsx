import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo'; // Corrected the path

import { Container, Column, Title, TitleHighlight } from './styles'; // Fixed spelling of TitleHighlight

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo percentual={35} nome='SnDann' image="https://avatars.githubusercontent.com/u/109990388?v=4&size=64" />
          <UserInfo percentual={25} nome='Luis' image="https://avatars.githubusercontent.com/u/1?v=4&size=64" />
          <UserInfo percentual={20} nome='João' image="https://avatars.githubusercontent.com/u/2?v=4&size=64" />
        </Column>
      </Container>
    </>
  )
}

export { Feed };
