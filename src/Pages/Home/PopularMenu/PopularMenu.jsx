import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    //useHook
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    //withOutUse Hook

    // const [menu, setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('Menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // },[])

    return (
        <div className="my-10">
            <SectionTitle
            subHeading={'Popular Items'}
            heading={'From Our Menu'}         
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>

            <div className="text-center my-4">
                <Link to='/menu'><button className="btn btn-outline border-0 border-b-4 text-white ">View All Menu</button></Link>
            </div>
            
        </div>
    );
};

export default PopularMenu;