import React , {useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';

const Category = () => {
    const [category,setCategory] = useState([]);
    const [ctype,setCtype] = useState('c');
    useEffect(()=>{
       axios
         .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?"+ctype+"=list")
         .then(res =>{
             console.log(res.data.drinks);
             setCategory(res.data.drinks);
         } )
         .catch(err => console.error(err));
    },[ctype]);

    const handleCategoryPrint = (item) => {
        switch (ctype) {
            case 'c':
                return <Link to={`/categoryFilter/${ctype}/${item.strCategory}`}>{ item.strCategory }</Link>;
                break;
            case 'g':
                return <Link to={`/categoryFilter/${ctype}/${item.strGlass}`} >{ item.strGlass }</Link>;
                break;
            case 'i':
                return <Link to={`/categoryFilter/${ctype}/${item.strIngredient1}`}>{ item.strIngredient1 }</Link>;
                break;
            case 'a':
                return <Link to={`/categoryFilter/${ctype}/${item.strAlcoholic}`}>{ item.strAlcoholic }</Link>;
                break; 
            default:
                break;
        }
    }
    return (
        <>   
            <MetaTags>
                <title>Daru & Drinks filter by Categories </title>
                <meta name="description" content="search All tipe of daru and drinks" />
                <meta property="og:title" content="Daru & Drinks filter by Categories" />
                <meta property="og:image" content="{`url(/asset/images/bot.jpg)`}" />
            </MetaTags>
             <div className="ftco-blocks-cover-1">
                <div   style={{backgroundImage:`url(asset/images/bot.jpg)`,padding: '60px 0', color: '#000'}}>
                 <div className="container" >
                     <div className="row">
                        <div className="col-md-3" onClick={()=>setCtype('c')} >
                            <div class="card">
                                <div class="card-body">
                                    Categories (default)
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" onClick={()=>setCtype('g')}>
                            <div class="card">
                                <div class="card-body">
                                    Glasses 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" onClick={()=>setCtype('i')}>
                            <div class="card">
                                <div class="card-body">
                                    Ingredients
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" onClick={()=>setCtype('a')}>
                            <div class="card">
                                <div class="card-body">
                                    Alcoholic
                                </div>
                            </div>
                        </div>
                     </div>
                 </div>
                </div>
            </div>
            <div className="container py-5 mb-5" >
                <div className="row">
                    <div className="col-md-12">
                        <div class="card" >
                            <ul class="list-group list-group-flush">
                                { category.map((c,k)=>{
                                    return (<li key={k} className="list-group-item"  >{handleCategoryPrint(c)}</li>); 
                                })} 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
