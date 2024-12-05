import React from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
const UpdateRacoes = (token) => {
  <>
    {token ? (<div></div>): (<NeedLogin/>)}
  </>
}

export {UpdateRacoes};
