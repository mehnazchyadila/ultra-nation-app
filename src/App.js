import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries , setCountries]= useState([]);
  const [cart, setCart] = useState([]);

  const handleAddCountry = (country) => {
    // console.log("Country Added" , country);
    const newCart = [...cart , country];
    setCart(newCart);
};

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
     .then(res => res.json())
     .then(data => {
       setCountries(data)
        console.log(data);
        const names =  data.map(country => country.name);
        console.log(names);
      })
  } , [])

  return (
    <div className="App">
      <Header></Header>
      <h1>Country Loaded : {countries.length}</h1>
      <h4>Country Added : {cart.length}</h4>
      <Cart cart = {cart}></Cart>
        {
          countries.map(country => <Country country = {country} handleAddCountry= {handleAddCountry} key= {country.alpha3Code}></Country>)
        }


    </div>
  );
}

export default App;
