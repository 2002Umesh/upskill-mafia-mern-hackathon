import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
function UserCard() {
  return (
    <Card className="flex sm:w-100% md:w-[35rem]">
        <div className="">
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
        <div>
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