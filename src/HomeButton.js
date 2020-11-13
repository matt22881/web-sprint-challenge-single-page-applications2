import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButton() {
    return (
        <div>
             <Link to='/'><button name='homeBtn'>Home</button></Link>
        </div>
    )
}
