import { useParams } from "react-router-dom";
import { useAuth } from "@/store/auth";
import ChatCard from "../components/ui/Templates/profilePage/ChatCard";
import { useEffect } from "react";
import MessageCard from "../components/ui/Templates/profilePage/MessageCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import io from "socket.io-client";



function SinglePage() {
  const { allMessage, allMessageFetchFunction, setAllMessage } = useAuth();
  const { id } = useParams();

  

  useEffect(() => {
    allMessageFetchFunction(id);
  }, [id, setAllMessage]);
  console.log("all", allMessage);
  const displayChats = allMessage?.map((item, index) => {
    const content = item?.content;
    const name = item?.sender?.firstname;
    return (
      <div key={index} className="flex ">
        <p className="text-sm text-muted-foreground italic lowercase font-mono">
          {name} :
        </p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mb-2 ml-2">
          {content}
        </code>
      </div>
    );
  });

  

  return (
    <>
      <div className="p-[2rem] ml-14 flex flex-wrap gap-[1rem]">
        <ScrollArea className="h-[72vh] w-full rounded-md border flex flex-col gap-5">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Messages</h4>
            {displayChats}
          </div>
        </ScrollArea>

        <MessageCard></MessageCard>
      </div>
    </>
  );
}

export default SinglePage;
