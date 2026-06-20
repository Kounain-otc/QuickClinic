import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from './../components/TopDoctors';
import Banner from '../components/Banner';
import Testimonials from './../../Testimonial';

const Home = () => {
  return (
    <div className="space-y-20 pt-6">
      <Header ></Header>
      <SpecialityMenu />
      <TopDoctors />
      <Banner></Banner>
      <Testimonials />
    </div>
  )
}

export default Home