import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavSection = styled.nav`
   background-color: rgba(0, 0, 0, 0.3);
   height: 50px;
   padding: 20px;
   display: flex;
   flex-direction: row;
   gap: 30px;
   justify-content: space-between;
   align-items: center;
`
NavSection.displayName = 'NavSection'

export const NavBlock = styled.div`
   display: flex;
   gap: 20px;
`
export const NavLink = styled(Link)`
   padding: 10px;
   text-decoration: none;
   color: white;
   font-family: Georgia, serif;
   font-size: 20px;
   &:hover {
      border-bottom: 1px solid white;
   }
   &:focus {
      border-bottom: 1px solid orange;
   }
`
