import { MdEmail, MdLock } from 'react-icons/md';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input'; // Corrected the path to 'components'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'; // Added the import statement for yup

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles'; // Fixed spelling of TitleHighlight
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';

const schema = yup.object().shape({
  email: yup.string().email('email não é valido').required('Campo obrigatorio'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate(); 

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('Email ou senha inválidos');
      }
    } catch {
      alert('Houve um erro, tente novamente.');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias 
            e entrar mais rápido nas empresas mais desejadas.
          </Title>
          <Button title="Começar agora" variant="secondary" onClick={() => null} /> {/* Fixed spelling of "secondary" */}
        </Column>
        <Wrapper> 
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="Email" leftIcon={<MdEmail />} />
            <Input name="password" errorMessage={errors.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="secondary" type='submit'/>
          </form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar conta</CriarText>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export { Login };
