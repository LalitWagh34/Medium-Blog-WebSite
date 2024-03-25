import { useParams } from "react-router-dom";
import { MainBlog } from "../components/MainBlog";
import { useBlog } from "../hooks";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/AppBAr";



export function Blog (){

    const {id} = useParams()
    const {loading ,blog} = useBlog({
        id: id || ""
    }); 

    // useEffect(() => {
    //     const fetchData = async () => {
    //       if (!localStorage.getItem("chat-app-user")) {
    //         navigate("/login");
    //       } else {
    //         setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
    //         setIsLoaded(true)
    //     }
    
    //     };
    
    //     fetchData();
    //   }, []);
    if(loading){
        return <div>
            <Appbar/>
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <Spinner/>
            </div>
        </div>

        </div>
       
    }
    return ( <div>
        <MainBlog blog={blog}/>
    </div>
    )
}