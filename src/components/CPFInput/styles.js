import styled from "styled-components";


export const Wrapper = styled.div`
 
display: flex;
flex-direction: column;

 .cpf{
    width: 400px;
    background-color: #000;
    height:25px;
    color: #FFFFFF;
    border: none;
    margin-bottom: 10px;
 }

    .cpf:hover{
        opacity: 0.6;
    }
    .cpf: focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }


`