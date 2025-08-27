"use client"
import React from 'react'
import CardProduct from '../componets/card'
import SwiperSlider from '../componets/banner_Swiper'
import Brand from '../componets/Brands';
// import Hello from '../componets/hello';
import Feedback from "../componets/Feedback";
import HFeedback from '../componets/finalfeedback';
import Products from "../componets/products";
const Homepage = () => {
  return (
    <>
      {/* <SwiperSlider /> */}
      <CardProduct />
      <Brand />
      <Products />
      <Feedback />
    </>
  )
}

export default Homepage

// racfe