import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import TestimonialCard from "@/components/ui/Templates/mentorPage/TestimonialCard"

function Home() {
    return (
        <div className="min-w-full min-h-full">
            <div className="w-full h-screen flex flex-col-reverse md:flex-row">
                <div className="flex flex-col justify-center align-middle w-[100%] h-2/4 md:h-[100%] md:w-3/5 p-[4rem] gap-[2rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Taxing Laughter: The Joke Tax Chronicles
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
            <div className="p-[2rem] w-full md:w-[40vw] flex mx-auto my-[6.4rem]">
            <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
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
        </div>

    )
}

export default Home