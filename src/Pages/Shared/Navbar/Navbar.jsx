import { Link } from "react-router-dom";
import logo from'../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

// import { FaBeer } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/orderFood/pizza'>Order Food</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>
        {/* <li><Link to='/secret'>Secret</Link></li> */}

        
        {/* {
            user ? <>
                
                <button onClick={handleLogOut} className="ml-2">LogOut</button>

            </> :
                <>
                    <li><Link to='/logIn'>LogIn</Link></li>
                </>
        } */}

        <li >
            <Link to='/dashboard/cart'>
                <button className="flex items-center ml-2">
                    <FaCartPlus className="mr-2 text-base" />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>




    </>
    return (
        <div>
            <div className="navbar fixed z-40 bg-opacity-20 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                    </div>
                    <div className="flex ">
                        <img className="w-[40px] h-[40px]" src={logo} alt="" />
                        <a className="btn btn-ghost text-xl">Quick Made Restaurant</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn text-white">GET STARTED</a> */}
                    {
                        user ? <>

                            <button onClick={handleLogOut} className="ml-2 btn btn-outline btn-warning py-1">LogOut</button>

                        </> :
                            <>
                                <li className="btn btn-outline btn-warning"><Link to='/logIn'>GET STARTED</Link></li>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;