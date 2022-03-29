import styled from 'styled-components'

export const NotificationWrapper = styled.div`
   margin-top: 200px;
   display: flex;
   justify-content: center;
`

export const NotificationBlock = styled.div`
   border: 2px solid #22b8ee;
   border-radius: 5px;
   padding: 20px;
   background-color: rgba(0, 0, 0, 0.4);
   width: 400px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
`

export const NotificationText = styled.p`
   font-size: 24px;
   color: white;
   width: 300px;
`
