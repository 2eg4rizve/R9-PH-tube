import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";


const Sorting = () => {
    const { category_id } = useParams();

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)
            .then(res => res.json())
            .then(data => setCards(data.data))
    }, [category_id])

    cards.sort((a, b) => {
        const viewsA = parseInt(a.others.views.replace('K', '000'));
        const viewsB = parseInt(b.others.views.replace('K', '000'));

        return viewsB - viewsA;
    }


    )
    return (
        <div>

            {
                <div className="grid grid-cols-3 gap-5">
                    {
                        cards.map((card, idx) => <Card key={idx} card={card} > </Card>)
                    }
                </div>
            }

        </div>
    );
};

export default Sorting;