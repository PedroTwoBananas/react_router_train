import {
   NotificationWrapper,
   NotificationText,
   NotificationBlock,
} from '../../styles/NotificationPageStyle'
import React from 'react'

const NotificationPage = () => {
   return (
      <NotificationWrapper>
         <NotificationBlock>
            <NotificationText>
               Привет, на этом сайте находятся самые крутые браулеры из школы №7
               и ты среди них!
            </NotificationText>
            <NotificationText>
               Если ты рак и/или нуб, то мы научим тебя тащить катки
            </NotificationText>
         </NotificationBlock>
      </NotificationWrapper>
   )
}

export default React.memo(NotificationPage)
