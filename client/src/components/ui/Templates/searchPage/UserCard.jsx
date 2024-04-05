import { NavLink,useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar"
import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "../../card"
import { useAuth } from "@/store/auth"


function UserCard({title,rating,desc,courses,userEnrolled,id}) {
  const navigate=useNavigate();
  const coursesString =courses?.join(", ")
  // const {getSingleMentorData} = useAuth();
  return (

    <Card className="flex w-[100%] md:w-[35rem]" onClick={()=>navigate(`/mentor/${id}`)}>
      <div className="w-2/6 h-[100%] flex justify-center align-middle ">
        <Avatar className="w-20 h-20 my-auto">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-5/6">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription><span className="text-lg font-semibold">Rating : </span> {rating} ({userEnrolled})</CardDescription>
        </CardHeader>
        <CardContent>

   
          <p className="  italic">
            <b>Courses : </b>
       {coursesString}
    </p>
          <p>{desc}</p>
          
        </CardContent>
      </div>
    </Card>

    
  )
}

export default UserCard