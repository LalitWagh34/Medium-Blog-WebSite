import { Link } from "react-router-dom";

interface BlogCardProps{
    autherName : string;
    title : string;
    content:string;
    publishedContent:string;
    id:number;
}

export const  BlogCard =({
    autherName,
    title,
    content,
    publishedContent,
    id

}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
    <div className=" p-4 border-b border-slate-300 pb-4 cursor-pointer w-screen max-w-screen-md">
        <div className="flex">
     
                <Avatar name={autherName}/>   
          
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{autherName}</div>
            <div className="flex justify-center flex-col pl-1" >
                <Circle/>
            </div>
            <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                {publishedContent}
            </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="font-thin text-md">
            {content.slice(0,100) + "..."}
        </div>
        <div className="font-extralight text-slate-400 text-sm pt-2">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div>
    </div>
    </Link>

}

export function  Circle(){
    return <div className="w-1 h-1 rounded-full bg-slate-400">

    </div>
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}