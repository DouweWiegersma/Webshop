import product1 from '../../assets/image-product-1.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product4 from '../../assets/image-product-4.jpg'
import Previous from '../../assets/icon-previous.svg?react'
import Next from '../../assets/icon-next.svg?react'
import {useState} from "react";

function Slider({open}){

    const [current, setCurrent] = useState(0)
    const images = [product1, product2, product3, product4]

    function next(){
        if (current === images.length - 1) return
            setCurrent(prev => prev + 1)
    }


    function previous(){
        if (current === 0) return
        setCurrent(prev => prev - 1)
    }



    return(
        <>
            <div className='w-full max-w-md mx-auto grid grid-rows-3 grid-cols-3 h-72'>

                <button onClick={previous} disabled={open}
                        className={`m-4 justify-self-start z-30 row-span-3 col-span-1 place-self-center rounded-full absolute h-10 w-10 flex justify-center items-center
    ${open ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                >
                    <div className='flex justify-center items-center'>
                        <Previous/>
                    </div>
                </button>
                <img src={images[current]} alt='shoesImage' className='row-span-3 col-span-3 w-full object-cover h-72 z-0 relative'/>
                    <button onClick={next}   disabled={open}
                            className={`m-4 justify-self-end z-30 place-self-center rounded-full absolute h-10 w-10 flex justify-center items-center
                            ${open ? 'bg-gray-300 opacity-50 cursor-not-allowed' : 'bg-white hover:bg-gray-100'}`}
                    >

                    <div className='flex justify-center items-center'>
                            <Next />
                        </div>
                        </button>
            </div>




            </>
            )
            }

            export default Slider;