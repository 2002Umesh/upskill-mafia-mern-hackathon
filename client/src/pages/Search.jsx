import Filter from '@/components/ui/Templates/searchPage/Filter'
import UserCard from '@/components/ui/Templates/searchPage/UserCard'
import { useAuth } from '@/store/auth';

function Search() {
  const {filteredMentors} = useAuth();
const displaymentorsList=filteredMentors?.map((item,index)=>{
  return(
<UserCard key={index} title={item.name} rating={item.rating} desc={item.description} courses={item.courses} userEnrolled={item.userEnrolled} id={item._id}></UserCard>
  )
})

  return (
    <div className='px-[2rem] py-[4rem] md:px-[6.4rem] flex flex-col gap-4'>
    <Filter></Filter>

    <div className='flex flex-wrap gap-[1rem]'>
    {displaymentorsList}

    </div>
   
    </div>
  )
}

export default Search