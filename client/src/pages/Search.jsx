import Filter from '@/components/ui/Templates/searchPage/Filter'
import UserCard from '@/components/ui/Templates/searchPage/UserCard'


function Search() {
  return (
    <div className='px-[2rem] py-[4rem] md:px-[6.4rem]'>
    <Filter></Filter>
    <div className='flex flex-wrap gap-[1rem]'>
    <UserCard></UserCard>
    <UserCard></UserCard>
    <UserCard></UserCard>
    <UserCard></UserCard>
    </div>
   
    </div>
  )
}

export default Search