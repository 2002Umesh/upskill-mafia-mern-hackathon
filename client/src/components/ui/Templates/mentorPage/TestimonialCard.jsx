import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../card";

function UserCard({name,review}) {
  return (
    <Card className="w-[100%] md:w-[30rem]">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        {/* <CardDescription>{name}</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p className=" b-2 pl-6 italic">{`${review}`}</p>
      </CardContent>
    </Card>
  );
}

export default UserCard;
