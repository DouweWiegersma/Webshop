import Cart from '../../assets/icon-cart.svg?react'
function AddToCard({quantity, setItems}){
        function handleClick(){
            setItems(quantity)
        }
    return(
        <>
            <div className='flex justify-center items-center align-middle'>
            <button onClick={handleClick} className='w-11/12 border-2 bg-orange-500 flex justify-center items-center p-4 rounded-lg gap-6 text-black font-bold'> <Cart style={{ color: 'black' }} /> Add to cart</button>
            </div>

        </>
    )
}

export default AddToCard;