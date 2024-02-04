import React from "react";

function Home(){

    return(
        <div>
           <div className="add-to-cart">
           <img src="data:image/png;base64,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" alt="" />
           </div>
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
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;