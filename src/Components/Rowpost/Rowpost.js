import React,{useState,useEffect} from 'react';
import favLogo from "../../assets/favourites.png"
import "./Rowpost.css";


function Rowpost() {
    const [movies,setMovies] = useState([]);
    // useEffect(()=>
    // {
    //     axios.get(props.url).then((response)=>{
    //         console.log(response.data);
    //     setMovies(response.data.results).catch(err=>{
    //         alert('network error');
    //     });   
          
    //     })
    // })
    
    return (
        <div className='row'>
            <div className='posters'>
            <h1>Movies</h1>
            <div className='row-post'>
                <div className='movie-card'>
                    <div className='banner'>
                        <button className='add-fav'><img src={favLogo}></img></button>
                    </div>
                    <h2>release date</h2>
                    <h2>title</h2>
                    <h2>genere</h2>
                </div>
                
            </div>
            </div> 
        </div>
      );
}

export default Rowpost;