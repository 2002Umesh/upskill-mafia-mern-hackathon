
import {
    Card,
    CardContent,
    CardDescription,
    
    CardFooter,
    
    CardHeader,
    CardTitle,
  } from "../../card"
  
function UserCard() {
  return (
    <Card className=" w-[30rem]">
      
      
        <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card rating</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card description</p>
  </CardContent>
      <CardFooter>
      <p>Card price</p>
      </CardFooter>
</Card>   
  )
}

export default UserCard