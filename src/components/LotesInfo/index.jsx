import React from 'react'
import { useState } from 'react';
import { Container, NameText, Progress, Row} from './styles';

const LotesInfo = ({lote}) => {
    var percentual = 0;
    if(lote.vendido)
        percentual = 100;
    else{
        const date = new Date(lote.dataEntrada);
        date.setDate(date.getDate() + 90);
        percentual = ((date-new Date(lote.dataEntrada))/1000/60/60/24)
    }
    
    return (
    <Container>
        <div>
            <Row>
                <NameText>{lote.id}-</NameText>
                <NameText>Entrada: {lote.dataEntrada}</NameText>
            </Row>
            <Row>
                <NameText>Conclusão:</NameText>
                <Progress percentual={percentual} />
            </Row>
        </div>
    </Container>
  )
}

export { LotesInfo }