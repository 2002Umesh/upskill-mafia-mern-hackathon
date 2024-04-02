import { Button } from "../../button"
import { Input } from "../../input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "../../select"

function Filter() {
  return (
      <div className="flex w-full justify-between gap-[2rem] my-[2rem]">
        <div className="flex w-3/4 gap-[1rem]">
       
        <Input type="email" placeholder="Search" />
      <Button type="submit">Subscribe</Button>
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
  )
}

export default Filter