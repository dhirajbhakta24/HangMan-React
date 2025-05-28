import { Link ,useLocation} from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
function PlayGame(){
   //const [searchParams] = useSearchParams(); used to read and manipulate the URL query parameters (i.e., the part of the URL after the ?).
   // console.log(searchParams.get("text"));

   //const{text,id}  = useParams();
   //<Link to="/message/hello/123">Go to Message</Link> it is passed through Link 
   //from where we are redirecting and it is only available to that page that
   //link is directing 
   //rendering list
   //    const arr =['hello','world']
 //{/* {arr.map(Element=><h1>Element</h1>)} */}

     const {state} = useLocation();
    return(
        <>  
            
            <h1>PlayGame {state.wordSelected}</h1>
           
            <MaskedText text ={state.wordSelected} guessedLetters ={[]}/>
            <Link to ='/start' className ="text-blue-400">StartGame-Link</Link>
        </>
    );
}
export default PlayGame;