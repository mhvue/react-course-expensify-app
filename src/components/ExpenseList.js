import React from "react";
import { connect } from "react-redux"; //connect your component to the redux store 
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

//as the store changes, our componenet will also update 
export const ExpenseList = (props) =>  (
    <div className="content-container">
    <div className="list-header">
    <div className="show-for-mobile">Expenses</div>
    <div className="show-for-desktop">Expense</div>
    <div className="show-for-desktop">Amount</div>
    </div>

    <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ): (
                props.expenses.map((expense) => {
                return <ExpenseListItem 
                    key = {expense.id}
                    {...expense}
                    />
            })
            )
            
        }
    </div>
    </div>
);

//as the store changes, below will get rerun 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

//inside connect, we want to pass a function saying waht information we want to access from store 
export default connect(mapStateToProps)(ExpenseList);

