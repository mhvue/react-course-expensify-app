import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
    onSubmit= (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push("/dashboard");
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
    startAddExpense: (expense) => {
        dispatch(startAddExpense(expense))
    }
})

export default connect(undefined, mapDispatchToProps)(AddExpense);
