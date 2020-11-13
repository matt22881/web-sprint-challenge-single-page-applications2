import React from 'react'
import Pizza from './Pizza'
import Nav from './Nav'

export default function Form(props) {
// debugger
    const { pizza, values, submit, change, disabled, errors } = { ...props }
// debugger


  const onChange = (e) => {
        const { name, value, type, checked } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    // {if (!values) return null}

    return (
        <div classname='pizzaform container'>
            <Nav />
            <header className='header'>
                <h1>Build Your Own Pizza</h1>
            </header>
            <h3>Build your Pizza</h3>
            <form>
                <label>
                    <h4>Customer Name</h4>
                    <h6>required</h6>
                    <input
                    value={values.cname}
                    name='cname'
                    type='text'
                    onChange={onChange}
                    placeholder= 'Your Name'
                    />
                </label>
                <h4>Choice of size.</h4>
                <h6>required</h6>
                <div className='sizes'><span>Small: $8.00</span><span>Medium: $10.00</span><span>Large $12.00</span><span>Jumbo $15.00</span></div>
                <select onChange={onChange} value={values.size} name='size'>
                    <option value = ''>---Choose your size---</option>
                    <option value = 'sm'>Small</option>
                    <option value = 'md'>Medium</option>
                    <option value = 'lg'>Large</option>
                    <option value = 'xl'>Jumbo</option>
                </select>
                <div className='sauce'>
                    <h4>Choice of Sauce</h4>
                    <h6>required</h6>
                    <ul>
                        <li>
                            <label>
                            <input
                                type='radio'
                                name='sauce'
                                value={'orig'}
                                checked={values.sauce === 'orig'}
                                onChange={onChange}
                                />
                            Original Red Sauce
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type='radio'
                                name='sauce'
                                value={'gar'}
                                checked={values.sauce === 'gar'}
                                onChange={onChange}
                                />
                            Garlic Ranch Sauce
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type='radio'
                                name='sauce'
                                value={'bbq'}
                                checked={values.sauce === 'bbq'}
                                onChange={onChange}
                                />
                            Sweet BBQ Sauce
                            </label>
                        </li>   
                        <li>                            
                            <label>
                            <input
                                type='radio'
                                name='sauce'
                                value={'alf'}
                                checked={values.sauce === 'alf'}
                                onChange={onChange}
                                />
                            Spinach Alfredo Sauce
                            </label>
                        </li>   
                        <li>                        
                            <label>
                            <input
                                type='radio'
                                name='sauce'
                                value={'dry'}
                                checked={values.sauce === 'dry'}
                                onChange={onChange}
                                />
                            Hold the Sauce Please
                            </label>
                        </li>
                    </ul>
                </div>
                <div className='toppingsDiv'>
                    <h4>Choose your toppings</h4>
                    <h6>Maximum 10 (+$1.00 each)</h6>
                    <ul className='toppings'>                
                        <li>           
                            <label>
                            <input
                                type="checkbox"
                                name="pep"
                                checked={values.pep}
                                onChange={onChange}
                            />
                            Pepperoni
                            </label>
                        </li>   
                        <li>                    
                        <label>
                            <input
                                type="checkbox"
                                name="saus"
                                checked={values.saus}
                                onChange={onChange}
                            />
                            Sausage
                            </label>                    
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="canBac"
                                checked={values.canBac}
                                onChange={onChange}
                            />
                            Canadian Bacon
                            </label>
                        </li>   
                        <li>                    
                            <label>
                            <input
                                type="checkbox"
                                name="spiSaus"
                                checked={values.spiSaus}
                                onChange={onChange}
                            />
                            Spicy Italian Sausage 
                            </label>
                        </li>
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="chix"
                                checked={values.chix}
                                onChange={onChange}
                            />
                            Grilled Chicken
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="oni"
                                checked={values.oni}
                                onChange={onChange}
                            />
                            Onions
                            </label>
                        </li>   
                        <li>                    
                            <label>
                            <input
                                type="checkbox"
                                name="grnPep"
                                checked={values.grnPep}
                                onChange={onChange}
                            />
                            Green Peppers
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="tom"
                                checked={values.tom}
                                onChange={onChange}
                            />
                            Diced Tomatos
                            </label>
                        </li>   
                        <li>                        
                            <label>
                            <input
                                type="checkbox"
                                name="oliv"
                                checked={values.oliv}
                                onChange={onChange}
                            />
                            Black Olives
                            </label>
                        </li>   
                        <li>               
                            <label>
                            <input
                                type="checkbox"
                                name="rstGar"
                                checked={values.rstGar}
                                onChange={onChange}
                            />
                            Roasted Garlic
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="artHrt"
                                checked={values.artHrt}
                                onChange={onChange}
                            />
                            Artichoke Hearts
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="chz3"
                                checked={values.chz3}
                                onChange={onChange}
                            />
                            Three Cheese
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="pine"
                                checked={values.pine}
                                onChange={onChange}
                            />
                            Pineapple
                            </label>
                        </li>   
                        <li>
                            <label>
                            <input
                                type="checkbox"
                                name="xtra"
                                checked={values.xtra}
                                onChange={onChange}
                            />
                            Extra Cheese
                            </label>
                        </li>
                    </ul>
                </div>
                <div className='gluten'>
                    <label>
                        <h4>Gluten Free Option?</h4>
                        <h6>$1.00 extra</h6>
                            <input
                                type='checkbox'
                                name='gluFre'
                                defaultChecked={false}
                                onChange={onChange}
                                />
                                Gluten Free Crust
                    </label>
                </div>
                <div className='qty'>
                    <label>
                    Quantity
                    <br />
                        <input
                        value={values.qty}
                        name='qty'
                        type='number'
                        onChange={onChange}
                        placeholder= 'Your Name'
                        />
                    </label>
                </div>
                <div className='special'>
                    <label>
                        Special Instructions?
                        <br />
                        <textarea
                        value={values.spec}
                        name='spec'
                        type='text'
                        className='textarea'
                        onChange={onChange}
                        placeholder='Special Instructions'
                        />
                    </label>
                </div>
            <div className="errors">
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{errors.cname}</div>
                <div>{errors.sauce}</div>
                <div>{errors.size}</div>
            </div>
                <button className='submitBtn' name='submitBtn' onClick={submit} disabled={disabled}>Add To Order</button>
            </form>
            <Pizza details={values} />
        </div>
    )
}
                