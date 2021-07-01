import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {startAddExpense, startSetExpenses} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
//Provider provides the store to all the components that make up our app
import {Provider} from "react-redux";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";
//import "./playground/promises";
const store = configureStore();

const jsx = (
    //passing in a prop of our store to Provider 
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>Loading...</p> ,document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx ,document.getElementById("app"));
})
