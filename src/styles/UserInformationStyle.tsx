import styled from 'styled-components'

export const UserCardWrapper = styled.div`
   margin-top: 160px;
   display: flex;
   justify-content: center;
`

export const UserCard = styled.div`
   padding: 20px;
   display: flex;
   gap: 40px;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   border: 2px solid #22B8EE;
   border-radius: 5px;
   width: 800px;
   background-color: rgba(0, 0, 0, 0.5);
`
export const UserCardImage = styled.img`
   width: 300px;
   height: 300px;
   border: 2px solid grey;
`
export const UserCardInfo = styled.div`
   font-family: Arial, Helvetica, sans-serif;
   font-size: 20px;
   color: white;
   display: flex;
   flex-direction: column;
   gap: 10px;
`
