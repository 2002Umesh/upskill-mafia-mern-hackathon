import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import CourseCard from "../components/ui/Templates/mentorPage/CourseCard"
import TestimonialCard from '@/components/ui/Templates/mentorPage/TestimonialCard'

function MentorPage() {
  return (
    <div className="p-[2rem] flex flex-col md:flex-row gap-[2rem]">
      <div className="sm:w-[100%] md:w-1/4 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Mentor name
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the error of
          his ways and repealed the joke tax.
        </p>
      </div>
      <div className="w-[100%] md:w-3/4 gap-[2rem] flex flex-col ">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Courses
        </h3>
        <div className="flex flex-wrap gap-[2rem] ">
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
          <CourseCard></CourseCard>
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Ratings
          </h3>

          
          <div className="flex gap-[2rem]">
            <Card className="w-[15rem] aspect-square">Ratings</Card>
            <Card className="w-[15rem] aspect-square">testimonial</Card>
          </div>

        <div className="flex flex-wrap gap-[2rem]">
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
          <TestimonialCard></TestimonialCard>
        </div>
      </div>
    </div>
  )
}

export default MentorPage