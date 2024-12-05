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




const CreateLotes = () => {
    const location = useLocation();
    const token = location.state.token;
    const api = new AviarioService('Lote',token);
    const {control, handleSubmit, formState : {erros}} = useForm({
      reValidateMode: 'onChange',
      mode: 'onChange',
    });
    const onSubmit = async (formData) => {
       const status = await api.createLote(formData);
      
    } 
  return(<>
    {token ? (<> 
        <Header autenticado={true} token={token}/>
        <Content>
          <Display>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrappers>
                      <h1>Cadastro de Lotes</h1>
                      <Input class='form-input' placeholder="Data de Entrada" type='date' name="dataEntrada"  control={control} />
                      <Input class='form-input' type="number" placeholder="Quantidade de Animais"  name="quantidadeAnimais" control={control} />
                      <Input class='form-input' type="text" placeholder="Linhagem"  name="linhagem" control={control} />
                      <Input class='form-input' type="text" placeholder="Aviário de Origem"  name="aviarioOrigem" control={control} />
                      <Input class='form-input' type="number" placeholder="Preço do Lote"  name="precoLote" control={control} />
                      <ButtonForm class='form-button' type='submit'>Cadastrar</ButtonForm>      
                    </InputWrappers>
            </form>
          </Display>
        </Content>
    </>
  ): (<NeedLogin/>)}
  </>)
}

export {CreateLotes};
