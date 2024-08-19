import {useEffect, useState} from 'react'
import Card from './Card';

function OnlineDelivery() {
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

    let button = [
        {
            name: "filter",
        },
        {
            name: "Sort By",
        },
        {
            name: "Fast Delivery",
        },
        {
            name: "New On Swiggy",
        },
        {
            name: "Ratings 4.0+",
        },
        {
            name: "Pure Veg",
        },
        {
            name: "Offers",
        },
        {
            name: "Rs. 300-Rs. 600",
        },
        {
            name: "Less Than Rs. 300",
        },
    ]
    return (
        <div className='mt-5 max-w-[1200px] mx-auto'>
            <div className='mb-3 flex items-center justify-between'>
                <h1 className='font-bold text-xl max-sm:ml-2 md:text-2xl'>Restaurants with online food delivery in Nagpur</h1>
            </div>
            <div className='mb-8'>
                <div className=' hidden md:flex items-center text-[15px] text-[#3d4152] gap-6 font-medium tracking-tighter'>
                   {button.map((val, i) => (
                     <div key={i} className='md:px-3 max-sm:px-3 py-1 shadow-xl border-[1px] border-gray-400 rounded-[14px] cursor-pointer'>{val.name}</div>
                   ))}
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3'>
                {data.map(({info}) => {
                    return <Card {...info} key={info?.id} />
                })}
            </div>
            <hr className='my-11 border-[1px]'/>
        </div>
    )
}

export default OnlineDelivery;