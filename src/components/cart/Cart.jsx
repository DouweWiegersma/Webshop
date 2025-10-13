import Trashcan from '../../assets/icon-delete.svg?react'
function Cart({title, smallImg, total, open, setItems, setQuantity, setPrice, items}){

        const totals = total * items

    function removeItem(){
        setItems(0)
        setPrice(250)
        setQuantity(0)
    }

    if (!open) return null
    return(

        <>


            {items !== 0 ? (
                <div className='flex justify-center items-center m-2'>
                <div className='bg-white rounded-lg w-full h-64 max-h-64 flex flex-col justify-between p-4'>
                <div>
                <h1 className='font-bold'>Cart</h1>
                </div>

                <div className='flex gap-6'>
                <img className='w-12' src={smallImg[0]} alt='previewImage'/>
                <div className='flex flex-col'>
                <p className='text-gray-500'>{title}</p>
                                <p className='text-gray-500'>${total} x {items} <span className='font-bold text-black'>${totals}</span></p>
                            </div>
                            <button className='flex justify-center items-center' onClick={removeItem}>
                            <Trashcan/>
                            </button>
                        </div>
                        <button className='w11/12 h-12 bg-orange-500 rounded-lg font-bold'>Checkout</button>
                    </div>
                </div>) : (<div className='flex justify-center items-center m-2'>
                    <div className='bg-white rounded-lg w-full h-64 max-h-64 flex flex-col justify-between p-4'>
                        <div className='border-b pb-4'>
                            <h1 className='font-bold text-lg'>Cart</h1>
                        </div>
                        <div>
                            <p className='text-center pb-24 text-gray-500 font-bold'> Your cart is empty.</p>
                        </div>
                    </div>
                    </div>
            )
            }


                    </>
                    )
                    }

                    export default Cart