import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import LatestCollection from '../components/LatestCollection';
import BestSellers from '../components/BestSellers';
import Policy from '../components/Policy';
import NewsLetterBox from '../components/NewsLetterBox';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-10"> {/* Add padding to avoid overlap with the navbar */}
        <Hero />
        <LatestCollection />
        <BestSellers />
        <Policy />
        <NewsLetterBox />
        
      </div>
    </div>
  );
}

export default Home;
