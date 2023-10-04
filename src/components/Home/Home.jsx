/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import {  NavLink } from "react-router-dom";

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/videos/categories")
            .then(res => res.json())
            .then(data => setVideos(data.data))

    }, [])

    // console.log(videos[0]);

   



    return (
        <div className="text-center">

            
             

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