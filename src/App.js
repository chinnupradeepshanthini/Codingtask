
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Productdetail from './Components/Product-detail';
import { useState } from 'react';
import Similarproduct from './Components/Similarproducts/Similarproducts';
import RecentlyViewed from './Components/Similarproducts/Recentlyviewedproduvt';
import Footer from './Components/Footer/Footer';
import Subscribe from './Components/Footer/Subscribe';
import Socialmedia from './Components/Footer/Socialmedia';

function App() {
  const[count,setCount]=useState(0);
  const addtocartClick=()=>{
    setCount(count+1);
  }
  return (
    <>
    <Header count={count}/>
    <Productdetail addtocartfun={addtocartClick}/>
    <Similarproduct/>
    <RecentlyViewed/>
    <Subscribe/>
    <Socialmedia/>
    <Footer/>
    </>
  );
}

export default App;
