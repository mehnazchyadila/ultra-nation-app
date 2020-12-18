import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props)
    const {name , flag, capital, population} = props.country;
    const handleAddCountry = props.handleAddCountry
    return (
        <div className="container">
            <div className="flag">
            <img className="flag" src={flag} alt=""/>
            </div>
            <div className="country">
            <h2>Country Name : {name}</h2>
            <h4>Capital Name : {capital}</h4>
            <h4>Population : {population}</h4>
            <button onClick= {() => handleAddCountry(props.country)}>Add Country</button>
            </div>
            
            


        
        </div>

        
    );
};

export default Country;