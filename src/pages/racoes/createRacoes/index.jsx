import React from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
const CreateRacoes = (token) => {
  <>
    {token ? (<div></div>): (<NeedLogin/>)}
  </>
}

export {CreateRacoes};
