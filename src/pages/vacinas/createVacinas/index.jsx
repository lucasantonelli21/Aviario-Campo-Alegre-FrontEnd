import React from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
const CreateVacinas = (token) => {
  <>
    {token ? (<div></div>): (<NeedLogin/>)}
  </>
}

export {CreateVacinas};
