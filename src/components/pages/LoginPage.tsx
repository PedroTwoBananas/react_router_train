import { useLocation, useNavigate } from 'react-router-dom'
import {
   LoginWrapper,
   LoginBlock,
   LoginTitle,
   LoginButton,
} from '../../styles/LoginPageStyle'
import React from 'react'
type authoriseProps = {
   authorise: () => void
}

type LocationState = {
   from: {
      pathname: string
   }
}

const LoginPage = ({ authorise }: authoriseProps) => {
   const navigate = useNavigate()
   const location = useLocation()

   const { from } = location.state as LocationState

   const goToNotificationPage = () => {
      authorise()
      navigate(from.pathname)
   }

   return (
      <LoginWrapper>
         <LoginBlock>
            <LoginTitle>Нажмите кнопку для входа</LoginTitle>
            <LoginButton onClick={goToNotificationPage}>Войти</LoginButton>
         </LoginBlock>
      </LoginWrapper>
   )
}

export default React.memo(LoginPage)
