import { useEffect } from 'react'
import ChatCard from "../components/ui/Templates/profilePage/ChatCard"

import { useAuth } from '@/store/auth';
import Loader from '@/components/footer/Loader';

function ChatPage() {

    const {allChats,allChatFetchFunction,user,isLoad,setIsLoad} = useAuth();
    useEffect(()=>{
      setIsLoad(true);
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
    <>
    {
      isLoad?
      <div className='w-full h-screen flex justify-center align-middle'>
      <Loader/></div>:
   
    <div className='p-[2rem] ml-14 flex flex-wrap gap-[1rem]'>
      {displayChats.length>0?displayChats:"No chats"}
  
    </div> }
    </>
    
  )
}

export default ChatPage