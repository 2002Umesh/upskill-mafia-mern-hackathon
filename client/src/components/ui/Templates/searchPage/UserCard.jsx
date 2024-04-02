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
    <Card className="flex w-[100%] md:w-[35rem]">
      <div className="w-2/6 h-[100%] flex justify-center align-middle ">
        <Avatar className="w-20 h-20 my-auto ">
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