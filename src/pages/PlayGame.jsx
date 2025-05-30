import { Link ,useLocation} from "react-router-dom";
import {useState} from 'react'
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import HangMan from "../components/HangMan/HangMan";
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

     const { state } = useLocation();
     const [guessedLetters,setGuessedLetter] = useState([]);
     const [step,setStep] = useState(0);

     function handleLetterClick(letter){
        if(state?.wordSelected?.toUpperCase().includes(letter)){
            console.log("correct");
        }
        else{
            console.log('wrong');
            setStep(step+1);
        }
        setGuessedLetter([...guessedLetters,letter]);
     }
    return(
        <>  
            
            <h1>PlayGame</h1>
            {state?.wordSelected && (
                <>
                 <MaskedText text = {state.wordSelected} guessedLetters={guessedLetters}/>
            
            <div>
                <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters}
                    onLetterClick={handleLetterClick}
                />
            </div>
            <div>
                <HangMan step={step}/>
            </div>

                </>
            )}
           <Link to='/'>Home</Link>
            <Link to ='/start' className ="text-blue-400">StartGame-Link</Link>
        </>
    );
}
export default PlayGame;