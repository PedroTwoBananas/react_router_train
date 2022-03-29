import Navigation from './Navigation'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import UserInformationPage from './pages/UserInformationPage'
import { getUsers } from '../data/users'

const App = () => {
   const users = getUsers()

   return (
      <div>
         <Routes>
            <Route path="/" element={<Navigation />}>
               <Route index element={<HomePage users={users} />}></Route>
               <Route path="/:id" element={<UserInformationPage />}></Route>
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   )
}

export default App
