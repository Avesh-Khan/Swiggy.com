import React from 'react'
import { PiCaretDownBold } from "react-icons/pi";
import { TbCurrentLocation } from "react-icons/tb";
import { CgSmartHomeCooker } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { TbRosetteDiscount } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { PiNumberSquareZero } from "react-icons/pi";

function Header() {
    const [toggle, setToggle] = React.useState(false)


    const onhandletoggle = () => {
        console.log("hello");
        setToggle(true);

    }

    const onfalseToggle = () => {
        setToggle(false);
    }

    const navName = [
        {
            icon: <CgSmartHomeCooker className='text-xl'/>,
            name: "Swiggy Corporate"
        },
        {
            icon: <LuSearch className='text-xl'/>,
            name: "Search"
        },
        {
            icon: <TbRosetteDiscount className='text-xl'/>,
            name: "Offers",
            sup: "NEW"
        },
        {
            icon: <IoHelpBuoyOutline className='text-xl'/>,
            name: "Help"
        },
        {
            icon: <RiContactsLine className='text-xl'/>,
            name: "Profile"
        },
        {
            icon: <PiNumberSquareZero className='text-xl'/>,
            name: "Cart"
        },
    ]
    return (
        <>
            <div className='slidePage w-full h-full duration-[400ms] fixed' onClick={onfalseToggle} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
                zIndex: toggle ? 9999999 : 0,

            }}>
                <div className='w-[250px] md:w-[570px] h-full z-30 duration-[400ms] bg-white absolute' onClick={(e) => {
                    e.stopPropagation()
                }} style={{
                    left: toggle ? '0%' : '-100%'
                }}
                >
                    <div className='mx-5 md:ml-40 pt-16'>
                        <input type="text" className='shadow-lg px-4 py-3 w-full md:w-[80%] outline-none  border-2 font-medium mb-3' placeholder='Search for area, street name..' />
                        <div className='border-2 mt-5 w-full md:w-[80%] p-4'>
                            <div className='flex items-center text-[#3d4152]'>
                                <TbCurrentLocation />
                                <span className='pl-2 font-semibold text-[15px] cursor-pointer hover:text-[#ff5200]'>Get Current location</span>
                            </div>
                            <span className='text-[#3d4152] text-[13px] font-thin pl-[23px]'>Using GPS</span>
                        </div>
                    </div>
                </div>
            </div>
            <header className='p-3 shadow-xl w-full h-full sticky z-[9999] bg-white top-0 left-0'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='max-w-[100px] '>
                        <img src="images/logo.jpg" className='w-full' alt="" />
                    </div>
                    <div>
                        <span className='border-b-2 font-bold text-xl md:text-[14px] text-[#3d4152] cursor-pointer border-[#3d4152] hover:text-[#ff5200] hover:border-[#ff5200] mx-2'>Other</span>
                        <PiCaretDownBold onClick={onhandletoggle} className='inline text-[#ff5200] font-extrabold cursor-pointer text-xl' />
                    </div>
                    <nav className='hidden md:flex list-none gap-2 md:gap-14 text-[#3d4152] md:ml-auto'>
                        {navName.map((name, index) => (
                            <li key={index} className='flex items-center gap-2 font-medium hover:text-[#ff5200] cursor-pointer'>
                            {name.icon}
                            {name.name}
                            <sup className='text-[#ffa700] font-bold text-[10px]'>{name.sup}</sup>
                        </li>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header