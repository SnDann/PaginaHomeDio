import bannerImage from '../../assets/banner.png'; // Corrected the path to 'assets'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';

import {UseNavigate} from 'react-router-dom'; // Corrected the import statement

import { Container, TextContent, Title, TitleHighlight } from './styles'; // Fixed spelling of TitleHighlight

const Home = () => {
  const navigate = UseNavigate(); // Corrected the function name
  const handleClickSignIn = () => {
    navigate('/login');
  }
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente 
              <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent> {/* Changed TitleContent to TextContent */}
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts. {/* Fixed typo in "comunidade" */}
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} /> {/* Fixed spelling of "secondary" */}
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };