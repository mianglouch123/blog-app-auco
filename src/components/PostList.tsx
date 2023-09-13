import React from 'react'; 
import { PostInterface } from '@/types/post.types';
import Link from 'next/link';

interface PostProps {
    post : PostInterface
}

const PostList : React.FC<PostProps> = ({post}) => {
    return (
       <Link href={`/blog-detail/${post.id}`}>
        <div className='cursor-pointer flex flex-col h-[220px] md:h-[250px] w-[300px] font-normal text-[18px]
        bg-[#f9f8f8] border shadow-md gap-2 py-2 hover:-translate-y-1 duration-150
        '>

        <h3 className='font-semibold'> {post.title}</h3>
        
        <div className='bg-gray-50'>
        <p className='text-[18px] md:text-[17px] font-normal text-gray-600'>{post.body}</p>
        </div>     
      
      </div>
    </Link>
    )
}

export default PostList