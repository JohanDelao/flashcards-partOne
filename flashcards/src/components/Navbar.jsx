import './Navbar.css'
import NBA from '../assets/nba-logo-transparent.png'

export default function Navbar(){
    return (
        <div className="Nav">
            <div className='inner'>
                <img id="nba" src={NBA} width={45}></img>
                <h2 className='title'>Guess the NBA team’s city?</h2> 
            </div>
        </div>
    )
}