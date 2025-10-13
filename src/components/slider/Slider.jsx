import product1 from '../../assets/image-product-1.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product4 from '../../assets/image-product-4.jpg'
import Previous from '../../assets/icon-previous.svg?react'
import Next from '../../assets/icon-next.svg?react'
import {useState} from "react";

function Slider(){
    const [current, setCurrent] = useState(0)

    function next(){
        if (current === images.length - 1) return
            setCurrent(prev => prev + 1)
    }

    function previous(){
        if (current === 0) return
        setCurrent(prev => prev - 1)
    }

    const images = [product1, product2, product3, product4]

    return(
        <>
            <div className='w-full max-w-md mx-auto grid grid-rows-3 grid-cols-3 h-72'>

                <button onClick={previous}
                        className='m-4 justify-self-start z-10 row-span-3 col-span-1 place-self-center bg-white rounded-full hover:bg-white absolute h-10 w-10'>
                    <div className='flex justify-center items-center'>
                        <Previous/>
                    </div>
                </button>
                <img src={images[current]} alt='shoesImage' className='row-span-3 col-span-3 w-full object-cover relative h-72'/>
                    <button onClick={next} className="m-4 z-10 place-self-center justify-self-end bg-white rounded-full h-10 w-10 hover:bg-white absolute">
                        <div className='flex justify-center items-center'>
                            <Next />
                        </div>
                        </button>
            </div>




            </>
            )
            }

            export default Slider;