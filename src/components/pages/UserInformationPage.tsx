import { useParams } from 'react-router-dom'
import { getUser } from '../../data/users'
import { Navigate } from 'react-router-dom'

const UserInformationPage = () => {
   const { id } = useParams() as { id: string }

   const user = getUser(id)

   if (!user) return <Navigate to="*" />

   return (
      <div>
         <div>
            <img
               width="160"
               height="160"
               src={user.avatar}
               alt={user.nickName}
            />
         </div>
         <span>{user.nickName}</span>
         <span>{user.fullName}</span>
         <span>{user.age}</span>
         <span>{user.city}</span>
         <span>{user.tel}</span>
      </div>
   )
}

export default UserInformationPage
