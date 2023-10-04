/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BigContext } from "../../providers/Bigproviders";


const Navbar = () => {

    const {nowCategory, setNowCategory} =useContext(BigContext);

    return (
        <div className="my-[20px] text-center border-2 border-red-500 py-[20px]">

            {/* {nowCategory}  */}

             <p className="text-center my-[20px]">  nowCategory : {nowCategory}</p>

            <Link>
                <button className="btn btn-primary">Sort by view</button>
            </Link>

        </div>
    );
};

export default Navbar;