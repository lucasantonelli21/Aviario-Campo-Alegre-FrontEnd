import styled from "styled-components";





export const CardContainer = styled.div`
    width: 100%;
    background-color: transparent;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 10px;
    

    

`
export const ButtonSettings = styled.div`

    display: flex;
    flex-direction: column;

    Button{
        margin-bottom: 5px;
        
        
    }
`

export const Content = styled.div`
    background-color: #FFFFFF;
    border-radius: 10px;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    margin-left: 90px;
    margin-right: 90px;
`




export const PostInfo = styled.div`
    
    border-radius: 10px;
    width: 80%;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    margin-right: 700px;
    h1{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 25px; 
        color: #2260B9;
        margin-bottom: 10px;
        margin-top: 1px;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        width: 100%;
        color: #565656;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;    
        color: #FFFFFF80  
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        
    }
`