import { Link } from "react-router-dom"
export const Footer =() =>{
    return <div>
         <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
         
          <span className="font-bold text-xl">Medium</span>
        </div>
        <p className="text-md ml-auto flex-1 text-slate-600 font-medium dark:text-gray-400">
          Sign up to get notified when we launch.
          <Link className="underline underline-offset-2 text-black" to={"/blogs"}>
            Terms & Conditions
          </Link>
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-md hover:underline underline-offset-4" to={"/blogs"}>
            Terms of Service
          </Link>
          <Link className="text-md hover:underline underline-offset-4" to={"/blogs"}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
}