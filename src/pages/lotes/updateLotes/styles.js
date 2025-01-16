import styled from "styled-components";



export const Content = styled.div`
    margin-top: 70px;
    margin-left: 620px;
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    

`

export const ContentBox = styled.div`
    background-color: #FFFF;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    width: 500px;
    height: 550px;
    align-items: center;
    justify-content: center;

`

export const NavBox = styled.div`
    background-color: #C0C0C0;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;

`


export const NavButtonBox = styled.button`   
    background-color: transparent;
    border-radius: 10px;
    border: none;
    height: 100%;
    width: 100%;
    color: #000;


    &:hover{
        opacity: 0.6;
        background-color: #FFFFFF;
    }


`




export const Display = styled.div`

    margin-left: 100px;
    width: 50%;

`

export const InputWrappers = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 50px;
    
    
    h2{
        margin-bottom: 10px;
        margin-left: 20px;
        color: #000;
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
