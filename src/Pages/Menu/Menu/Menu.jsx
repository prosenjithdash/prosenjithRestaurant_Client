import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover'
import menu_img from '../../../assets/menu/banner3.jpg'
import dessert_img from '../../../assets/menu/dessert-bg.jpeg'
import pizza_img from '../../../assets/menu/pizza-bg.jpg'
import soup_img from '../../../assets/menu/soup-bg.jpg'
import salad_img from '../../../assets/menu/salad-bg.jpg'



import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const offereds = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');


    return (
        <div>
            <Helmet prioritizeSeoTags>
                <title>Q.M.R | Menu</title>
            </Helmet>
            {/* Main Cover */}
            <Cover bg_img={menu_img} title='Our Menu' about={'At Quick Menu Restaurent, we believe that dining is an experience that should indulge all the senses. Our carefully curated menu blends culinary innovation with the finest, locally sourced ingredients to bring you a dining journey like no other. From appetizers that tantalize your taste buds to decadent desserts that leave a lasting impression, every dish tells a story of passion, flavor, and dedication.'}></Cover>

            <div>

                <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>

                {/* Offered Menu Items */}
                <MenuCategory items={offereds}></MenuCategory>

                {/* Dessert Menu Items */}
                <MenuCategory 
                items={desserts}
                coverImg={dessert_img}
                    title={'dessert'}
                    about={'we believe that every meal should end on a sweet note, and our dessert menu is designed to transport you to a world of indulgence and delight. Our talented pastry chefs have crafted a selection of desserts that are as visually stunning as they are delicious, using only the finest ingredients to create memorable and exquisite sweet experiences.'}
                    
                ></MenuCategory>

                {/* Pizza Menu Items */}
                 <MenuCategory 
                items={pizzas}
                coverImg={pizza_img}
                    title={'pizza'}
                    about={'where our passion for pizza is reflected in every slice we serve. Our artisanal pizzas are crafted with the finest ingredients and a dedication to traditional Italian techniques, resulting in a mouthwatering experience that transports you to the heart of Italy.'}
                ></MenuCategory>

                {/* Soup Menu Items */}
                 <MenuCategory 
                items={soups}
                coverImg={soup_img}
                    title={'soup'}
                    about={'we believe that a bowl of soup has the power to comfort, nourish, and transport you to a world of flavors. Our soups are crafted with care, using the finest ingredients and time-honored recipes to create a culinary experience that warms both the body and the soul'}
                ></MenuCategory>

                {/* Salad Menu Items */}
                <MenuCategory 
                items={salads}
                coverImg={salad_img}
                    title={'salad'}
                    about={'we believe that a well-crafted salad is a celebration of fresh, seasonal ingredients and a symphony of flavors and textures. Our salads are more than just a side dish – they are a culinary journey that takes you on a vibrant and wholesome adventure.'}
                ></MenuCategory>

            </div>
           

            
        </div>
    );
};

export default Menu;