import './index.css'
import './App.css'
import NavBar from "./components/navBar/NavBar.jsx";
import Slider from "./components/slider/Slider.jsx"
import Information from "./components/information/Information.jsx";
import Counter from "./components/counter/Counter.jsx"
import Price from "./components/price/Price.jsx";
import AddToCard from "./components/addToCart/AddToCard.jsx";
import Cart from './components/cart/Cart.jsx'
import SmallImg1 from './assets/image-product-1-thumbnail.jpg'
import SmallImg2 from './assets/image-product-1-thumbnail.jpg'
import SmallImg3 from './assets/image-product-1-thumbnail.jpg'
import SmallImg4 from './assets/image-product-1-thumbnail.jpg'

import {useState} from "react";
import {calculateDiscount} from "./helper/discount.js";
function App() {
  const [open, setOpen] = useState(false)
  const title = 'Fall Limited Edition Sneakers'
  const price = 250
  const [quantity, setQuantity] = useState(0)
  const [items, setItems] = useState(0)
  const smallImg = [SmallImg1, SmallImg2, SmallImg3, SmallImg4]
  const discount = 50
  const total = calculateDiscount(price, discount)





  return (
    <>
      <NavBar setOpen={setOpen} open={open}/>
      <div className='absolute z-50 w-full h-64 max-h-60'>
      <Cart title={title} items={items} smallImg={smallImg} total={total} open={open}/>
      </div>
      <div className='relative'>
        <Slider/>
      </div>
        <Information/>
        <Price price={price} discount={discount}/>
        <Counter setQuantity={setQuantity} quantity={quantity}/>
        <AddToCard quantity={quantity} items={items} setItems={setItems}/>


    </>
  )
}

export default App
