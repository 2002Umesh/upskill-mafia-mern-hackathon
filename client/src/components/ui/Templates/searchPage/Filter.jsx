import { useEffect, useState } from "react";
import { Button } from "../../button";
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

function Filter() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [mentors, setMentors] = useState([]);
  const handleInput = (e) => {
    let value = e.target.value;
    setSearch(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:9000/api/searches?query=${search}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(results);
      setResults(data);
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
      console.log(results);
      setMentors(data);
    } catch (error) {
      console.log("search error:-", error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, [search]);
  console.log("mentors", mentors);
  console.log("mentors", results);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search"
            name="search"
            value={search}
            onChange={handleInput}
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
      <Select>
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
