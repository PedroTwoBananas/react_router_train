import { Link } from 'react-router-dom'
import { UserInterface } from '../interfaces/UserInterface'
import { UserImage, UserItem, UserItemBlock, Button } from '../styles/UserItemStyle'

const User = ({ user }: UserInterface) => {
   return (
      <UserItemBlock>
         <UserItem>
            <UserImage src={user.avatar} alt={user.nickName} />
            <span>{user.nickName}</span>
            <Link to={`/${user.id}`}>
               <Button>Подробнее</Button>
            </Link>
         </UserItem>
      </UserItemBlock>
   )
}

export default User
