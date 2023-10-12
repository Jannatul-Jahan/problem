import "./body.style.css";
import React from 'react';
import Cart from "./cart";
import ContextApi from "./contextApi";
import FormSubmission from "./formSubmission.component";
import SignUpForm from "./signup";
import EventPropagation from "./eventPropagation.component";

const Body = () => {
  const cards = [  
    {
      id: 1,
      title: "Bag",
      price: 500,
      discription: "Looking for the best womens bag collection in Bangladesh? Check out our collection of high-quality bags that combine style and functionality",
      imageUrl:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww&w=1000&q=80",
    },
    {
      id: 2,  
      title: "Watch",
      price: 200,
      discription:"A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,  
      title: "Sunglass",
      price: 130,
      discription:"Sunglasses are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting the eyes.",
      imageUrl:
        "https://lunettes.com.bd/wp-content/uploads/2021/04/stephanie-hau-P4TPjOXKqY8-unsplash.jpg",
    },
  ];

    return(
      <>
      <div className="body">
        <br></br>
        <h1 className="head">Our Online Store</h1>
        <div className="design">
          {cards.length > 0 &&
            cards.map((card) => {
              return (
                <div key={card.id}>
                  <Cart
                    title={card.title}
                    price={card.price}
                    imageUrl={card.imageUrl}
                  />
                </div>
              );
            })}
            
        </div>
        <div className="form">  
        <br></br>
        <ContextApi />
        <br></br>
        <FormSubmission/>
        <br></br>
        <SignUpForm/>
        <br></br>
        </div>
        
      </div>
       
    
      </>
         
    );
};

export default Body;