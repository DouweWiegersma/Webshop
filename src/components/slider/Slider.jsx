import product1 from '../../assets/image-product-1.jpg'
import product2 from '../../assets/image-product-2.jpg'
import product3 from '../../assets/image-product-3.jpg'
import product4 from '../../assets/image-product-4.jpg'
import Previous from '../../assets/icon-previous.svg?react'
import Next from '../../assets/icon-next.svg?react'

function Slider(){


    return(
        <>
            <button><Previous/></button>
            <button><Next/></button>
            <img src={product1} alt='product'/>
            <img src={product2} alt='product'/>
            <img src={product3} alt='product'/>
            <img src={product4} alt='product'/>


        </>
    )
}

export default Slider;