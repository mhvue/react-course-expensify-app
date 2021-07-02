import React from "react";
import { connect } from "react-redux";
import selectExpenseTotal from "../selectors/expense-total";
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral';
import { Link } from "react-router-dom";

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
      <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
      </div>
    );
  };


const mapStateToProps = (state) => {
    const visibleExpense = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpense.length,
        expensesTotal: selectExpenseTotal(visibleExpense)
    }
}
export default connect(mapStateToProps)(ExpenseSummary);