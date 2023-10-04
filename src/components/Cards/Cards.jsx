/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";


const Cards = () => {

    const { category_id } = useParams();

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
            .then(res => res.json())
            .then(data => setCards(data.data))
    }, [category_id])


    console.log(cards);
    // console.log(cards.length);



    return (
        <div>

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