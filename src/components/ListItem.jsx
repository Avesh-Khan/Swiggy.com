import { useState, useEffect } from 'react'
import { RxArrowLeft } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";

function ListItem() {
    const [category, setCategory] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchData() {
        let responce = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.11610&lng=79.07060&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await responce.json();
        // console.log(data);
        setCategory(data?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        // console.log(category);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onNextBtn = () => {
        console.log(category.length - 8);
        console.log(count - 3)
        if(count == -12) return false 
        setCount(count - 3);
    }

    const onPrevBtn = () => {
        if(count == 0) return false;
        setCount(count + 3)
    }


    return (
        <div className='mt-4 max-w-[1200px] mx-auto'>
            <div className='flex items-center mx-3 justify-between'>
                <h1 className='font-bold text-xl md:text-2xl'>Avesh, what's on your mind?</h1>
                <div className='flex gap-3'>
                    <button className="flex justify-center items-center w-8 h-8 bg-[#02060c26] rounded-full" onClick={onPrevBtn}>
                        <RxArrowLeft />
                    </button>
                    <button className="flex justify-center items-center w-8 h-8 bg-[#02060c26] rounded-full" onClick={onNextBtn}>
                        <RxArrowRight />
                    </button>
                </div>
            </div>
            <div className='flex overflow-hidden'>
                {category.map((item) => {
                    return (
                        <div style={{
                            transform: `translateX(${count * 100}%)`
                        }} key={item.id} className='h-[190px] w-[150px] shrink-0 duration-500' >
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt={item.description} />
                        </div>
                    )
                })}
            </div>
            <hr className='my-11 border-[1px]'/>
        </div>
    )
}

export default ListItem