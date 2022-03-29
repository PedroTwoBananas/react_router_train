import { NavLink, Outlet } from 'react-router-dom'
import { NavSection } from '../styles/NavigationStyle'

const Navigation = () => {
   return (
      <>
         <NavSection>
            <NavLink to="/">Главная</NavLink>
         </NavSection>
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default Navigation
