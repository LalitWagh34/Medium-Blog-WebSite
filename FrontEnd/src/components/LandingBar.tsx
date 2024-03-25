import { Link } from "react-router-dom"


export const LandinBar =()=>{
    return <div className="border-b flex justify-between px-10 py-4 border-slate-500">
        <Link to={'/'} className="text-xl font-semibold flex flex-col justify-center cursor-pointer">
            Medium
        </Link>
        <div className="cursor-pointer ">
            <Link to={'/signup'}>
                <button type="button" className="hover:underline underline-offset-4 mr-6 hover:font-bold transition duration-100 ease-in-out">Sign Up</button>
            </Link>
            <Link to={'/signup'}>
                <button type="button" className="text-white bg-black  focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8">Sign In</button>
            </Link>
        </div>
    </div>
}
