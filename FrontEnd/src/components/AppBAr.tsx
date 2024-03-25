import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const Appbar =()=>{
    return <div className="border-b flex justify-between px-10 py-4 ">
        <Link to={'/blogs'} className="text-xl font-semibold flex flex-col justify-center cursor-pointer">
            Medium
        </Link>
        <div className="cursor-pointer  gap-3">
            <Link to={'/publish'}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8">Write</button>
            </Link>
                <Avatar size={"big"}  name="Lalit" />
        
        </div>
    </div>
}
