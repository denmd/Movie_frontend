import React from 'react';
import Header from '../../Components/Header';
import PlayLogo from "../../assets/Play.png"
import  rect1 from "../../assets/Rectangle1.png"
import  rect2 from "../../assets/Rectangle2.png"
import  rect3 from "../../assets/Rectangle3.png"
import  rect4 from "../../assets/Rectangle4.png"
import './Home.css'

function Home() {

  return (
    
    <div className="body">
        
        <div className='main-body'>
           <div className='poster-box'>
            <div className='description-box'>
                <h1>spiderman-into the spiderverse</h1>
                <h3>ndbcc</h3>
                <button className='watch-later'><img src={PlayLogo}></img>Watch trailer</button>
                <div className='scrolls'>
                    <img src={rect1}  className="scroll"></img>
                            <img src={rect3} alt="Icon 2" className="scroll" />
                            <img src={rect2} alt="Icon 2" className="scroll" />
                            <img src={rect4} alt="Icon 2" className="scroll" />
                            </div>
            </div>
          
           </div>
           

        </div>
   
      
    </div>
  );
}

export default Home;
