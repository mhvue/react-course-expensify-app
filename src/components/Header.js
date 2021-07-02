import React from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";

//want header on every single page 
//activeClassName is a class that gets added to the link when we are on it 
const Header= () => (
    <header className="header">
    <div className="content-container">   
        <div className="header__content">
        <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
        </Link>
        <button className="button button--link">Logout</button>   
        </div>   
        </div>  
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
