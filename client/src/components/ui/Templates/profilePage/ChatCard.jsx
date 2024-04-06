import { useAuth } from "@/store/auth";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";

import { useNavigate } from "react-router-dom";

function ChatCard({ name, recentMsg, id, chat }) {
  console.log("chat",chat)
  const { setSelectedchat } = useAuth();
  const navigate = useNavigate();
  function click(item){
    console.log("sle",item)
    setSelectedchat(item);
    navigate(`/profile/chat/${id}`)
  }
  return (
    <Card
      onClick={() => click(chat)}
      className="w-[100%] md:w-[20rem]"
    >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{recentMsg}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ChatCard;
