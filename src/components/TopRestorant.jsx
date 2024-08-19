import {useEffect, useState} from 'react'
import { RxArrowRight, RxArrowLeft } from 'react-icons/rx'
import Card from './Card'


function TopRestorant() {

const [data, setData] = useState([]);
const [slide, setSlide] = useState(0);

    async function fetchData() {
        let responce = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const apidata = await responce.json();
        // console.log(apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setData(apidata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, [])

  
    const onNextBtn = () => {
        if(slide == 0) return false;
        setSlide((value) => value + 49);
        // console.log(slide);
        // console.log(slide + 49)
        
        
    }

    const onPrevBtn = () => {
        if(slide == -392) return false;
        setSlide((value) => value - 49);
        // console.log(slide);
        // console.log(slide - 49)
    }
  return (
    <div className='mt-4 max-w-[1200px] mx-auto'>
            <div className='mb-4 max-sm:mx-3 flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>Top restaurant chains in Nagpur</h1>
                <div className='flex gap-3'>
                    <button className="flex justify-center items-center w-8 h-8 bg-[#02060c26] rounded-full" onClick={onNextBtn}>
                        <RxArrowLeft />
                    </button>
                    <button className="flex justify-center items-center w-8 h-8 bg-[#02060c26] rounded-full" onClick={onPrevBtn}>
                        <RxArrowRight />
                    </button>
                </div>
            </div>
            <div className=' overflow-hidden max-sm:ml-2' >
                <div className={'flex gap-5 duration-500'} style={{
                    translate: `${slide}%`
                }}>
                    {data.map(({info}) => (
                        <Card {...info} key={info?.id}/>
                        ))}
                    {/* <Card/> */}
                </div>
            </div>
            <hr className='my-11 border-[1px]'/>
    </div>
  )
}

export default TopRestorant