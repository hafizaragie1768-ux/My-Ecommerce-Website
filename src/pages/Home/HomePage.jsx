import axios from 'axios';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';
import { useEffect, useState } from 'react';



export function HomePage({cart,loadCart}){ 
  const[products,setProducts]= useState([]);
  

  useEffect(()=>{
    const getHomedata= async()=>{
    const response= await axios.get('/api/products');
      setProducts(response.data);
    };

    getHomedata();
  },[]);
  
    return(
    <>

    <title>Ecommerce Project</title>
    
    <Header cart={ cart }/>
 
    <div className="home-page">
      <ProductsGrid products={products} loadCart={loadCart}/>
    </div>
    </>
    );
}