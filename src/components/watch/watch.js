import './watch.css';
import {useState} from 'react'


const Watch = () => {
    let currentTime = new Date().toString().split(" ")[4];

    let [clock, setClock] = useState(currentTime);
    
    setInterval(() => {setClock(new Date().toString().split(" ")[4])}, 1000);
        
  

    return (
        <div className="watch-container">
            <h2>{clock}</h2>
        </div>
    )
};


export default Watch;