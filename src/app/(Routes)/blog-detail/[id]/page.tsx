import React from 'react'
import { CommentInterface } from '@/types/comments.types';
import { COMMENTS_API } from '@/app/lib/comments'
import CommentList from '@/components/CommentList';
import { notFound } from "next/navigation";


const commentById = async ({
    params : {id} ,
} : {
    params : {id : number}
}
) => {
    const comments = await COMMENTS_API.getCommentById(id)

    if(id < 1 || isNaN(id)) {
    // si la id no es un numero , retornará a la la función "page not found 404".
     notFound();
    }

    return (
       <main className='h-screen w-full'>
        
        <div className='flex justify-center items-center mt-6'>
        <h3 className='text-[26px] font-semibold text-black/70 '>Comments by Post {id} id </h3>
        </div>
        
         <div className='flex items-center gap-4 justify-center px-4 py-10 flex-col'>
         {comments.map((comment : CommentInterface) => (
            <CommentList key={comment.email} comment={comment} /> 
         ))}
        </div>
       </main>
    )
}

export default commentById