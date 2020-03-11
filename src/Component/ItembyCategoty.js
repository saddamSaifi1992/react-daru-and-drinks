import React, {useState,useEffect} from 'react'
import Itom from "./Itom"; 
import axios from 'axios';
import { useParams } from "react-router-dom";
import MetaTags from 'react-meta-tags'; 
const ItembyCategoty = () => {
    const  [drinks, setDrinks] = useState([]);
    let { c,v } = useParams();
    useEffect(()=>{
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?"+c+"="+v)
          .then(res => {
                console.log(res.data.drinks)
                setDrinks(res.data.drinks)
          })
          .catch(err => console.error(err));
    },[]);
    const myRender = () => {
        return (
        <div className="row"> 
            {drinks.map((item, key)=>
                <Itom key={key} item={item}/>
            )}
        </div>
        )
      };
    return (
        <>   <MetaTags>
                <title>Daru & Drinks filter by Categories </title>
                <meta name="description" content="search All tipe of daru and drinks" />
                <meta property="og:title" content="Daru & Drinks filter by Categories" />
                <meta property="og:image" content="{`url(/asset/images/bot.jpg)`}" />
            </MetaTags>
            <div className="ftco-blocks-cover-1">
                <div className="ftco-cover-1 overlay"  style={{backgroundImage:`url(/asset/images/bot.jpg)`}}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-lg-6">
                                <h1>Drinks by Category</h1>
                                <h1>:{v}</h1>
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

export default ItembyCategoty
