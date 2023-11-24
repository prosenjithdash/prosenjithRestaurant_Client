import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../../../Components/CallUs/CallUs';
import ProsenjithRestaurant from '../../../Components/ProsenjithRestaurant/ProsenjithRestaurant';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <div>
                <Helmet prioritizeSeoTags>
                    <title>Q.M.R| Home</title>
                </Helmet>
            </div>
            <Banner></Banner>
            <Category></Category>
            <ProsenjithRestaurant></ProsenjithRestaurant>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;