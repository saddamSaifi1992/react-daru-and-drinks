import React,{useState,useEffect} from 'react'
import ItemDetails from "./ItemDetails";
import axios from 'axios' ;
import MetaTags from 'react-meta-tags';

const Random = () => {
    const [data,setData] = useState([]); 
    const getRandomDatatId = () =>{
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then(res => {
            setData(res.data.drinks[0]);
            console.log(res.data.drinks[0]);
          })
          .catch(err => console.error(err));
    }

    useEffect(()=>{
        getRandomDatatId() 
    },[]);
    return (
        <> 
            <MetaTags>
                <title>{data.strDrink} </title>
                <meta name="description" content={data.strInstructions} />
                <meta property="og:title" content={data.strDrink} />
                <meta property="og:image" content="{`url(/asset/images/bot.jpg)`}" />
            </MetaTags>
            <ItemDetails item={data}/>
        </>
    )
}

export default Random
