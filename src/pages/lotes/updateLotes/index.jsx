import React, { useEffect, useState } from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
import { Route, useNavigate, useLocation} from "react-router-dom";
import { AviarioService } from '../../../services/api';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import { useForm } from 'react-hook-form';
import {CPFInput} from '../../../components/CPFInput';
import {Content, NavBox,ContentBox, NavButtonBox ,Display, InputWrappers, ButtonForm} from './styles';
import { Button } from '../../../components/Button';


//TODO:TRATAMENTO DE ERROS
const UpdateLotes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = location.state.token;
  const api = new AviarioService('Lote',token);
  api.setBearear(token);
  const [showFormVendaUnit, setShowFormVendaUnit] = useState(false);
  const handleShowVendaUnit = () => {setShowFormVendaUnit(true);
    setShowFormConsumo(false);
    setShowFormDeath(false);
  }
  const onSubmitVenda = async (formData) => { 
    var response =  await api.updateVenda(formData);
    navigate('/list-lotes', {state:{token}});
  }
  const [showFormDeath, setShowFormDeath] = useState(false);
  const handleShowDeath = () =>{
    setShowFormDeath(true);
    setShowFormConsumo(false);
    setShowFormVendaUnit(false);

  } 
  const onSubmitDeath = async (formData) => { 
    var response =  await api.updateDeath(formData);
    navigate('/list-lotes', {state:{token}});
  }
  const [showFormConsumo, setShowFormConsumo] = useState(false);
  const handleShowConsumo = () => {
    setShowFormConsumo(true);
    setShowFormDeath(false);
    setShowFormVendaUnit(false);
  }
  const onSubmitConsumo = async (formData) => { 
    var response =  await api.updateConsumo(formData);
    console.log(response);
    navigate('/list-lotes', {state:{token}});
  }
  const {control, handleSubmit, formState : {erros}} = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
      });
  




  const ClearFormBox = () => {
    return (
      <Content>
                <ContentBox>
                  <NavBox>
                    <NavButtonBox onClick={handleShowVendaUnit}>Venda Unidade</NavButtonBox>
                    <NavButtonBox onClick={handleShowDeath}>Morte</NavButtonBox>
                    <NavButtonBox onClick={handleShowConsumo}>Consumo</NavButtonBox>
                  </NavBox>
                </ContentBox>
      </Content>
    )
  }

  const formVendaUnit = () => {
    return(<Content>
      <ContentBox>
        <NavBox>
          <NavButtonBox onClick={handleShowVendaUnit}>Venda Unidade</NavButtonBox>
          <NavButtonBox onClick={handleShowDeath}>Morte</NavButtonBox>
          <NavButtonBox onClick={handleShowConsumo}>Consumo</NavButtonBox>
        </NavBox>
        <form onSubmit={handleSubmit(onSubmitVenda)}>
          <InputWrappers>
          <h2>Atualizar Unidades de Venda</h2>
          <Input class='form-input' placeholder="IdLote" type='number' name="idLote"  control={control} />
          <Input class='form-input' placeholder="Quantidade Vendas" type='number' name="quantidade"  control={control} />
          <Input class='form-input' placeholder="Valor da Venda" type='number' step="0.01" min="0" name="valorVenda"  control={control} />
          <Input class='form-input' placeholder="Data de Venda" type='date' name="dataVenda"  control={control} />
          <Input class='form-input' type="text" placeholder="Nome do Comprador"  name="nomeComprador" control={control} />
          <Input class= 'form-input' type="text" name='cpfComprador' control={control}/>
          <ButtonForm class='form-button' type='submit'>Cadastrar</ButtonForm>      
          </InputWrappers>
        </form>
      </ContentBox>
  </Content>)
}

  const formDeath = () =>{
    return(<Content>
      <ContentBox>
        <NavBox>
          <NavButtonBox onClick={handleShowVendaUnit}>Venda Unidade</NavButtonBox>
          <NavButtonBox onClick={handleShowDeath}>Morte</NavButtonBox>
          <NavButtonBox onClick={handleShowConsumo}>Consumo</NavButtonBox>
        </NavBox>
        <form onSubmit={handleSubmit(onSubmitDeath)}>
          <InputWrappers>
          <h2>Adicionar Mortalidade</h2>
          <Input class='form-input' placeholder="IdLote" type='number' name="idLote"  control={control} />
          <Input class='form-input' placeholder="Quantidade de Mortos" type='number' name="qntdMortos"  control={control} />
          <ButtonForm class='form-button' type='submit'>Cadastrar</ButtonForm>      
          </InputWrappers>
        </form>
      </ContentBox>
    </Content>)
  }

  const formConsumo = () =>{
    return(<Content>
      <ContentBox>
        <NavBox>
          <NavButtonBox onClick={handleShowVendaUnit}>Venda Unidade</NavButtonBox>
          <NavButtonBox onClick={handleShowDeath}>Morte</NavButtonBox>
          <NavButtonBox onClick={handleShowConsumo}>Consumo</NavButtonBox>
        </NavBox>
        <form onSubmit={handleSubmit(onSubmitConsumo)}>
          <InputWrappers>
          <h2>Adicionar Consumo</h2>
          <Input class='form-input' placeholder="IdLote" type='number' name="idLote"  control={control} />
          <Input class='form-input' placeholder="Quantidade de Consumidos" type='number' name="qntdConsumo"  control={control} />
          <ButtonForm class='form-button' type='submit'>Cadastrar</ButtonForm>      
          </InputWrappers>
        </form>
      </ContentBox>
    </Content>)
  }

  const renderForm = () => {
    if (showFormVendaUnit) return formVendaUnit()
    if (showFormDeath) return formDeath()
    if (showFormConsumo) return formConsumo()
    return ClearFormBox()
  }

  return(<>
     {token ? (<>
        <Header autenticado={true} token={token}/>
          {showFormVendaUnit  || showFormDeath || showFormConsumo? 
          (renderForm()): (ClearFormBox())}
      </>): (<NeedLogin/>)}
    </>)
}

export {UpdateLotes};



