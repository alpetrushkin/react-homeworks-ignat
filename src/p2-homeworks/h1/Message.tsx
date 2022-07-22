import React from 'react'
import {TaskType} from "./HW1";
import s from './Message.module.css'



function Message(props:TaskType) {
   return (
      <div className={s.message}>
         <img className={s.avatar} src={props.avatar}/>
         <div className={s.dialogs}>
            <h5>{props.name}</h5>
            <span className={s.chat}>{props.message}</span>
            <span>{props.time}</span>
         </div>
      </div>
   )
}

export default Message
