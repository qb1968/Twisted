import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import HomeTwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
import AboutUs from '../components/AboutUs/Main'
import Service from '../components/Service/Main'
import ServiceDetails from '../components/Service/ServiceDetails/Main'
import Gallery from '../components/Pages/Gallery/Main'
import Gallery2 from '../components/Pages/Gallery/Main2'
import Gallery3 from '../components/Pages/Gallery/Main3'
import Gallery4 from '../components/Pages/Gallery/Main4'
import Gallery5 from '../components/Pages/Gallery/Main5'
import Gallery6 from '../components/Pages/Gallery/Main6'
import Pricing from '../components/Pages/Pricing/Main'
import Faq from '../components/Pages/Faq/Main'
import Team from '../components/Pages/Team/Main'
import TeamDetails from '../components/Pages/TeamDetails/Main'
import Shop from '../components/Pages/Shop/Main'
import ShopDetails from '../components/Pages/ShopDetails/Main'
import Blog from '../components/BlogMain/Blog/Main'
import BlogDetails from '../components/BlogMain/BlogDetails/Main'
import Contact from '../components/Contact/Main'
import Loading from '../components/loading/index'


const Routing = () => {

  const [homepage, sethomepage] = useState(false)

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    if (location.pathname === "/home-three") {
      sethomepage(false)
    } else {
      sethomepage(true)
    }
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <>
      {homepage && <Navbar />}
      <Routes>
        
      
      
        
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/about" element={<AboutUs />} />
       
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery2" element={<Gallery2/>}/>
        <Route path="/gallery3" element={<Gallery3/>}/>
        <Route path="/gallery4" element={<Gallery4/>}/>
        <Route path="/gallery5" element={<Gallery5/>}/>
        <Route path="/gallery6" element={<Gallery6/>}/>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  )
}

export default Routing
