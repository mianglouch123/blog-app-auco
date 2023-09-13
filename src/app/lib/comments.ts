import { CommentInterface } from "@/types/comments.types";


export const COMMENTS_API = {
    getCommentById : async (id : number) : Promise<CommentInterface[]> => {
    const BASE_URL = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    
    const res = await fetch(BASE_URL);
    if(!res.ok) {
        throw new Error ('fetching data comments failed');
     }

     return res.json();

    }

}