const users = [
   {
      id: '1',
      nickName: 'blad666',
      avatar: 'https://playtrader.ru/upload/000/u3/4/5/9c65d642.png',
      fullName: 'Иванов Владислав Николаевич',
      age: 27,
      city: 'Ростов-на-Дону',
      tel: '88005553535',
   },
   {
      id: '2',
      nickName: 'trishka94_-_-',
      avatar: 'https://avatarko.ru/img/kartinka/17/igra_Lara_Croft_16388.jpg',
      fullName: 'Красина Ольга Владимировна',
      age: 12,
      city: 'Москва',
      tel: '89284250934',
   },
   {
      id: '3',
      nickName: '🂡_NAGIBATOR_🂡',
      avatar:
         'https://s.sakh.com/i/m/market/2020/09/15/ac380a3dc020345e33d84cfae83e2b06.jpeg',
      fullName: 'Феоктистов Артём Сергеевич',
      age: 47,
      city: 'Калифорния',
      tel: '89264432154',
   },
   {
      id: '4',
      nickName: 'ShAmAn_KiNg',
      avatar: 'https://длявк.рф/images/avatarki/games/igri2.jpg',
      fullName: 'Лагунова Алина Александровна',
      age: 21,
      city: 'Краснодар',
      tel: '89081235463',
   },
]

export function getUsers() {
   return users
}

export function getUser(id: string) {
   const result = users.find((user) => user.id === id)

   return result
}
