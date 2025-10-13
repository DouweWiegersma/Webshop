import {calculateDiscount} from "../../helper/discount.js";

function Price({price, discount}){


    return(
        <>
            <div className='flex w-full justify-between items-center p-5'>
                <div className='flex justify-evenly gap-4 items-center'>
        <p className='font-bold text-3xl'>${calculateDiscount(price, discount)}</p>
            <p className='text-white font-extrabold bg-black w-12 h-7 text-center rounded'>{discount}%</p>
                </div>
            <p className='text-gray-500 font-bold text-md line-through'>${price.toFixed(2)}</p>
            </div>
        </>
    )
}

export default Price;