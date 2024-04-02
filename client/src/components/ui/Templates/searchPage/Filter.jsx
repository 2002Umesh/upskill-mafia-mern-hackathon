import {useEffect, useState } from "react";
import { Input } from "../../input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/store/auth";

function Filter() {
  const {course,setCourse, setFilteredMentors} = useAuth();
  const [search, setSearch] = useState("");
  const [isClose, setIsClose] = useState(true);
  const handleInput = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = async () => {
    
    try {
      const response = await fetch(
        `http://localhost:9000/api/searches?query=${search}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setCourse(data);
      setIsClose(false)
    } catch (error) {
      console.log("search error:-", error);
    }
  };
  const getMentors = async (courseName) => {
    try {
      const response = await fetch(
        `http://localhost:9000/api/search?query=${courseName}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setFilteredMentors(data);

      setIsClose(true);
     
    } catch (error) {
      console.log("search error:-", error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, [search]);

  return (

    <div className="flex flex-col md:flex-row py-[2rem] gap-2 sticky top-16 z-50 bg-opaque border-b-2">
      <div className="w-[100%] md:w-3/4 static ">
    
          <Input
            type="text"
            placeholder="Search"
            name="search"
            value={search}
            onChange={handleInput}
            autoComplete="off"
          />
          {
            !isClose&&search?<div className="absolute mt-2 z-10 "><ScrollArea className="h-[50vh] w-48 rounded-md border bg-opaque">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {course.length?
              course.map((item,index) => (
                <>
                  <div key={index} className="text-sm" onClick={()=>getMentors(item)}>
                    {item}
                  </div>
                  <Separator className="my-2" />
                </>
              )):<div className="text-sm text-muted-foreground" >
              not found
            </div>
            }
              
            </div>
          </ScrollArea></div>:""
          }
        

      </div>
      <Select className="w-[100%] md:w-1/4">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>sort by</SelectLabel>
            <SelectItem value="Popularity">Popularity</SelectItem>
            <SelectItem value="Rating">Rating</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Filter;
