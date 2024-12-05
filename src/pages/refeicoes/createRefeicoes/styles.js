import styled from "styled-components";



export const Content = styled.div`
    margin-top: 70px;
    margin-left: 400px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    width: 100%;

`




export const Display = styled.div`

    margin-left: 100px;
    width: 50%;

`

export const InputWrappers = styled.div`

    width: 100%;
    margin-left: 300px;
    
    h1{
        margin-bottom: 20px;
        margin-left: 40px;
    }

    .form-input{
        width: 400px;
        background-color: #000;
        color: #FFFFFF;
        border: none;
    }


`


export const ButtonForm = styled.button` 

    background-color: #565656;
    color: #FFFFFF;
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 10px;    
    margin-left: 130px;
    justfy-content: center;
    align-itens: center;


    &:hover{
        opacity: 0.6;
    }

`
