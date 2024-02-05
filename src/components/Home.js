import React from "react";

function Home(props){
    
    return(
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.akc.org/wp-content/uploads/2009/01/Cavalier-King-Charles-Spaniel-head-portrait-outdoors.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Sabastian Cookie
                    </span><br />
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'Sabastian Cookie'})} >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;