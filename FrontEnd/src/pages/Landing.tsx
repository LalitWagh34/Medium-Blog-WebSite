
import { Footer } from "../components/Footer"
import { LandinBar } from "../components/LandingBar"
import { LandingImage } from "../components/LandingImage"
import { Link } from "react-router-dom"

export const Landing =() =>{
    return <div>
       <LandinBar/>
        <div className="flex flex-col justify-center items-center py-24 border-b-2 border-slate-200">
            <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none ">
                Welcome to the Medium Blogs   
            </div>
            <div className="mx-auto max-w-[600px] text-xl pt-8 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400l ">
                A place for all your thoughts. Share your ideas with the world.
                <br/>
                <div className="flex justify-center mt-2 mb-2">
                    Sign in Below to Use the App ....
                </div>
            </div>
           
            <div className="cursor-pointer pt-2">
                <Link to={'/signup'}>
                <button type="button" className="text-white hover:bg-black  focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-4 bg-slate-600">Sign Up</button>
                </Link>
                <Link to={'/signup'}>
                    <button type="button" className="text-white bg-black  focus:outline-none   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mr-8 hover:bg-teal-900">Sign In</button>
                </Link>
            </div>
          
        </div>
        <div className="border-b">
            <LandingImage/>
        </div>
        <Footer/>
    </div>
}