import React from 'react';
import { Link   } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
const Itom = ({item}) => {
    return (
        <>
            <div className="col-md-4 text-center">
                <ScrollAnimation animateIn="fadeIn">
                <a  >
                <Link to={`/drink/`+ item.idDrink }><img src={item.strDrinkThumb} alt="Image" className="img-fluid" /></Link>
                </a>
                </ScrollAnimation>
                <div className="px-md-3">
                    <Link to={`/drink/`+ item.idDrink }>
                    <ScrollAnimation animateIn='bounceInRight'   animateOut='bounceOutLeft'>
                    <h3 className="pt-3">{item.strDrink}</h3>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'><p>{item.strInstructions}</p></ScrollAnimation>
                    </Link>
                </div>
                
            </div>
        </>
    )
}        
                                 
export default Itom
