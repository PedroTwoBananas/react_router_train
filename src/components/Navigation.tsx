import { Outlet } from 'react-router-dom'
import { NavSection, NavBlock, NavLink } from '../styles/NavigationStyle'
import React from 'react'

const Navigation = () => {
   return (
      <>
         <NavSection>
            <NavBlock>
               <NavLink to="/">Главная</NavLink>
               <NavLink to="/notification">Уведомление</NavLink>
            </NavBlock>
            <img
               height="60"
               width="80"
               src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Brawl_Stars.png/640px-Brawl_Stars.png"
               alt=""
            />
         </NavSection>
         <main>
            <Outlet />
         </main>
      </>
   )
}

export default React.memo(Navigation)
