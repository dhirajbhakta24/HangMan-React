import { Link } from "react-router-dom";
function PlayGame(){
    return(
        <>
            <h1>PlayGame</h1>
            <Link to ='/start' className ="text-blue-400">StartGame-Link</Link>
        </>
    );
}
export default PlayGame;