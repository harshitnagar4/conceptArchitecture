import React from 'react'
import Aboutus from './components/Aboutus/Aboutus'
import HeaderSection1 from './components/Header/HeaderSection1'
import HeaderSection2 from './components/Header/HeaderSection2'
import ImageSlider from './components/imageslider/ImageSlider'
import Ourservices from './components/ourservices/Ourservices'
import SecondSection from './components/secondsection/SecondSection'

const App = () => {
  return (
    <>
    <HeaderSection1/>
    <HeaderSection2/>
    <ImageSlider/>
    <SecondSection/>
    <Ourservices/>
    <Aboutus/>
    </>
  )
}

export default App