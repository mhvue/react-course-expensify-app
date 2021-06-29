import React from "react";
import { connect } from "react-redux";
import selectExpenseTotal from "../selectors/expense-total";
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral';

export const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
      <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
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