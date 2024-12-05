import React from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
const ListRacoes = (token) => {
  <>
    {token ? (<div></div>): (<NeedLogin/>)}
  </>
}

export {ListRacoes};
