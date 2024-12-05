import styled, { css } from 'styled-components';


export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border: 0;
    color: #FFFF;
    padding: 2px 12px;
    min-width: 90px;
    width: 100%;
    font-family: 'Open Sans';
    cursor: pointer;

    
     ${({variant}) => variant === "primary" && css `
        

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }
    `}



    ${({variant}) => variant !== "primary" && css `
        
        min-width:  90px;
        height: 33px;
        font-family: 'Open Sans';
        background: #1A5276;

        &:hover{
            opacity: 0.6;
            cursor: pointer;
        }

    
    `}

`