import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { SignupBody } from "@lalitwagh/medium-blog-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupBody>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest (){
        try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" :"signin"}` ,postInputs);
        const jwt = response.data;
        localStorage.setItem("token" , jwt)
        navigate("/blogs");

        }catch(err){
            console.log(err);
            alert("err")
        }
    }
    return <div className="h-screen flex justify-center flex-col">
        {/* {JSON.stringify(postInputs)} */}
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-semibold">
                        Create an Account
                    </div>
                    <div className="text-slate-500">
                        {type === "signin" ?" Don't Have an Account?" : "Already Have an Account?"} <Link className="pl-2 underline" to={type === "signin" ? "/signup" :"/signin"}>
                            {type === "signin" ? "Sign Up" :"Sign In"}
                        </Link>
                    </div>
                </div>
                <div className="pt-4">
                    { type === "signup" ?<LabelInput label="Name" placeholder="Lalit Wagh" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null }
                    <LabelInput label="username" placeholder="LalitWagh@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                    <LabelInput label="password" type={"password"} placeholder="123123" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className=" mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full ">{type === "signup" ? "Sign Up" :"Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInput {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?:string
}
function LabelInput({ label, placeholder, onChange ,type}: LabelledInput) {



    return <div>
        <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />

    </div>
}

