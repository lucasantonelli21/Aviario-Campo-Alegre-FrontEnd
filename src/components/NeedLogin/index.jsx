import React from 'react'
import { Header } from '../Header';
import {Button} from '../Button';
import { ContainerNeedLogin} from './styles';
import { Route, useNavigate, useLocation} from "react-router-dom";
const NeedLogin = ({goLogin}) => {
       return( <div>
          <Header />
          <ContainerNeedLogin>
            <h2>Você precisa se logar</h2>
            <Button onClick={goLogin} title="Login" variant='secondary'></Button>
          </ContainerNeedLogin>
        </div>);
}

export {NeedLogin};