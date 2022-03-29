import { useLocation, useNavigate } from 'react-router-dom'

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
      <div>
         <h2>Нажмите кнопку для входа</h2>
         <button onClick={goToNotificationPage}>Войти</button>
      </div>
   )
}

export default LoginPage
