import React from 'react'
import { CommentInterface } from '@/types/comments.types'

interface CommentProps {
    comment : CommentInterface
}
const CommentList : React.FC<CommentProps> = ({comment}) => {

    return (
        <div className='cursor-pointer bg-[#f9f8f8] gap-4 flex justify-center items-center shadow-sm flex-col h-[250px] w-[370px] hover:h-[350px] duration-300'>
        <div className='flex flex-col items-center justify-center gap-3 '>
        
        <strong className='text-black/70'>comment post by {comment.postId} id</strong>

        <h3 className='flex gap-2 font-normal text-gray-600/90'>User : <p className='text-black font-semibold'>{comment.email}</p></h3>
        <h3 className='flex gap-2 font-normal text-gray-600/90'> Title : <p className='text-black font-semibold'>{comment.name}</p></h3>

        </div>
        <div className="bg-gray-50">
        <p className='text-gray-800/90'> {comment.body} </p>

        </div>
       </div>
    )

}

export default CommentList