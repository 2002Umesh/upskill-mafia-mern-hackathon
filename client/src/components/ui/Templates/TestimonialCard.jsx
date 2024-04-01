
import {
    Card,
    CardContent,
    CardDescription,
    

    
    CardHeader,

  } from "@/components/ui/card"
  
function UserCard() {
  return (
    <Card className=" sm:w-100% md:w-[35rem]">
      
      
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