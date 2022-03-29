import UserItem from '../UserItem'
import { UsersInterface } from '../../interfaces/UsersInterface'

const HomePage = ({ users }: UsersInterface) => {
   return (
      <ul>
         {users.map((user) => {
            return <UserItem user={user} key={user.id} />
         })}
      </ul>
   )
}

export default HomePage
