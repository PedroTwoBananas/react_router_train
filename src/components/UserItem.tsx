import { Link } from 'react-router-dom'
import { UserInterface } from '../interfaces/UserInterface'
import {
   UserImage,
   UserItem,
   UserItemBlock,
   Button,
} from '../styles/UserItemStyle'
import React from 'react'
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

export default React.memo(User)
