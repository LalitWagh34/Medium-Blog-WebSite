
import { Blog } from "../hooks"
import { Appbar } from "./AppBAr"
import { Avatar } from "./BlogCard"


export const MainBlog = ({ blog }: { blog: Blog  }) =>{

    return <div>
        <Appbar/>
        <div className="flex justify-center ">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-10 ">
                <div className="col-span-8  ">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                       Post On 2nd Dec 2024
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4  flex flex-col bg-slate-300  p-2  rounded-lg shadow-2xl w-full h-full">
                <div className="ml-2  ">
                    Author
                    <div className="flex ">
                        {/* <div className="flex flex-col"> */}
                            <div className="pr-4 flex flex-col  pt-2">
                                <Avatar size={"big"} name={"Anonymous"} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold pt-1">
                                    {"Anymous"}
                                </div>
                       
                                <div className="pt-1 text-slate-500">
                                   write Something about your and  this blog in short words here  ...
                               </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
}