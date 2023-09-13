import { PostInterface } from "@/types/post.types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const POST_API = {
    posts : async () : Promise<PostInterface[]> => {
     const res = await fetch(BASE_URL);
     
     if(!res.ok) {
        throw new Error ('fetching data post failed');
     }

     return res.json();

    }

}

