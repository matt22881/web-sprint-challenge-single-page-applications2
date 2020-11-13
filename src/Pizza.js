import React from 'react'
import Nav from './Nav'


 

function Pizza( { details } ) {
  if (!details) {
    return <h3>Working fetching your pizza pizza...</h3>
  }
console.log('pizza: ', details)
// debugger
return (
<div>
    <Nav />

    <div className= 'pizza'>
        <h2>{(!details.cname) ? '' : details.cname}'s Pizza</h2>
        <p>Size: {(details.size === 'sm') ? 'Small' : (details.size === 'md') ? 'Medium' : (details.size === 'lg') ? 'Large' : (details.size === 'xl') ? 'Jumbo' : 'Kitchen is Open' }</p>
        <p>Sauce: {(details.sauce === 'orig') ? 'Original Red Sauce' : (details.sauce === 'gar') ? 'Garlic Ranch Sauce' : (details.sauce === 'bbq') ? 'Sweet BBQ Sauce' : (details.sauce === 'alf') ? 'Spinach Alfredo Sauce' : (details.sauce === 'dry') ? 'Hold the Sauce' : 'Place Your Order'}</p>
        <p>Crust: {details.gluFre ? 'Gluten Free' : 'Standard Crust'}</p>
        <h4>Toppings</h4>
        <p>{details.pep ? 'Pepperoni' : ''}</p>
        <p>{details.saus ? 'Sausage' : ''}</p>
        <p>{details.canBac ? 'Canadian Bacon' : ''}</p>
        <p>{details.spiSaus ? 'Spicy Italian Sausage' : ''}</p>
        <p>{details.chix ? 'Grilled Chicken' : ''}</p>
        <p>{details.oni ? 'Onions' : ''}</p>
        <p>{details.grnPep ? 'Green Peppers' : ''}</p>
        <p>{details.tom ? 'Diced Tomatos' : ''}</p>
        <p>{details.oliv ? 'Black Olives' : ''}</p>
        <p>{details.rstGar ? 'Roasted Garlic' : ''}</p>
        <p>{details.artHrt ? 'Artichoke Hearts' : ''}</p>
        <p>{details.chz3 ? 'Three Cheese' : ''}</p>
        <p>{details.pine ? 'Pineapple' : ''}</p>
        <p>{details.xtra ? 'Extra Cheese' : ''}</p>
        
                   
            <div>{
                
                    <div>
                        <h4>Special Instructions</h4> 
                        <p>{details.spec}</p>
                    </div>
            }</div>
       
    </div></div>
  )
}

export default Pizza
                    