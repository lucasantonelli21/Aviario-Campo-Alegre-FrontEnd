import React, { useEffect, useState } from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
import { Route, useNavigate, useLocation} from "react-router-dom";
import { AviarioService } from '../../../services/api';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import {MdSearch} from 'react-icons/md';
import { useForm } from 'react-hook-form'
import {Container, SearchWrapper, TableWrapper,} from './styles'
import { Button } from '../../../components/Button';




const ListLotes = () => {
    const location = useLocation();
    const token = location.state.token;
    const api = new AviarioService('Lote',token);
    const [lotes,setLotes] = useState([]);
    useEffect(()=>{
      api.getLotes().then( data => setLotes(data)).catch();
    },[])

    const arrayProps= ['Id','Data de Entrada','Data de Venda','Linhagem','Quantidade de Animais','Quantidade de Consumo','Quantidade de Mortos','Vendido'];
    const {control, handleSubmit, formState : {erros}} = useForm({
      reValidateMode: 'onChange',
      mode: 'onChange',
    });
    const onSubmit = () =>{
      console.log('oi');
    }
  return(<>
    {token ? (<> 
        <Header autenticado={true} token={token}/>
        <Container>
          <h1>Lista de Lotes</h1>
          <SearchWrapper>
            <Input placeholder="Busque por id" leftIcon={<MdSearch />} name="id"  control={control} />
          </SearchWrapper>
        </Container>
        <TableWrapper>
        <table>
            <thead>
                <tr>{arrayProps.map((arrayProp) => <th scope='col'>{arrayProp}</th> )}
                <th scope='col'> Inspecionar Vendas</th>
                </tr>
                
            </thead>
            <tbody>
              {lotes.map( (lote) => 
                    <tr>
                        <td>{lote.id}</td>
                        <td>{lote.dataEntrada}</td>
                        <td>{lote.dataVenda}</td>
                        <td>{lote.linhagem}</td>
                        <td>{lote.quantidadeAnimais}</td>
                        <td>{lote.quantidadeConsumo}</td>
                        <td>{lote.quantidadeMortos}</td>
                        <td>{lote.vendido.toString()}</td>
                        <td><Button title='Visualizar' variant='secondary'/></td>
                    </tr>)}
            </tbody>
          </table>
        </TableWrapper>
    </>
  ): (<NeedLogin/>)}
  </>)
}

export {ListLotes};
