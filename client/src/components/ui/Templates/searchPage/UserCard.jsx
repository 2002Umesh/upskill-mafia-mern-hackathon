import { Avatar, AvatarFallback, AvatarImage } from "../../avatar"
import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "../../card"

function UserCard() {
  return (
    <Card className="flex sm:w-[100%] md:w-[35rem]">
      <div className="w-2/6 h-[100%] flex justify-center align-middle  bg-slte-500">
        <Avatar className="w-[8rem] h-[8rem] my-auto ">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-4/6">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card rating</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card description</p>
        </CardContent>
      </div>
    </Card>
  )
}

export default UserCard