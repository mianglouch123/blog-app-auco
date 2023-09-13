import react from 'react'
import PersonalGoalComponent from '@/components/PersonalGoalComponent'
const PersonalGoals = () => {
    return (
        <div className='h-[2500px] md:h-[1700px] w-full flex flex-col justify-center items-center w-full gap-[200px]  md:gap-[120px] '>
        <PersonalGoalComponent />
        </div>
    )
}

export default PersonalGoals