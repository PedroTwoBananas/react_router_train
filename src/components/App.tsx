import Navigation from './Navigation'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import UserInformationPage from './pages/UserInformationPage'
import { getUsers } from '../data/users'
import Private from './hoc/Private'
import NotificationPage from './pages/NotificationPage'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'

const App = () => {
   const users = getUsers()

   const [isAuth, setAuth] = useState(false)

   const authorise = () => {
      setAuth(true)
   }

   return (
      <div>
         <Routes>
            <Route path="/" element={<Navigation />}>
               <Route index element={<HomePage users={users} />}></Route>
               <Route path="/:id" element={<UserInformationPage />}></Route>
               <Route
                  path="notification"
                  element={
                     <Private isAuth={isAuth}>
                        <NotificationPage />
                     </Private>
                  }
               />
               <Route
                  path="login"
                  element={<LoginPage authorise={authorise} />}
               />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   )
}

export default App
