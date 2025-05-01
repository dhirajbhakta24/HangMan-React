import './App.css'
import {Routes , Route} from 'react-router-dom'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'

function App(){
    return(
        <Routes>
            <Route path='/' element ={<div>Home</div>}/>
            <Route path='/start' element={<StartGame/>}/>
            <Route path='/play' element={<PlayGame/>}/>

        </Routes>
    )
}
export default App

