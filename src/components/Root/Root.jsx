
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'> 

            <Navbar ></Navbar>
            <Home></Home>
            <Cards></Cards>

           
            
        </div>
    );
};

export default Root;