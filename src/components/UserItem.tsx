import { Link } from 'react-router-dom'
import { UserInterface } from '../interfaces/UserInterface'

const User = ({ user }: UserInterface) => {
   return (
      <div>
         <div>
            <img width="80" height="80" src={user.avatar} alt={user.nickName} />
         </div>
         <div>
            <span>{user.nickName}</span>
            <Link to={`/${user.id}`}>
               <button>Подробнее</button>
            </Link>
         </div>
      </div>
   )
}

export default User
