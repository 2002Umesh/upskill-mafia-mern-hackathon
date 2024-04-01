import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import CourseCard from '@/components/ui/Templates/CourseCard'
import TestimonialCard from '@/components/ui/Templates/TestimonialCard'

function MentorPage() {
  return (
    <div>
        <div>
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
        <div>
            <div>
            <CourseCard></CourseCard>
            </div>
            <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      The Joke Tax
    </h3>
    <Card className="w-[15rem] aspect-square">Ratings</Card>
    <Card className="w-[15rem] aspect-square">testimonial</Card>
            </div>
            <div>
                <TestimonialCard></TestimonialCard>
            </div>
        </div>
    </div>
  )
}

export default MentorPage