import React from 'react';
import {NavLink} from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

//want header on every single page 
//activeClassName is a class that gets added to the link when we are on it 
export const Header= ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName= "is-active" exact={true}>Dashbaord</NavLink>
        <NavLink to="/create" activeClassName= "is-active">Create Expense</NavLink>
        <button onClick= {startLogout}>Logout</button>
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
 