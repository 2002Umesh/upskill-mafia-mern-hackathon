import Filter from '@/components/ui/Templates/searchPage/Filter'
import UserCard from '@/components/ui/Templates/searchPage/UserCard'
import { useAuth } from '@/store/auth';
import { useEffect } from 'react';

function Search() {
  const {filteredMentors,getMentors} = useAuth();
  useEffect(()=>{
    getMentors();
    window.scrollTo(0, 0);
  },[])
  console.log(filteredMentors)
const displaymentorsList=filteredMentors?.map((item,index)=>{
  return(
<UserCard key={index} title={item.firstname} rating={item.rating} desc={item.description} courses={item.courses} userEnrolled={item.userEnrolled} id={item._id}></UserCard>
  )
})

  return (
    <div className='px-[2rem] py-[4rem] md:px-[6.4rem] flex flex-col gap-4'>
    <Filter></Filter>

    <div className='flex flex-wrap gap-[1rem]'>
      {
        displaymentorsList?displaymentorsList:"Fetching Data"
      }

    </div>
   
    </div>
  )
}

export default Search