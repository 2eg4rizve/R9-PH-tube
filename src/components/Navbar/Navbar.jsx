import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="my-[20px] text-center">

             

            <Link>
                <button className="btn btn-primary">Sort by view</button>
            </Link>

        </div>
    );
};

export default Navbar;