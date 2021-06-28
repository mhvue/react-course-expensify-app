import React from 'react';
import {Link} from "react-router-dom";


//using Link is preferred for internal componenets to take advantage of client side routing 
const NotFoundPage = () => (
    <div>
    404 - <Link to="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;