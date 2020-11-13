import React, { useState, useEffect } from "react"
import { Route, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Form from './Form'
import Home from './Home'
import * as yup from "yup"
import schema from "./formSchema"
import './App.css'
// debugger
const initialFormValues ={
    size: '',
    sauce: '', 
    pep: false,
    saus: false,
    canBac: false,
    spiSaus: false,
    chix: false,
    oni: false,
    grnPep: false,
    tom: false,
    oliv: false,
    rstGar: false,
    artHrt: false,
    chz3: false,
    pine: false,
    xtra: false,
    gluFre: false,
    cname: '',
    spec: '',
    qty: '1',
}
const initialFormErrors = {
    size: '',
    sauce: '',
    cname: '',
}
const initialPizza = {}
const initialDisabled = true


// debugger
const App = () => {

    const [ currentPizza, setPizza ] = useState(initialPizza)
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)

// console.log('formValues: ', formValues)
// console.log('formErrors: ', formErrors)
// console.log('disabled: ', disabled)
    
    
const history = useHistory()

    // const changePizza = (pizza) => {
    //     setPizza(pizza)
    //     }

// console.log(currentPizza)
// debugger


    const inputChange = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors, 
                [name]: '',
            });
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors, 
                [name]: err.errors[0],
            });
        });
// debugger
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }
// debugger    
    const formSubmit = (e) => {
        e.preventDefault()
        const newPizza = {
            size: formValues.size,
            sauce: formValues.sauce,
            crust: formValues.gluFree,
            cname: formValues.cname.trim(),
            spec: formValues.spec.trim(),
            qty: formValues.qty.trim(),
            pep: formValues.pep,
            saus: formValues.saus,
            canBac: formValues.canBac,
            spiSaus: formValues.spiSaus,
            chix: formValues.chix,
            oni: formValues.oni,
            grnPep: formValues.grnPep,
            tom: formValues.tom,
            oliv: formValues.oliv,
            rstGar: formValues.rstGar,
            artHrt: formValues.artHrt,
            chz3: formValues.chz3,
            pine: formValues.pine,
            xtra: formValues.xtra,
            gluFre:formValues.gluFre,
       
        };
       setPizza(newPizza);
       history.push('/');
       setFormValues(initialFormValues)
    }
       
// debugger
  
    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid);
            });
  }, [formValues]);

console.log('IP: ',initialPizza)
console.log('CP: ',currentPizza)
console.log('FV: ',formValues)
// debugger
    return (
        <>
            <Nav />
            <Route exact path='/'>
                <Home
                    className='App container'
                   details={currentPizza}    
                    
                />
            </Route>
            <Route path='/pizza'>
                <Form 
                    className="App container"
                    pizza= {currentPizza}
                    values = {formValues}
                    change = {inputChange}
                    submit = {formSubmit}
                    disabled = {disabled}
                    errors = {formErrors}
                />
            </Route>
            
        

        </>
    );
};
export default App