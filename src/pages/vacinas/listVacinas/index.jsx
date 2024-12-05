import React from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
const ListVacinas = (token) => {
  <>
    {token ? (<div></div>): (<NeedLogin/>)}
  </>
}

export {ListVacinas};
