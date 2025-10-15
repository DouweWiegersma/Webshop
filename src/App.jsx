import './index.css'
import './App.css'
import NavBar from "./components/navBar/NavBar.jsx";
import Product from './pages/Product.jsx'
import {useState} from "react";
import SmallImg1 from "./assets/image-product-1-thumbnail.jpg";
import SmallImg2 from "./assets/image-product-1-thumbnail.jpg";
import SmallImg3 from "./assets/image-product-1-thumbnail.jpg";
import SmallImg4 from "./assets/image-product-1-thumbnail.jpg";
import {calculateDiscount} from "./helper/discount.js";
import BigSlider from "./components/bigSlider/BigSlider.jsx";

function App() {
    const [open, setOpen] = useState(false)
    const title = 'Fall Limited Edition Sneakers'
    const [price, setPrice] = useState(500)
    const [quantity, setQuantity] = useState(0)
    const [items, setItems] = useState(0)
    const smallImg = [SmallImg1, SmallImg2, SmallImg3, SmallImg4]
    const discount = 24
    const total = calculateDiscount(price, discount)
    const [menuOpen, toggleMenuOpen] = useState(false)
    const [preview, togglePreview] = useState(false)
    function handleClick(){
        if (open === true) setOpen(false)
        else{
            setOpen(true)
        }
    }

    function handlePreview(){
        if (preview === false) {
            togglePreview(true)
        }
        else{
            togglePreview(false)
        }
    }


  return (
      <>

            <div className='md:relative md:overflow-hidden mb-5'>
          <NavBar setOpen={setOpen} open={open} quantity={quantity} items={items} menuOpen={menuOpen} handleClick={handleClick}
                  toggleMenuOpen={toggleMenuOpen}/>
          <Product menuOpen={menuOpen} title={title} items={items} smallImg={smallImg} setItems={setItems} preview={preview} togglePreview={togglePreview} handleClick={handleClick} setQuantity={setQuantity} price={price} total={total} quantity={quantity} setOpen={setOpen} setPrice={setPrice} discount={discount} open={open} handlePreview={handlePreview}/>
                </div>
          {preview &&
          <div className='fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-sm z-40 hidden md:flex md:z-[60]'>
          <BigSlider handlePreview={handlePreview} togglePreview={togglePreview} preview={preview}/>
          </div>}



      </>
  )
}

export default App
