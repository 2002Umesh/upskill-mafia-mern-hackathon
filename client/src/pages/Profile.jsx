import ConnectedMentors from "@/components/ui/Templates/profilePage/ConnectedMentors"
import ProfileCard from "@/components/ui/Templates/profilePage/ProfileCard"
import Sidebar from "@/components/ui/Templates/profilePage/Sidebar"
import CourseCard from "@/components/ui/Templates/mentorPage/CourseCard"
import ChatCard from "@/components/ui/Templates/profilePage/ChatCard"
import MessageCard from "@/components/ui/Templates/profilePage/MessageCard"

function Profile() {
    return (
        <>
           
            <div className="flex p-[6.4rem] gap-[2rem] flex-col">
                <div className="flex  gap-[2rem]">
                    <div className="sm:w-3/4 md:w-2/4">
                    <ProfileCard></ProfileCard>
                    </div>
               
                    <div className="w-1/4">
                        <ConnectedMentors></ConnectedMentors>
                    </div>
                    

                </div>
                
                <div className="flex flex-wrap gap-[1rem]">
                        
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                        <CourseCard></CourseCard>
                    </div>

            </div>

            

        </>
    )
}

export default Profile