import React from 'react'
import {
  Container,
  Row,
  Wrapper,
  Title,
  Button
} from './styles';

import { MdSearch } from 'react-icons/md';
import { Route, useNavigate, useLocation} from "react-router-dom";
const Header = ({autenticado,token}) => {
  const navigate = useNavigate();
  const handleGoHome = () => navigate('/home',{state:{token}})
  return (
      <Wrapper>
        <Container>
          {autenticado ? (
            <>
              <Title>Bem-Vindo Administrador</Title>
            </>
          ) : (
            <h1>Bem-Vindo ao Aviário Manager</h1>
          )}
        </Container>
          {autenticado ? (<Button onClick={handleGoHome}>Home</Button>):(<>
          </>)}
      </Wrapper>
  )
}

export {Header};
