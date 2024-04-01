
import {
    Card,
    CardContent,
    CardDescription,
    
    CardFooter,
    
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
function UserCard() {
  return (
    <Card className=" sm:w-100% md:w-[35rem]">
      
      
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