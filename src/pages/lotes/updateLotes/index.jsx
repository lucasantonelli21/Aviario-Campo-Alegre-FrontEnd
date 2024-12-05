import React from 'react'
import { NeedLogin } from '../../../components/NeedLogin';
const UpdateLotes = (token) => {
  <>
    {token ? (<div></div>): (<NeedLogin/>)}
  </>
}

export {UpdateLotes};
