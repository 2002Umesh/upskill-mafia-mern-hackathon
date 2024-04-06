import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@/store/auth";
import { useState } from "react";
import MessageCard from "../components/ui/Templates/profilePage/MessageCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { io } from "socket.io-client";

const ENDPOINT ="https://upskill-mafia-mern-hackathon.vercel.app";

function SinglePage() {
  const { allMessage, allMessageFetchFunction, setAllMessage, selectedChat } = useAuth();
  const { id } = useParams();
  const { user } = useAuth();

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish socket connection when the component mounts
    const newSocket = io(ENDPOINT);
    newSocket.emit("setup", user._id);

    // Listen for "connect" event to set socketConnected state
    newSocket.on("connect", () => {
      setSocket(newSocket);
    });

    // Clean up socket connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, [user._id]); // Dependency array to prevent re-establishing socket on re-renders

  useEffect(() => {
    // Fetch all messages for the selected chat
    allMessageFetchFunction(id);
  }, [id, allMessageFetchFunction]);

  useEffect(() => {
    // Listen for "message received" event and update state with new message
    if (socket) {
      socket.on("message received", (data) => {
        setAllMessage((prevMessages) => [...prevMessages, data]);
      });
    }
  }, [socket, setAllMessage]);

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
