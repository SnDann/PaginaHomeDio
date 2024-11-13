import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 24px;
`;

export const UserPicture =styled.img`
width: 32px;
heigth: 32px;
border-radius: 32px;
border: 3px solid #FFFFFF;
margin-rigth: 12px;
`
export const NameText = styled.div`
font-family: 'Open Sans'
font-size: 16px;
font-weight: 700;
font-style: normal;
line-weigth: 25px;
color: #FFFFFF;
`;

export const Progress = styled.div`
width: 188px;
height: 6px;
background-color: #FFFFFF;
border-radius: 3px;
position: relative;

&::after {
content: '';
position: absolute;
top: 0;
left: 0;
width: ${(percentual) => percentual}%;
height: 6px;
border-radius: 3px;
background-color: #23DD7A;
`;
