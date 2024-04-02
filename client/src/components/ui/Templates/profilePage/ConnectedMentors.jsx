import { Avatar, AvatarFallback, AvatarImage } from "../../avatar"

function ConnectedMentors() {
  return (
    <div className="flex flex-col">
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      Mentors
    </h3>
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </div>
    
  )
}

export default ConnectedMentors