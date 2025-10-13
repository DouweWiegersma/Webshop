import Minus from '../../assets/icon-minus.svg?react'
import Plus from '../../assets/icon-plus.svg?react'

function Counter({quantity, setQuantity}){


    function add(){
            setQuantity(prev => prev + 1)
        }
        function remove(){
            if (quantity === 0) return
            setQuantity(prev => prev - 1)
        }



    return(
        <>
            <div className='flex justify-between items-center w-screen pl-12 pr-12 h-16'>
                <button onClick={remove}><Minus/></button>
                <p className='text-lg font-bold'>{quantity}</p>
                <button onClick={add}><Plus/></button>
            </div>


        </>

    )
}

export default Counter;