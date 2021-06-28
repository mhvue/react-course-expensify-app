import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
//Provider provides the store to all the components that make up our app
import {Provider} from "react-redux";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 4500}));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000}));
store.dispatch(addExpense({ description: "Rent", amount: 10900}));



console.log(store.getState())
console.log("hello!")

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    //passing in a prop of our store to Provider 
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx ,document.getElementById("app"));
