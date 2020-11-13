import React from 'react'
import Nav from './Nav'
import './App.css'


export default function Home(pizza) {
           console.log('pizza in Home: ', pizza) 
        //    debugger
    return (
        
           
<div>
            <Nav />
                <h1>Welcome to Lambda Eats</h1>
                <h2>Currently Cooking...</h2>
            
            
    <div className= 'pizza'>
        <h2>{(!pizza.details.cname) ? '' : pizza.details.cname}'s Pizza</h2>
        <p>Size: {(pizza.details.size === 'sm') ? 'Small' : (pizza.details.size === 'md') ? 'Medium' : (pizza.details.size === 'lg') ? 'Large' : (pizza.details.size === 'xl') ? 'Jumbo' : 'Select A Size' }</p>
        <p>Sauce: {(pizza.details.sauce === 'orig') ? 'Original Red Sauce' : (pizza.details.sauce === 'gar') ? 'Garlic Ranch Sauce' : (pizza.details.sauce === 'bbq') ? 'Sweet BBQ Sauce' : (pizza.details.sauce === 'alf') ? 'Spinach Alfredo Sauce' : (pizza.details.sauce === 'dry') ? 'Hold the Sauce' : 'Choose Your Sauce'}</p>
        <p>Crust: {pizza.details.gluFre ? 'Gluten Free' : 'Standard Crust'}</p>
        <h4>Toppings</h4>
        <p>{pizza.details.pep ? 'Pepperoni' : ''}</p>
        <p>{pizza.details.saus ? 'Sausage' : ''}</p>
        <p>{pizza.details.canBac ? 'Canadian Bacon' : ''}</p>
        <p>{pizza.details.spiSaus ? 'Spicy Italian Sausage' : ''}</p>
        <p>{pizza.details.chix ? 'Grilled Chicken' : ''}</p>
        <p>{pizza.details.oni ? 'Onions' : ''}</p>
        <p>{pizza.details.grnPep ? 'Green Peppers' : ''}</p>
        <p>{pizza.details.tom ? 'Diced Tomatos' : ''}</p>
        <p>{pizza.details.oliv ? 'Black Olives' : ''}</p>
        <p>{pizza.details.rstGar ? 'Roasted Garlic' : ''}</p>
        <p>{pizza.details.artHrt ? 'Artichoke Hearts' : ''}</p>
        <p>{pizza.details.chz3 ? 'Three Cheese' : ''}</p>
        <p>{pizza.details.pine ? 'Pineapple' : ''}</p>
        <p>{pizza.details.xtra ? 'Extra Cheese' : ''}</p>
        
                
            <div>{
                
                    <div>
                        <h4>Special Instructions</h4> 
                        <p>{pizza.details.spec}</p>
                    </div>
            }</div>
    </div>
    </div>
)
}

