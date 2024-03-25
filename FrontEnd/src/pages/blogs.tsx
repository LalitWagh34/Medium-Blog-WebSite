import { Appbar } from "../components/AppBAr";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export function Blogs() {
  const { loading, blogs } = useBlogs();
  
  if (loading) {
    return <div>
      <Appbar/>
    <div className="flex justify-center"> 
      <div>
          <BlogSkeleton/>
          <BlogSkeleton/>
          <BlogSkeleton/>
        </div>
      </div>
    </div>

  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs?.map(blog => (
            <BlogCard
              id={blog.id} // Don't forget to add a unique key for each blog card
              autherName={blog.author.name ||"Anynoumous"}
              publishedContent={"2nd Feb 2024"}
              content={blog.content}
              title={blog.title}
            />
          ))}
            {/* <BlogCard
              id={1} // Don't forget to add a unique key for each blog card
              autherName={"blog.author.name" ||"Anynoumous"}
              publishedContent={"2nd Feb 2024"}
              content={"blog.content"}
              title={"blog.title"}
            /> */}
        </div>
      </div>
    </div>
  );
}
