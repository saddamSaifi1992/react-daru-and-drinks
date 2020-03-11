import React ,{ useState , useEffect}  from 'react'
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import axios from 'axios';
import MetaTags from 'react-meta-tags';
const ItemById = () => {

    let { id } = useParams();
    const [itemId,setItemId] = useState(id);
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+itemId)
          .then(res => {
            setData(res.data.drinks[0]);
            console.log(res.data.drinks[0]);
          })
          .catch(err => console.error(err));
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

export default ItemById
