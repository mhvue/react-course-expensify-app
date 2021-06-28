import React from 'react';
import {NavLink} from "react-router-dom";

//want header on every single page 
//activeClassName is a class that gets added to the link when we are on it 
const Header= () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName= "is-active" exact={true}>Dashbaord</NavLink>
        <NavLink to="/create" activeClassName= "is-active">Create Expense</NavLink>
    </header>
);

export default Header;
 