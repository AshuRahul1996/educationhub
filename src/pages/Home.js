import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import TopNavBar from '../Components/TopNavBar'
import NavBar from '../Components/NavBar'

import CategoryDisplay from '../Components/CategoryDisplay'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/Feature/productSlice'

const Home = () => {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])

  return (
    <>
      {/* <h1>asdbhasdjhdjdj</h1> */}
     <TopNavBar/>
    <NavBar/>
     <HeroSection/> 
     {/* <CategoryDetails/> */}
     <CategoryDisplay/>


    </>
  )
}

export default Home