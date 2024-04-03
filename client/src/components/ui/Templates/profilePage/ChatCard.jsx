import {
    Card,
    
    CardDescription,

    CardFooter,

    CardHeader,
    CardTitle,
  } from "../../card"

  import { useNavigate } from "react-router-dom";

function ProfileCard({name,recentMsg,id}) {

  const navigate=useNavigate();
  return (
 
 <Card onClick={()=>navigate(`/profile/chat/${id}`)} className="w-[100%] md:w-[20rem]">
                  <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>
                      {recentMsg}
                    </CardDescription>
                  </CardHeader>
            
                </Card>

   
  )
}

export default ProfileCard