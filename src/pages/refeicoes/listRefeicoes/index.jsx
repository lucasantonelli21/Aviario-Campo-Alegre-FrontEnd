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




const ListRefeicoes = () => {
    const location = useLocation();
    const token = location.state.token;
    const api = new AviarioService('Refeicao/Listar',token);
    const [refeicoes,setRefeicoes] = useState([]);
    useEffect(()=>{
      api.getRefeicoes().then( data => setRefeicoes(data)).catch();
    },[])
    console.log(refeicoes)
    const arrayProps= ['Id','Tipo de Ração','Preço da Ração','Aplicado no Lote','Quantidade de Ração','Data da Administração','Preço da Aplicação'];
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
          <h1>Lista de Refeições</h1>
          <SearchWrapper>
            <Input placeholder="Busque por id" leftIcon={<MdSearch />} name="id"  control={control} />
          </SearchWrapper>
        </Container>
        <TableWrapper>
        <table>
            <thead>
                <tr>{arrayProps.map((arrayProp) => <th scope='col'>{arrayProp}</th> )}
                </tr>
                
            </thead>
            <tbody>
                {refeicoes.map( (refeicao) => 
                        <tr>
                            <td>{refeicao.id}</td>
                            <td>{refeicao.racao.tipoDaRacao}</td>
                            <td>R$ {refeicao.racao.preco}</td>
                            <td>{refeicao.numeroLote}</td>
                            <td>{refeicao.quantidadeRacao}</td>
                            <td>{refeicao.dataAdministracao}</td>
                            <td>R$ {refeicao.precoAplicao}</td>
                        </tr>)}
            </tbody>
          </table>
        </TableWrapper>
    </>
  ): (<NeedLogin/>)}
  </>)
}

export {ListRefeicoes};
