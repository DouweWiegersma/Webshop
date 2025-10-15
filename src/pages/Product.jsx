import Cart from "../components/cart/Cart.jsx";
import Slider from "../components/slider/Slider.jsx";
import Information from "../components/information/Information.jsx";
import Price from "../components/price/Price.jsx";
import Counter from "../components/counter/Counter.jsx";
import AddToCard from "../components/addToCart/AddToCard.jsx";



function Product({menuOpen, preview, handlePreview, togglePreview, title, items, smallImg, total, setItems, setQuantity, setPrice, setOpen, discount, price, quantity, open, handleClick}) {


    return (

        <div
            className={`${menuOpen ? "inset-0 backdrop-blur-xl transition-all duration-300 opacity-55" : ""
            }`}>


            <div className={`absolute w-full sm:right-0 sm:w-96 h-64 max-h-60 z-50 transition-all duration-300 
              ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                <Cart title={title} items={items} smallImg={smallImg} total={total} open={open} handleClick={handleClick}
                      setItems={setItems}
                      setQuantity={setQuantity} setPrice={setPrice}/>
            </div>

            <div className='relative md:hidden'>
                <Slider open={open} setOpen={setOpen}/>
            </div>


            <div className='md:grid md:grid-cols-2 md:mt-12 md:w-screen'>
                <div className='hidden md:flex md:justify-center md:items-center'>
                <Slider open={open} setOpen={setOpen} preview={preview} togglePreview={togglePreview} handlePreview={handlePreview} />
                </div>

                <div className='md:grid md:col-start-2 md:p-4'>
                    <div className='md:flex md:w-full md:flex-col'>
                    <Information title={title}/>
                    <Price price={price} discount={discount}/>
                    </div>

                    <div className='md:flex md:w-full gap-3'>
                        <Counter setQuantity={setQuantity} quantity={quantity}/>
                        <AddToCard quantity={quantity} items={items} setItems={setItems}/>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Product