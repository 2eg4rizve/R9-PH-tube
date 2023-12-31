/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { BigContext } from "../../providers/Bigproviders";


const Cards = () => {

    const { category_id } = useParams();

    const [cards, setCards] = useState([]);

    const {nowCategory, setNowCategory} =useContext(BigContext);
    setNowCategory(category_id)

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
            .then(res => res.json())
            .then(data => setCards(data.data))
    }, [category_id])


    console.log(cards);
    // console.log(cards.length);



    return (
        <div className="border-[2px] border-green-500 py-[20px] mt-[20px]">

            <p>Category id:  {category_id}</p>
            <p>Cards:  {cards.length}</p>

            <div className="grid grid-cols-3 gap-5">
                {
                    cards.map((card, idx) => <Card key={idx} card={card} > </Card>)
                }
            </div>




        </div>
    );
};

export default Cards;