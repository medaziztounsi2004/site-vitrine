import React from 'react';
import Hero from '../Components/Hero/Hero';
import CategoryBanner from '../Components/CategoryBanner/CategoryBanner';
import Popular from '../Components/Popular/Popular';
import About from '../Components/About/About';
import NewCollections from '../Components/NewCollections/NewCollections';
import Testimonials from '../Components/Testimonials/Testimonials';
import NewsLetter from '../Components/NewsLetter/NexsLetter';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Shop = () => {
    useScrollAnimation();
    
    return (
        <div>
            <Hero/>
            <CategoryBanner/>
            <Popular/>
            <About/>
            <NewCollections/>
            <Testimonials/>
            <NewsLetter/>
        </div>
    )
}

export default Shop
