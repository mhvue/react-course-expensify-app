import React from 'react';
import {NavLink} from "react-router-dom";

//want header on every single page 
//activeClassName is a class that gets added to the link when we are on it 
const Header= () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName= "is-active" exact={true}>Dashbaord</NavLink>
        <NavLink to="/create" activeClassName= "is-active">Create Expense</NavLink>
    </header>
);

<<<<<<< HEAD

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
=======
export default Header;
 
>>>>>>> parent of 5d067fd (added in authentication from firebase. added testing for logging in and out.)
