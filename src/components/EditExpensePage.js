import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from "react-redux";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
    
            this.props.editExpense(this.props.expense.id, expense);
            this.props.history.push('/');
    }

    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push("/")
        }

    render() {
        return(
        <div>
         <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
            </div>
        </div>

         <div className="content-container"> 
                <ExpenseForm 
                expense={this.props.expense}
                onSubmit = {this.onSubmit}
                />
                <button 
                onClick={this.onRemove}
                className="button button--secondary"> 
                Remove Expense</button> 
         </div>
         </div>
        )
    }
};


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id,expense) => {
            dispatch(editExpense(id,expense))
        },
        removeExpense: (data) => {
            dispatch(removeExpense(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);