import React from 'react'
import HW1, {TaskType} from '../../../p2-homeworks/h1/HW1'
import s from './App.module.css'

function App() {
   const messageData: Array<TaskType> = [
      {
         avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
         name: 'Artem',
         message: 'npm start нажимал?',
         time: '20:00'
      },
   ]

   return (
      <div className={s.app}>
         <div>react homeworks:</div>
         <HW1 messageData={messageData}/>

         {/*<HW2/>*/}
         {/*<HW3/>*/}
         {/*<HW4/>*/}
         {/*<HW5/>*/}

      </div>
   )
}

export default App
