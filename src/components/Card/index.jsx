import React from 'react'
import {CardContainer, Content, HasInfo, PostInfo, ButtonSettings} from './styles';
import { Button } from '../Button';
import { FiThumbsUp } from 'react-icons/fi';
import { Route, useNavigate, useLocation} from "react-router-dom";
import { ButtonClass } from '../../pages/home/buttonsActions';
const Card = ({title,description,buttons}) => {
  return (
    <CardContainer>
            <Content> 
                <PostInfo>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </PostInfo>
                <ButtonSettings>
                  {buttons.map((button) => <Button title= {button.title} variant='secondary' onClick={button.goTo}/>)}
                </ButtonSettings>
            </Content>
    </CardContainer>
  )
}


export {Card};
