import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg, about}) => {
    return (
        <div className="">

            {title && <Cover bg_img={coverImg} title={title} about={about}></Cover>
            }
             <div className="grid md:grid-cols-2 gap-4 mt-16">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <Link to={`/orderFood/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 text-orange-600 text-xl">ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;