import { NotificationWrapper, NotificationText, NotificationBlock } from "../../styles/NotificationPageStyle"

const NotificationPage = () => {
   return (
      <NotificationWrapper>
         <NotificationBlock>
            <NotificationText>
               Привет, на этом сайте находятся самые крутые браулеры из школы №7
               и ты среди них!
            </NotificationText>
            <NotificationText>
               Если ты рак и/или нуб, то УХАДИ!
            </NotificationText>
         </NotificationBlock>
      </NotificationWrapper>
   )
}

export default NotificationPage
