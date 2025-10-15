import Menu from '../../assets/icon-menu.svg?react'
import Cart from '../../assets/icon-cart.svg?react'
import Title from '../../assets/logo.svg?react'
import avatar from '../../assets/image-avatar.png'
import Cross from '../../assets/icon-close.svg?react'

function NavBar({setOpen, open, items, menuOpen, toggleMenuOpen, handleClick}){

    // function handleClick(){
    //     if (open === true) setOpen(false)
    //     else{
    //         setOpen(true)
    //     }
    // }



        function openMenu(){
        if (menuOpen === false) toggleMenuOpen(true)
            else{
                toggleMenuOpen(false)
        }
        }

    return(

        <>

            <div className='flex flex-row w-screen h-16 justify-around items-center relative'>


                <div className='flex flex-row gap-4 justify-self-start items-center md:hidden'>

                    <button onClick={openMenu} className='z-50 absolute left-0 pl-10'>{menuOpen ? <Cross/> :
                        <Menu/>}</button>
                    {menuOpen &&
                        <nav className='flex justify-start'>
                            <ul className="flex flex-col w-2/3 gap-6 pt-24 pl-10 h-screen top-0 absolute -left-1 overflow-hidden z-40 bg-white font-bold">
                                <li>Collections</li>
                                <li>Men</li>
                                <li>Woman</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>}
                </div>
                <Title className='block md:hidden'/>


                <div className='hidden md:block'>
                <nav className='w-screen flex justify-center'>

                    <ul className='flex flex-row justify-evenly w-11/12 border-b h-24 items-center'>
                        <li><Title/></li>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Woman</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><button onClick={handleClick} className='flex flex-col relative h-6 justify-center '> <span><Cart/></span>{items === 0 ?
                            <span> </span> : <span
                                className='absolute left-3 mb-6 text-xs bg-orange-400 rounded-lg w-5 font-bold text-white'>{items}</span>} </button> </li>
                        <li><img src={avatar} alt='avatar' className='w-6 h-6'/></li>
                    </ul>
                </nav>
                </div>


                <div className='flex flex-row items-center justify-self-end gap-4 md:hidden'>
                    <button onClick={handleClick} className='flex flex-col relative h-6 justify-center'><span> <Cart/> </span>{items === 0 ?
                        <span> </span> : <span
                            className='absolute left-3 mb-6 text-xs bg-orange-400 rounded-lg w-5 font-bold text-white'>{items}</span>}
                    </button>
                    <img src={avatar} alt='avatar' className='w-6 h-6'/>
                </div>
            </div>
        </>
    )
}

export default NavBar;