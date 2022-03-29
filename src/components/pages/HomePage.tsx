import UserItem from '../UserItem'
import { UsersInterface } from '../../interfaces/UsersInterface'
import { List, UserListTitle, UserListWrapper } from '../../styles/ListStyle'

const HomePage = ({ users }: UsersInterface) => {
   return (
      <UserListWrapper>
         <UserListTitle>Наши Бравлеры</UserListTitle>
         <List>
            {users.map((user) => {
               return <UserItem user={user} key={user.id} />
            })}
         </List>
      </UserListWrapper>
   )
}

export default HomePage
