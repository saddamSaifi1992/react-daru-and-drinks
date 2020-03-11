import React, {useState,useEffect} from 'react'
import Itom from "./Itom"; 
import axios from 'axios';
import MetaTags from 'react-meta-tags';


const Container = () => {
    
    const  [drinks, setDrinks] = useState([]);
    const  [search, setSearch] = useState('');
    const  [click,setClick] = useState('');
    useEffect(()=>{
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search)
          .then(res => {
                console.log(res.data.drinks)
                setDrinks(res.data.drinks)
          })
          .catch(err => console.error(err));
    },[click]);
    const myRender = () => {
        return (
        <div className="row"> 
            {drinks.map((item, key)=>
                <Itom key={key} item={item}  /> 
            )}
        </div>
        )
      };
    return (
        <>  
            <MetaTags>
                <title>Daru & Drinks </title>
                <meta name="description" content="search All tipe of daru and drinks" />
                <meta property="og:title" content="Daru & Drinks" />
                <meta property="og:image" content="{`url(/asset/images/bot.jpg)`}" />
            </MetaTags>
            <div className="ftco-blocks-cover-1">
                <div className="ftco-cover-1 overlay"  style={{backgroundImage:`url(asset/images/bot.jpg)`}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-lg-6">
                                <h1>Find your Drinks</h1>
                                <div>
                                    <div className="form-group d-flex">
                                        <input type="text" onChange={(e)=>setSearch(e.target.value)} className="form-control" placeholder="Find your Drinks"/>
                                        <input type="button" onClick={(e)=>setClick(search)} className="btn btn-primary text-white px-4" value="Show Me"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="site-section ftco-service-image-1 pb-5">
                <div className="container">
                    <div className="row"> 
                        {drinks?myRender():'No Drinks Found'} 
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Container
