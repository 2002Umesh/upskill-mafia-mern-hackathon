import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import TestimonialCard from "@/components/ui/Templates/mentorPage/TestimonialCard"
import Footer from "@/components/footer/Footer"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="min-w-full min-h-full">
            <div className="w-full h-screen flex flex-col-reverse md:flex-row">
                <div className="flex flex-col justify-center align-middle w-[100%] h-2/4 md:h-[100%] md:w-3/5 p-[4rem] gap-[2rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Unlock Potential, Transform Futures: Mentorship Awaits
                    </h1>
                    <div className="flex gap-[1rem]">
                      <Link to="/search">
                      <Button>Get started</Button>
                      </Link>
                        
                        {/* <Button variant="outline">Get started</Button> */}
                    </div>

                </div>
                <div className="flex justify-center align-middle w-[100%] h-2/4 md:h-[100%] md:w-2/5 p-[1rem]">
<div className="w-full h-full bg-hero-image bg-cover"></div>
{/* <Carousal></Carousal> */}
                </div>
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-[6.4rem] text-center px-2 md:px-[6.4rem]">
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
<div className="p-[2rem] w-full md:w-[80vw] flex justify-center flex-col m-auto">
<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-[6.4rem] px-2 md:px-[6.4rem]">
Empowering Success: Hear From Our Users!
    </h1>
    <div className="flex mx-auto mb-[4rem] flex-wrap justify-around gap-[2rem] w-full">
    <TestimonialCard name={"Rachel Green"} review={"I can't thank Error 404 enough for their virtual mentorship program. It has tremendously improved my coding skills and confidence. The personalized guidance and support I received helped me tackle complex projects with ease. Highly recommended!"} >
    </TestimonialCard>
    <TestimonialCard name={"Sarah Parker"} review={"Error 404's virtual mentorship program has been a game-changer for me. The mentorship sessions were tailored to my specific needs, helping me navigate challenges and refine my career goals. With their guidance, I was able to land my dream job in data science. I'm grateful for the support and encouragement I received throughout the journey."}></TestimonialCard>
    <TestimonialCard name={"Michael Brown"} review={"I had been struggling to transition into a leadership role in my company. Error 404's virtual mentorship program provided me with invaluable leadership insights and strategies. The mentorship sessions helped me hone my communication skills and foster stronger relationships with my team members. Thanks to Error 404, I now feel equipped to lead with confidence."}></TestimonialCard>
    <TestimonialCard name={"John Smith"} review={"As a newcomer to the tech industry, I was overwhelmed by the vast amount of information. Error 404's virtual mentorship provided me with invaluable insights and advice. Through their mentorship program, I gained practical skills and industry knowledge that accelerated my career growth. Thank you, Error 404!"}></TestimonialCard>
    </div>
    
</div>
<Footer/>
        </div>

    )
}

export default Home