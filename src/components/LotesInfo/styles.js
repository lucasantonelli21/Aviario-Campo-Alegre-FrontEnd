import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 24px;
` 

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 2px;
` 

export const Progress = styled.div`
    width: 100px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative; 
    margin-top: 10px;
    margin-left: 3px;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
` 