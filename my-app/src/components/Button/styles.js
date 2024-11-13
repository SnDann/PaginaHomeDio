import styled from "styled-components";
import css from "styled-jsx/css";

export const ButtonContainer = styled.button
`
background-color: #565656;
color: white;
border-radius: 22px;

color:FFFF;
padding: 2px 12px;
min-width: 120px;
width: 100%;

${({variant}) => variant === 'primary' && css `
   min-width: 167px;
    height: 33px;

    background-color: #E4105D;

    &:hover {
    opacity: 0.6;
    cursor: pointer;
    }

    &::after {
         content: '';
         position: absolute;
         border: 1px solid #E4105D;
         top: -5px;
         left: -5px;
         width: calc (100% + 10px);
         heigth: calc (100% - 10px);
         border-radius: 22px;
    }

`}}
`;

