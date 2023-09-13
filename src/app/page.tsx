import { PostInterface } from "@/types/post.types"
import { POST_API } from "./lib/post"
import PostList from "@/components/PostList";


export default async function Page() {

 const posts = await POST_API.posts();

  return (
    <main className="h-screen w-full">
      <div className="flex items-center justify-center mt-4">
       <h3 className="text-[26px] text-black/70 font-semibold">Posts</h3>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-[60px] md:gap-6 py-10 px-6 items-center justify-center">
        {posts.map((post : PostInterface) => (
         <PostList key={post.title} post={post}/>
        ))}
      </div>
    </main>
  )
}
