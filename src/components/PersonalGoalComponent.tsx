import React from 'react'
import { PROFESSIONAL_ASPIRATIONS, SHORT_TERM_GOALS , LOGN_TERM_GOALS , BUSINESS_CONTRIBUTION } from '@/constants/message.goal'

const PersonalGoalComponent = () => {
  return (
    <>
    
    <div className='flex h-[350px] md:h-[550px] w-[50%] flex-col items-center justify-center  gap-3 text-[22px] font-semibold text-black/90 mt-8'>
             <h3 className='text-[21px] text-black/70'>Aspiraciones profesionales </h3>
             <p className='text-[20px] md:text-[17px] text-gray-600 font-normal'>{PROFESSIONAL_ASPIRATIONS}</p>
            </div>

            <div className='flex h-[350px] md:h-[550px] w-[50%] flex-col items-center justify-center  gap-3 text-[22px] font-semibold text-black/90 mt-8'>
             <h3 className='text-[21px] text-black/70'>Metas a corto Plazo </h3>
             <p className='text-[20px] md:text-[17px] text-gray-600 font-normal'>{SHORT_TERM_GOALS}</p>
            </div>

            <div className='flex h-[350px] md:h-[550px] w-[50%] h-[150px] w-[50%] flex-col items-center justify-center  gap-3 text-[22px] h-[1000px] font-semibold text-black/90 mt-8'>
             <h3 className='text-[21px] text-black/70'>Metas a largo plazo </h3>
             <p className='text-[20px] md:text-[17px] text-gray-600 font-normal'>{LOGN_TERM_GOALS}</p>
            </div>

            <div className='flex  h-[350px] md:h-[550px] w-[50%] h-[150px] w-[50%] flex-col items-center justify-center  gap-3 text-[22px] h-[1000px] font-semibold text-black/90 mt-8'>
             <h3 className='text-[21px] text-black/70'>Contribución profesional </h3>
             <p className='text-[20px] md:text-[17px] text-gray-600 font-normal'>{BUSINESS_CONTRIBUTION}</p>
            </div>
    </>
  )
}


export default PersonalGoalComponent