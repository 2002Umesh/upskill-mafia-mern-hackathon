import{ useState } from 'react';
import { Button } from "../../button"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from '@/store/auth';
import { useParams } from 'react-router-dom';

function MessageCard() {
  const { sendMessage } = useAuth();
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const click = () => {
    sendMessage(id, message);
    // Implement the logic to send the message
    console.log("Sending message:", message);
    // Clear the textarea after sending the message
    setMessage("");
  };

  return (
    <div className="w-full">
      <div className="flex gap-2  flex-col">
        <Textarea
          placeholder="Type your message here."
          value={message}
          onChange={handleMessageChange}
        />
        <Button disabled={message ? false : true} onClick={() => click()}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default MessageCard;
