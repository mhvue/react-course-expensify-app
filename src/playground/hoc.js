//higher order components HOC - goal of HOC is to reuse code
//a component (HOC) that renders anotehr compontent (reg. component)
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is{props.info}</p>
    </div>
);

//we want this function to be reusable. this is just a regular function that returns a HOC 
const withAdminWarning = (WrappedComponent) => {
    //we are going to return a component here
    //this will be the HOC. (and stateless)
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private info. pleae don't share.</p>}
            
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
              <WrappedComponent {...props} /> 
              : <p>Please Login</p> } 
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info= "these are the details"/>,document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info= "for authentication"/>,document.getElementById("app"))

