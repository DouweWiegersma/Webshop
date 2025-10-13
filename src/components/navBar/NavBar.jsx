import Menu from '../../assets/icon-menu.svg?react'
import Cart from '../../assets/icon-cart.svg?react'
import Title from '../../assets/logo.svg?react'
import avatar from '../../assets/image-avatar.png'
function NavBar(){


    return(

        <>

            <nav className='flex flex-row w-screen h-16 justify-evenly items-center border-2 border-black-400'>
                <div className='flex flex-row items-center ml-6 w-64 gap-4'>
            <button><Menu/></button>
            <Title/>
                </div>

                <div className='flex flex-row items-center w-full ml-24 gap-6'>
            <button><Cart/></button>
            <img src={avatar} alt='avatar' className='w-6 h-6' />
                </div>
            </nav>
        </>
    )
}

export default NavBar;