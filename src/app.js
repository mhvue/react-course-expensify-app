import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startSetExpenses} from "./actions/expenses";
import { login, logout} from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
//Provider provides the store to all the components that make up our app
import {Provider} from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
//import "./playground/promises";
const store = configureStore();
let hasRendered = false;
const renderApp = () => {
    //if we have not rendered 
    if(!hasRendered){
        ReactDOM.render(jsx ,document.getElementById("app"));
        hasRendered = true;
    }
}

const jsx = (
    //passing in a prop of our store to Provider 
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>Loading...</p> ,document.getElementById("app"));

//commented out below as it is not working 
// ReactDOM.render(<p>Loading...</p> ,document.getElementById("app"));
// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(jsx ,document.getElementById("app"));
// }) 


ReactDOM.render(jsx ,document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("log in")

        //fetch users's expenses once it works 
        // store.dispatch(startSetExpenses()).then(() => {
        //     renderApp();
        // if(history.location.pathname === "/") {
        //     history.push("/dashboard")
        // }
        // }) 

//alternate for now: 
        console.log("uid" + user.uid)
        store.dispatch(login(user.uid))
        renderApp();
        //if we are on the home page
        if(history.location.pathname === "/") {
            history.push("/dashboard")
        }

    }else{
        store.dispatch(logout())
        renderApp();
        history.push("/")
        console.log("log out")
    }
});
