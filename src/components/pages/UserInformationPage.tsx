import { useParams } from 'react-router-dom'
import { getUser } from '../../data/users'
import { Navigate } from 'react-router-dom'
import {
   UserCardWrapper,
   UserCard,
   UserCardImage,
   UserCardInfo,
} from '../../styles/UserInformationStyle'

const UserInformationPage = () => {
   const { id } = useParams() as { id: string }

   const user = getUser(id)

   if (!user) return <Navigate to="*" />

   return (
      <UserCardWrapper>
         <UserCard>
            <div>
               <UserCardImage src={user.avatar} alt={user.nickName} />
            </div>
            <UserCardInfo>
               <span>{user.nickName}</span>
               <span>ФИО: {user.fullName}</span>
               <span>Возраст: {user.age}</span>
               <span>Город: {user.city}</span>
               <span>Телефон: {user.tel}</span>
            </UserCardInfo>
         </UserCard>
      </UserCardWrapper>
   )
}

export default UserInformationPage
