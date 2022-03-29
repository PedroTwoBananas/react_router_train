import { Navigate, useLocation } from 'react-router-dom'

type Props = {
   children: JSX.Element
   isAuth: boolean
}

const Private = ({ children, isAuth }: Props) => {
   const location = useLocation()

   if (!isAuth) {
      return <Navigate to="/login" state={{ from: location }} />
   }

   return children
}

export default Private
