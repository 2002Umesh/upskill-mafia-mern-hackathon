import React, { useEffect, useState } from 'react'
import ChatCard from "../components/ui/Templates/profilePage/ChatCard"

import { useAuth } from '@/store/auth';

function ChatPage() {

    const {allChats} = useAuth();
    

console.log(allChats)
const displayChats=allChats?.map((item,index)=>{
 
    const senderFirstname = item?.users[0]?.name;
        const recentMsg = item?.latestMessage?.content;
const id=item?._id
    return(
<ChatCard key={index} name={senderFirstname} recentMsg={recentMsg} id={id}></ChatCard>
    )
})
  return (
    <div className='p-[2rem] ml-14 flex flex-wrap gap-[1rem]'>
      {displayChats}
  
    </div>
  )
}

export default ChatPage