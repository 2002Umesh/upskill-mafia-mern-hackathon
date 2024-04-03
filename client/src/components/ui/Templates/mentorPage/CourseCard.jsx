import { Button } from "../../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";

function UserCard({ name, rating, desc, price }) {
  return (
    <Card className=" w-[30rem]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{rating}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
      <CardFooter>
        Service Price:- <p>{price}</p>
        <div className="flex gap-[1rem]">
        <Button>Purchase</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default UserCard;
