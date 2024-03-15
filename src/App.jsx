import "./App.css";
import React from "react";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem, BakeryItemHorizontal } from "./components/BakeryItem";
import { Button } from "./components/Button";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

export function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="App flex gap-4 justify-center">
      <div className="flex justify-center flex-grow">
        <div className="flex flex-col p-4 gap-4 max-w-3xl">
          <div className="flex items-center justify-between px-1 py-3">
            <h1 className="font-bold text-4xl">Andy's Bakery</h1>
            <Button onClick={() => setIsCartOpen(!isCartOpen)} className={"flex-shrink-0"}>
              { isCartOpen
                ? <span>Hide Cart</span>
                : <span>Show Cart <span className="text-slate-600">({cart.length})</span></span>
              }
            </Button> 
          </div>
          { isCartOpen && 
            <Cart 
              items={cart} 
              onRemoveItem={(item) => setCart(cart.filter((cartItem) => cartItem !== item))}
              className={"flex lg:hidden border border-slate-200 rounded-xl"}
              />
          }
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bakeryData.map((item, index) => (
              <BakeryItem key={item.name} data={item} inCart={cart.includes(item)} onClick={() => {
                if(cart.includes(item)){
                  setCart(cart.filter((cartItem) => cartItem !== item))
                } else {
                  setCart([...cart, item])
                }
              }} />
            ))}
          </div>
        </div>
      </div>
      { isCartOpen &&
        <Cart 
          items={cart} 
          onRemoveItem={(item) => setCart(cart.filter((cartItem) => cartItem !== item))} 
          className="hidden lg:flex w-96 min-w-72 border-l border-slate-300 bg-slate-50" />
      }
    </div>
  );
}

function Cart({ items, onRemoveItem, className }) {
  return (
    <div className={"flex flex-col p-5 gap-5 " + (className ? className : "")}>
      <div className="flex items-center gap-2 flex-wrap">
        <h2 className="font-bold text-2xl">Cart</h2>
        <p className="text-slate-500">{items.length} item{items.length == 1 ? "" : "s"}</p>
      </div>
      { items && 
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <BakeryItemHorizontal data={item} onClick={() => onRemoveItem(item)} />
          ))}
        </div>
      }
    </div>
  )
}

export default App;
