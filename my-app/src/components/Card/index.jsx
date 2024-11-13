import React from 'react'
import { FiThumsup} from 'react-icons/fi'

import { CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground,
     PastInfo, 
     UserInfo, 
     UserPicture 
    } from './styles'
const Card = () =>{
  return (
    <CardContainer>
        <ImageBackground src="g:\Windows 11 wallpaper.jpeg"/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/109990388?v=4&size=64"/>
                <div>
                    <h4>Nome do Usuário</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PastInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito o curso de html e css no bootcamp da DIO <strong>Saiba Mais</strong></p>
            </PastInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumsup /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card};