import ConnectedMentors from "@/components/ui/Templates/profilePage/ConnectedMentors"
import ProfileCard from "@/components/ui/Templates/profilePage/ProfileCard"
import Sidebar from "@/components/ui/Templates/profilePage/Sidebar"
import CourseCard from "@/components/ui/Templates/mentorPage/CourseCard"
import ChatCard from "@/components/ui/Templates/profilePage/ChatCard"
import MessageCard from "@/components/ui/Templates/profilePage/MessageCard"
import { useAuth } from '@/store/auth';
import { useEffect } from "react"

function Profile() {

    const { allChats, allChatFetchFunction } = useAuth();
    useEffect(() => {
        allChatFetchFunction();
    }, [])
    const firstData = allChats[0]?.users[0];
    console.log(allChats)
    const allMentors = allChats?.map((item, index) => {
        return (
            <ConnectedMentors key={index} id={item?.users[1]?._id} name={item?.users[1]?.firstname}></ConnectedMentors>
        )
    })
    return (
        <>

            <div className="flex p-[2rem] gap-[2rem] flex-col ml-12">
                <div className="flex flex-col md:flex-row gap-[2rem]">
                    <div className="w-[100%] md:w-2/4">
                        <ProfileCard name={firstData?.firstname} email={firstData?.email}></ProfileCard>
                    </div>
{!(firstData?.isMentor)?<div className="w-[100%] flex-col gap-2 ">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                            Mentors
                        </h3>
                        <div className="flex gap-[2rem] flex-wrap">
                        {allMentors}
                        </div>
                        
                    </div>:""}
                    


                </div>

                <div className="flex flex-wrap gap-[1rem]">


                </div>

            </div>



        </>
    )
}

export default Profile