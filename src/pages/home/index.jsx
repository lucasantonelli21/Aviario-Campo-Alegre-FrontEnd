import React, { useEffect } from 'react'
import { Header } from '../../components/Header';
import { ButtonWrapper, Card } from '../../components/Card'
import { Button } from '../../components/Button';
import { NeedLogin } from '../../components/NeedLogin';
import { Route, useNavigate, useLocation} from "react-router-dom";
import {LotesInfo} from '../../components/LotesInfo';
import { Wrapper, Content , ListInfo, ButtonSettings} from './styles';
import { useState } from 'react';
import {AviarioService} from '../../services/api';
import {ButtonClass} from './buttonsActions';




const Home = () =>  {
  const navigate = useNavigate();
  const [lotes, setLotes] = useState([]);
  const location = useLocation();
  var token;
  try{
    token = location.state.token;
  }catch(err){
    navigate('/');
  }
  const api = new AviarioService('Lote',token);
  api.setBearear(token);
  useEffect(()=>{
    api.getLotes().then( data => setLotes(data)).catch();
  },[])
  
  const handleGoLogin = () => navigate('/');
  const handleListLotes = ()=> navigate('/list-lotes',  {state:{token}});
  const handleCreateLotes = ()=> navigate('/create-lotes',  {state:{token}});
  const handleUpdateLotes = () => navigate('/update-lotes');
  const handleListRefeicoes = ()=> navigate('/list-refeicoes',  {state:{token}});
  const handleCreateRefeicoes = ()=> navigate('/create-refeicoes',  {state:{token}});
  const handleListRacoes = ()=> navigate('/list-racoes');
  const handleCreateRacoes = ()=> navigate('/create-racoes');
  const handleUpdateRacoes = () => navigate('/update-racoes');
  const handleListVacinas = () => navigate('/list-vacinas');
  const handleCreateVacinas = () => navigate('/create-vacinas');
  return (
    <>
    {token.status ? (<NeedLogin goLogin={handleGoLogin}/>) : (
      <>
      <Header autenticado={true} token={token}/>
      <Content>
        <Wrapper>
            <Card title="Lotes" description="Gerencie seus lotes. Cadastre, Busque e Venda Animais." 
            buttons ={[new ButtonClass('Listar', handleListLotes), new ButtonClass('Cadastrar', handleCreateLotes),
            new ButtonClass('Update', handleUpdateLotes)]}/>
            <Card title="Refeições" description="Gerencie as refeições de seus lotes. Cadastre, Liste Todas as Refeições, e Liste as refeições de cada lote." 
            buttons={[new ButtonClass('Listar', handleListRefeicoes), new ButtonClass('Cadastrar', handleCreateRefeicoes)]}/>
            <Card title="Rações" description="Gerencie as rações de seus lotes. Cadastre, Liste, e Atualize as rações de seu Aviário." 
            buttons={[new ButtonClass('Listar', handleListRacoes), new ButtonClass('Cadastrar', handleCreateRacoes),
              new ButtonClass('Update', handleUpdateRacoes)]}/>
            <Card title="Medicação" description="Gerencie as medicações de seus lotes. Cadastre, Liste Todas as Medicações, e Liste por lotes." 
            buttons={[new ButtonClass('Listar', handleListVacinas), new ButtonClass('Cadastrar', handleCreateVacinas)]}/> 
          
        </Wrapper>
        <ListInfo>
          <h1>Lotes</h1>
          <ul>
            {lotes.map( (lote) => <LotesInfo lote={lote}  />)}
          </ul>
        </ListInfo>
      </Content>
      </>
        ) }
    </>
  )
}


export {Home}
