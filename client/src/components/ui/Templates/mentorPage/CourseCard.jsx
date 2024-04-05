import { Button } from "../../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import { useAuth } from '@/store/auth';
import {useParams} from "react-router-dom"

function UserCard({ name, rating, desc, price }) {
  const {createChat} = useAuth();
  const {id}=useParams()
  return (
    <Card className=" w-[30rem]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{!(price==="free")?`Rating : ${rating}`:""}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
      {!(price==="free")?`Price : ${price}`:""}
      
   {price==="free"?
  <Button onClick={()=>createChat(id)}>Free</Button> :<Button disabled="true">Purchase</Button>
  }
       
      </CardFooter>
    </Card>
  );
}

export default UserCard;
