import React from 'react'
import { useEffect } from 'react'
import {Button} from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import {Container,Wrapper, TitleLogin, SubTitleLogin, Column} from './styles'
import {MdEmail, MdLock} from 'react-icons/md';
import {AviarioService} from '../../services/api'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { useState } from 'react'
const Login = () =>  {
  const api = new AviarioService('Administrador');
  const navigate = useNavigate();
  const {control, handleSubmit, formState : {erros}} = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });
  var token = null;

  useEffect(()=>{
    token = false;
  })
  
  const onSubmit = async (formData) => {
    token = await api.logar(formData);
    
    if(token !== null && token.status!== 401){
      navigate('/home', {state:{token}});
    }else{
      alert('Usuário não encontrado');
    }
  } 
  
  return (
    <>
      <Header/>
          <Container>
            <Column>
              <TitleLogin>Login</TitleLogin>
              <SubTitleLogin>Faça seu Login e Administre seu Negócio.</SubTitleLogin>
            </Column>
            <Wrapper>
              <Column>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                  <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" control={control} />
                  <Button title='Confirmar' variant='secundary' type='submit'/>
                </form>
              </Column>
            </Wrapper>
          </Container>
        
    </>
  )
}


export {Login}
