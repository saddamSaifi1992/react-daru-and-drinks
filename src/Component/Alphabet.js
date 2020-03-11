import React, {useState,useEffect} from 'react'
import Itom from "./Itom"; 
import axios from 'axios'; 
import MetaTags from 'react-meta-tags';

const Alphabet = () => {
    const  [drinks, setDrinks] = useState([]);
    const  [alphabet, setAlphabet] = useState('a');
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    useEffect(()=>{
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+alphabet)
          .then(res => {
                console.log(res.data.drinks)
                setDrinks(res.data.drinks)
          })
          .catch(err => console.error(err));
    },[alphabet]);
    const myRender = () => {
        return (
        <div className="row"> 
            {drinks.map((item, key)=>
                <Itom key={key} item={item}/>
            )}
        </div>
        )
      };
      const setDefoultClass = (l) => {
        if(l==='a'){
            return "active";
        }
        return ""
      };
      const setClassForActive = (l) => {
        var elements = document.querySelectorAll('.tags a');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active'); 
        } 
         let letter = document.getElementById(l);
         letter.classList.add("active");
      };
    return (
        <>  
            <MetaTags>
                <title>Daru & Drinks filter by Allphabet </title>
                <meta name="description" content="search All tipe of daru and drinks" />
                <meta property="og:title" content="Daru & Drinks filter by Allphabet" />
                <meta property="og:image" content="{`url(/asset/images/bot.jpg)`}" />
            </MetaTags>
            <div className="ftco-blocks-cover-1">
                <div className="ftco-cover-1 overlay"  style={{backgroundImage:`url(/asset/images/bot.jpg)`}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-lg-6">
                                <h1>Drinks by Alphabet</h1>
                                <div className="tags">
                                {letters.map((l,key)=>{
                                    return <a onClick={ ()=>{setAlphabet(l); setClassForActive(l);} } className={setDefoultClass(l)} id={l} >{l.toUpperCase()}</a> 
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="site-section ftco-service-image-1 pb-5">
                <div className="container">
                {drinks?myRender():'No Drinks Found'} 
                </div>
            </div>
        </>
    )
}
export default Alphabet
