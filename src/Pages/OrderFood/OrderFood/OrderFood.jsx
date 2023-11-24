import { useState } from 'react';
import orderFoodImg from'../../../assets/shop/order.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {

    const categories = ['pizza', 'soup', 'salad', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const drinks = menu.filter(item => item.category === 'drinks');
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');

    return (
        <div>
             <Helmet prioritizeSeoTags>
                <title>Q.M.R| Order Food</title>
            </Helmet>
            <Cover
                bg_img={orderFoodImg}
                title={'Order Food'}
                about={'At Quick Made Restaurent, we are dedicated to providing a seamless and enjoyable ordering process. Whether it is a casual weeknight dinner , a special celebration, or a corporate event, we look forward to serving you with the finest culinary creations.Thank you for choosing Quick Made Restaurent!'}>

            </Cover>
            <div className=''>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                
                    <TabList>
                        
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    
                    </TabList>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;