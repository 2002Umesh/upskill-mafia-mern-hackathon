import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import CourseCard from "../components/ui/Templates/mentorPage/CourseCard";
import TestimonialCard from "@/components/ui/Templates/mentorPage/TestimonialCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MentorPage() {
  const [data, setData] = useState([]);
  const ENDPOINT ="https://upskill-mafia-mern-hackathon.vercel.app";
  const params = useParams();

  const getSingleMentorData = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/ment/${params.id}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
  };

  const interactionsData = [
    {
      name: "Free Chat",

      description:
        "Chloe provided excellent feedback during the resume review session. Her suggestions were invaluable.",
      price: "free",
    },
    {
      name: "Resume review",
      rating: 4.9,
      description:
        "Chloe provided excellent feedback during the resume review session. Her suggestions were invaluable.",
      price: 50,
    },
    {
      name: "1 to 1 mock interaction",
      rating: 4.9,
      description:
        "The 1 to 1 mock interaction session with Chloe was fantastic. She provided actionable advice to improve my dancing skills.",
      price: 75,
    },
    {
      name: "Interview preparation package",
      rating: 4.8,
      description:
        "The interview preparation package with Chloe was incredibly helpful. Her insights into dance auditions were spot on.",
      price: 100,
    },
  ];


  useEffect(() => {
    getSingleMentorData();
  }, []);

  return (
    <>
      {data.length > 0 && (
        <div className="w-full p-[2rem] flex flex-col md:flex-row gap-[2rem] mt-12 ">
          <div className="w-[100%] md:w-1/4 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {data[0].firstname}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {data[0].description}
            </p>
          </div>
          <div className="w-[100%] md:w-3/4 gap-[2rem] flex flex-col ">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Courses
            </h3>
            <div className="flex flex-wrap flex-col gap-[2rem] ">
              {interactionsData.map((item, index) => {
                return (
                  <CourseCard
                    key={index}
                    name={item.name}
                    rating={item.rating}
                    desc={item.description}
                    price={item.price}
                  ></CourseCard>
                );
              })}
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Ratings
            </h3>

            <div className="flex gap-[2rem] ">
              <Card className="w-[15rem] aspect-square flex flex-col justify-center align-middle text-center">
              <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {data[0].rating}({data[0].userEnrolled})
    </h2>
                <div>Ratings</div> 
              </Card>
              <Card className="w-[15rem] aspect-square flex flex-col justify-center align-middle text-center">
              <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              {data[0].testimonials.length}
    </h2>
          
                <div>testimonial</div> 
                
              </Card>
            </div>

            <div className="flex flex-wrap gap-[2rem]">
              {data[0].testimonials.map((item, index) => {
                // Access properties of the item object
                return (
                  <TestimonialCard
                    key={index}
                    name={item.name} // Assuming name is a property of the item object
                    review={item.review} // Assuming review is a property of the item object
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MentorPage;
