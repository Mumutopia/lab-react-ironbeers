import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <NavLink to="/beers">All  Beers</NavLink>
            <NavLink to="/random-beer">Randome Beer</NavLink>

<NavLink to="/newbeer">New Beer</NavLink>
        </div>
    )
}
