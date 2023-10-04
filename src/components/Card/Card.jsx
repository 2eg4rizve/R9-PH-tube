/* eslint-disable react/prop-types */


const Card = ({ card }) => {
    const { thumbnail, title ,others} = card
    return (
        <div className="h-[400px]">

            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className="h-[200px] w-full" src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{others.views} views</h2>
                     
                   
                </div>
            </div>

        </div>
    );
};

export default Card;