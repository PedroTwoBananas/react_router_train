import styled from 'styled-components'

export const UserItemBlock = styled.li`
   color: white;
   border: 2px solid #22B8EE;
   border-radius: 5px;
   background-color: rgba(0, 0, 0, 0.5);
   padding: 20px;
   margin-bottom: 10px;
   list-style: none;
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;
`
UserItemBlock.displayName = 'UserItemBlock'

export const UserItem = styled.div`
   font-family: Arial, Helvetica, sans-serif;
   display: flex;
   flex-direction: column;
   gap: 12px;
   align-items: center;
`
UserItem.displayName = 'UserItem'

export const UserImage = styled.img`
   width: 120px;
   height: 120px;
   border: 2px solid grey;
   border-radius: 5px;
`
UserImage.displayName = 'UserImage'

export const Button = styled.button`
   background-color: rgba(0, 0, 0, 0.5);
   width: 100px;
   height: 30px;
   border: 2px solid orange;
   color: white;
   cursor: pointer;
   &:hover {
      border: 1px solid white;
   }
`
