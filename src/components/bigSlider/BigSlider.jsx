import product1 from '../../assets/image-product-1.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product4 from '../../assets/image-product-4.jpg'
import previewImg1 from '../../assets/image-product-1-thumbnail.jpg'
import previewImg2 from '../../assets/image-product-2-thumbnail.jpg'
import previewImg3 from '../../assets/image-product-2-thumbnail.jpg'
import previewImg4 from '../../assets/image-product-2-thumbnail.jpg'
import Next from '../../assets/icon-next.svg?react'
import Prev from '../../assets/icon-previous.svg?react'
import Cross from '../../assets/icon-close.svg?react'
import {useState} from "react";
function BigSlider({handlePreview}){

    const images = [product1, product2, product3, product4]
    const [current, setCurrent] = useState(0)


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
            <div className='relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <button onClick={handlePreview} className='absolute top-20 left-[95%] text-orange-500'> <Cross /></button>
                <div className='absolute z-40 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                    <button onClick={previous} className='absolute z-40 flex top-1/2 rounded-full h-8 w-8 bg-white items-center justify-center'><Prev className='z-50'/></button>
                    <img src={images[current]} alt='shoes' className='relative w-72 rounded-lg'/>
                    <button onClick={next} className='z-40 absolute top-1/2 flex right-0 rounded-full h-8 w-8 items-center justify-center bg-white'><Next className='z-50'/></button>

                </div>

                <div className='flex gap-2 relative top-[80%]'>
                    <button onClick={() => setCurrent(0)}><img src={previewImg1} alt='previewImg'
                                                               className='w-16 mt-4 rounded'/></button>
                    <button onClick={() => setCurrent(1)}><img src={previewImg2} alt='previewImg'
                                                               className='w-16 mt-4 rounded'/></button>
                    <button onClick={() => setCurrent(2)}><img src={previewImg3} alt='previewImg'
                                                               className='w-16 mt-4 rounded'/></button>
                    <button onClick={() => setCurrent(3)}><img src={previewImg4} alt='previewImg'
                                                               className='w-16 mt-4 rounded'/></button>
                </div>

            </div>


        </>
    )
}

export default BigSlider;
