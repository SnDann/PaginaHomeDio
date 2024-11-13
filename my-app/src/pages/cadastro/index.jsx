import React from 'react';
import { Header } from './Header';
import { Content } from './Content';
import { Form, TextLayout } from './Form';
import { Input } from './Input';
import { Button } from './Button';

const SignUp = () => {
  return (
    <>
      <Header />
      <Content>
        <h1>
          A plataforma para você aprender com experts, dominar as principais tecnologias 
          e entrar mais rápido nas empresas mais desejadas.
        </h1>
      </Content>
      <Form>
        <TextLayout>
          <h2>Crie sua conta e make the change</h2>
        </TextLayout>
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button type="submit">Criar minha conta</Button>
      </Form>
      <TextLayout>
        <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
        <p>Já tenho conta. <a href="/login" style={{ color: '#23DD7A', fontWeight: '700' }}>Fazer login</a></p>
      </TextLayout>
    </>
  );
};

export default SignUp;

