import styled from 'styled-components';

export const CardContainer = styled.div`
   width: 100%;
   background-color: #3844651;
   positon: relative;
   margin-botton: 24px;
`
export const ImageBackground =styled.div`
   width: 100%;
   height: 180px;
`
export const Content = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 12px;
`

export const UserInfo = styled.div`
   display: flex;
   flex-direction: row;
   margin-botton: 12px;

   div {
   margin-left: 12px;
   }

   h4 {
   font-family: 'Open Sans';
   font-style: normal;
   font-weigth: 400;
   font-size: 12px;
   line-heigth: 16px;
   color: #FFFFFF;
   }

   p {
   font-family: 'Open Sans'};
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 14px;
   color: #FFFFFF;
`
export const UserPicture = styled.img`
width: 32px;
height: 32px;
border-radius: 22%;
border: 3px solid #FFFFFF;
`
export const PastInfo = styled.div`

margin-botton: 12px;

h4{
font-family: 'Open Sans;
font-style: normal;
font-weigth: 700;
font-size: 18px;
line-heigth: 25px;
color: #FFFFFF;
}

p {
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
}
`
export const HasInfo = styled.div`
 margin-top: 12px;

 h4 {
 font-family: 'Open Sans;
 font-style: normal;
 font-weigth: 700;
 font-size: 12px;
 line-heigth: 16px;
 color: #FFFFFF;
 }

 p{
 font-family: 'Open Sans;
 font-style: normal;
 font-weigth: 700;
 font-size: 14px;
 line-heigth: 22px;
 color: #FFFFFF;}
`