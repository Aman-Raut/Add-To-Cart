import React from "react";

function Home(){

    return<>
    <h1>Home</h1>
    <div className="cart-wrapper" >
        <div className="img-wrapper item">
        <img src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" alt="img didn't load" />
        </div>
        <div className="text-wrapper item">
        <span>Just a practice </span>
        </div>
        <div className="text-wrapper item">
            <span>Price: $ 1000 </span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to Bag</button>
        </div>
    </div>
    
    </>
}
export default Home;