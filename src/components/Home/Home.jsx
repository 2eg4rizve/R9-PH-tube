/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";

import {  NavLink } from "react-router-dom";
import { BigContext } from "../../providers/Bigproviders";

const Home = () => {
    const [videos, setVideos] = useState([]);

    

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/videos/categories")
            .then(res => res.json())
            .then(data => setVideos(data.data))

    }, [])

    // console.log(videos[0]);

   



    return (
        <div className="text-center border-[2px] border-blue-500 py-[20px]">

            
             

            {
                videos.map(category=>
                    <NavLink
                    to={`/category/${category.category_id}`}
                    key={category.category_id}
                    className={({ isActive, isPending })  =>
                    isPending ? "pending" : isActive ? "text-[#FF444A] underline p-2" : "p-2"}

                  
               
                    >

                        {category.category}
                    </NavLink>

                )
            }






        </div >
    );
};

export default Home;