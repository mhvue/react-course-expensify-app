import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
    onSubmit= (expense) => {
        console.log(expense)
        //props.dispatch(addExpense(expense));
        this.props.addExpense(expense)
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
            onSubmit={this.onSubmit}
                />
        </div>
        );
    }
}

//which lets you create functions that dispatch when called, and pass those functions as props to your component.
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => {
        dispatch(addExpense(expense))
    }
})

export default connect(undefined, mapDispatchToProps)(AddExpense);
