import { useEffect } from 'react'
import ChatCard from "../components/ui/Templates/profilePage/ChatCard"

import { useAuth } from '@/store/auth';

function ChatPage() {

    const {allChats,allChatFetchFunction,user} = useAuth();
    useEffect(()=>{
      allChatFetchFunction();
      window.scrollTo(0, 0);
    },[])
    

console.log(allChats)
const displayChats=allChats?.map((item,index)=>{
 
    const senderFirstname = item?.users?.map((item)=>{
      if(!(user?.firstname===item?.firstname)){
        return item?.firstname
      }
    });
        const recentMsg = item?.latestMessage?.content;
const id=item?._id;
console.log(item[0]);
    return(
<ChatCard key={index} name={senderFirstname} recentMsg={recentMsg} id={id} chat={item}></ChatCard>
    )
})
  return (
    <div className='p-[2rem] ml-14 flex flex-wrap gap-[1rem]'>
      {displayChats?displayChats:"Fetching Data"}
  
    </div>
  )
}

export default ChatPage