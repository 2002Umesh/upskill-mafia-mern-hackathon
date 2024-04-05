import { Avatar, AvatarFallback, AvatarImage } from "../../avatar"
import {useNavigate} from "react-router-dom"

function ConnectedMentors({id,name}) {
  const naviagte=useNavigate()
  return (
    <div className="flex flex-col justify-center align-middle" onClick={()=>naviagte(`/mentor/${id}`)}>
   
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<p className="leading-7 ">
      {name}
    </p>
    </div>
    
  )
}

export default ConnectedMentors