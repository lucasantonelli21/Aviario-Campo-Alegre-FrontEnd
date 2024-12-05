import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;

    width: 100%;

    h1{
        
        margin-left: 800px;
        margin-right: 200px;

    }
   

`

export const SearchWrapper = styled.div`
    margin-top: 10px;
    

`

export const TableWrapper = styled.div`
    
    margin-top: 50px;
    margin-left: 400px;
    
    table {
        width: 80%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    table th, table td {
        padding: 10px;
        text-align: left;
        border-bottom: 3px solid #000;
    }

    table th {
        background-color: black;
        
    }

  
`