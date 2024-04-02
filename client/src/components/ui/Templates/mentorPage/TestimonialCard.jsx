
import {
    Card,
    CardContent,
    CardDescription,
    

    
    CardHeader,

  } from "../../card"
  
function UserCard() {
  return (
    <Card className="w-[100%] md:w-[30rem]">
      
      
        <CardHeader>
    {/* <CardTitle>Card Title</CardTitle> */}
    <CardDescription>Card rating</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card description</p>
  </CardContent>
      
</Card>   
  )
}

export default UserCard