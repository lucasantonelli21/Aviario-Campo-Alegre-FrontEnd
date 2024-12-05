import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    max-width: 80%;
    height: 47px;
    align-items:center;
    display: flex;
    justify-content: center;
    margin:0 auto;




    Button{
        
    }
`

export const Button = styled.button`

    width: 150px;
    margin-right: 20px;
    background-color: #565656;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;

     &:hover{
            opacity: 0.6;
            cursor: pointer;
        }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;


`


export const Column = styled.div`
    display: flex;
    flex-direction: Column;
    align-items: center;

`



export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    align-items: center;



`




export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    align-items: center;
    width: 100%;
`

export const Title = styled.h1`
    color: #FFFFFF;
    font-family: 'Open Sans';
    margin-left: 200px;
`
