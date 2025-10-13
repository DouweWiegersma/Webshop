import Menu from '../../assets/icon-menu.svg?react'
import Cart from '../../assets/icon-cart.svg?react'
import Title from '../../assets/logo.svg?react'
import avatar from '../../assets/image-avatar.png'
function NavBar({setOpen, open}){

    function handleClick(){
            if (open === true) setOpen(false)
            else{
                setOpen(true)
            }
        }

    return(

        <>

            <nav className='flex flex-row w-screen h-16 justify-around items-center border-2 border-black-400'>
                <div className='flex flex-row gap-4 justify-self-start'>
            <button><Menu/></button>
            <Title/>
                </div>

                <div className='flex flex-row items-center justify-self-end gap-4'>
            <button onClick={handleClick}><Cart/></button>
            <img src={avatar} alt='avatar' className='w-6 h-6' />
                </div>
            </nav>
        </>
    )
}

export default NavBar;