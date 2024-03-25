import { Quotes } from "../components/Qouts";
import { Auth } from "../components/auth";

export function Signin (){
    return ( <div>
        <div  className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type ="signin"/>
            </div >
            <div className="hidden lg:block">
                <Quotes/>
            </div>
        </div>
    </div>
    )
}