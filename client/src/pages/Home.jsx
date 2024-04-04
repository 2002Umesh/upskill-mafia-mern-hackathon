import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import TestimonialCard from "@/components/ui/Templates/mentorPage/TestimonialCard"
import Footer from "@/components/footer/Footer"

function Home() {
    return (
        <div className="min-w-full min-h-full">
            <div className="w-full h-screen flex flex-col-reverse md:flex-row">
                <div className="flex flex-col justify-center align-middle w-[100%] h-2/4 md:h-[100%] md:w-3/5 p-[4rem] gap-[2rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Unlock Potential, Transform Futures: Mentorship Awaits
                    </h1>
                    <div className="flex gap-[1rem]">
                        <Button>Get started</Button>
                        <Button variant="outline">Get started</Button>
                    </div>

                </div>
                <div className="flex justify-center align-middle w-[100%] h-2/4 md:h-[100%] md:w-2/5 p-[1rem]">
<div className="w-full h-full bg-hero-image bg-cover"></div>
                </div>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mt-6">
            Tailored Mentorship for Your Growth
            </h1>
            
            <div className="p-[2rem] w-full md:w-[40vw] flex mx-auto my-[6.4rem]">
            
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Offer 1:1 sessions</AccordionTrigger>
        <AccordionContent>
        Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Setup Priority DM in seconds</AccordionTrigger>
        <AccordionContent>
        Let your followers ask text based Priority DM. Then answer as per your convenience
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Bundle your services</AccordionTrigger>
        <AccordionContent>
        Create packages of all your services. Perfect for high-ticket and long term engagements
        </AccordionContent>
      </AccordionItem>
    </Accordion>
            </div>
<div className="p-[2rem] w-full md:w-[80vw] flex mx-auto my-[6.4rem] flex-wrap justify-around gap-[2rem]">
    <TestimonialCard></TestimonialCard>
    <TestimonialCard></TestimonialCard>
    <TestimonialCard></TestimonialCard>
    <TestimonialCard></TestimonialCard>
</div>
<Footer/>
        </div>

    )
}

export default Home