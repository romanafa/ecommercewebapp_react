import React from 'react';
import {Footer, Header} from '../Components/Layout';
import { useState, useEffect } from 'react';

function App() {

// use state with default array
const [products, setProducts] = useState([]);

// use effect to fetch data from api
useEffect(() => {
  fetch("https://ecommercewebappapi.azurewebsites.net/api/Product")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })  
}, []);


  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
