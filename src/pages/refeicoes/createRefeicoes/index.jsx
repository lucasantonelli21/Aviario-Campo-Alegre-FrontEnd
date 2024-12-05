import React, { useEffect, useState } from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
import { Route, useNavigate, useLocation} from "react-router-dom";
import { AviarioService } from '../../../services/api';
import { Header } from '../../../components/Header';
import { Input } from '../../../components/Input';
import {MdSearch} from 'react-icons/md';
import { useForm } from 'react-hook-form'
import {Content, Display, InputWrappers, ButtonForm} from './styles';
import { Button } from '../../../components/Button';




const CreateRefeicoes = () => {
    const location = useLocation();
    const token = location.state.token;
    const api = new AviarioService('Refeicao',token);
    const {control, handleSubmit, formState : {erros}} = useForm({
      reValidateMode: 'onChange',
      mode: 'onChange',
    });
    const onSubmit = async (formData) => {

       const status = await api.createRefeicao(formData);
       
      
    } 
  return(<>
    {token ? (<> 
        <Header autenticado={true} token={token}/>
        <Content>
          <Display>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrappers>
                      <h1>Cadastro de Refeição</h1>
                      <Input class='form-input' placeholder="Id da Racao" type='number' name="idRacao"  control={control} />
                      <Input class='form-input' type="number" placeholder="Numero do Lote"  name="idLote" control={control} />
                      <Input class='form-input' type="number" placeholder="Quantidade de Ração em kg"  name="quantidadeRacao" control={control} />
                      <Input class='form-input' type="date" placeholder="Data da Administração"  name="dataAdministracao" control={control} />
                      <ButtonForm class='form-button' type='submit'>Cadastrar</ButtonForm>      
                    </InputWrappers>
            </form>
          </Display>
        </Content>
    </>
  ): (<NeedLogin/>)}
  </>)
}

export {CreateRefeicoes};
