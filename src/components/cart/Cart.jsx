
function Cart({title, items, smallImg, total, open}){


        const totals = total * items

    return(

        <>
            {open &&
                <div className='flex justify-center items-center m-2'>
                    <div className='bg-white rounded-lg w-full h-64 max-h-64 flex flex-col justify-between p-8'>
                        <div>
                            <h1 className='font-bold'>Cart</h1>
                        </div>

                        <div className='flex gap-6'>
                            <img className='w-12' src={smallImg[0]} alt='previewImage'/>
                            <div className='flex flex-col'>
                                <p className='text-gray-500'>{title}</p>
                                <p className='text-gray-500'>{total} x {items} <span className='font-bold text-black'>${totals}</span></p>
                            </div>
                        </div>
                        <button className='w11/12 h-12 bg-orange-500 rounded-lg font-bold'>Checkout</button>
                    </div>
                </div>}

        </>
    )
}

export default Cart