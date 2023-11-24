import { FaCalendar, FaCartPlus, FaFileContract, FaList } from "react-icons/fa6";
import { FaAd, FaHome, FaSearch } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";

const Deshboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4">
                    <li>

                        <NavLink to='/dashboard/userHome'><FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        
                        <NavLink to='/dashboard/cart'><FaCartPlus></FaCartPlus>
                            My Cart</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/review'><FaAd></FaAd>
                            Add a review</NavLink>
                    </li>
                    <li>

                        <NavLink to='/dashboard/bookings'><FaList></FaList>
                            My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'><FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'><FaList></FaList>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/orderFood/:category'><FaSearch></FaSearch>
                            Order Food</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactUs'><FaFileContract></FaFileContract>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;