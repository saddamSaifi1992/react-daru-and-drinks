import React from 'react'

const ItemDetails = ({item}) => {
    return (
        <>
            <div className=""> 
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-7 text-center">
                            <div className="block-heading-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                                <h2>{item.strDrink}</h2>
                                <p>{item.strInstructions}</p>
                                <img src={item.strDrinkThumb} />
                            </div> 
                        </div>
                    </div> 
                </div> 
            </div>
        </>
    )
}

export default ItemDetails 