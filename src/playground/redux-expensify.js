import {createStore, combineReducers} from "redux";
import uuid from "uuid";

console.log("new redux");

//actions:
//ADD EXPENSE
const addExpense = (
    { 
        description = "", 
        note = "", 
        amount = 0, 
        createdAt=0
    }= {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE EXPENSE
const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
//SET TEXT FILER
const setTextFilter=(text = "") => ({
        type: "SET_TEXT",
        text
});
//SORT BY DATE
const sortByDate= () => ({
    type: "SORT_BY_DATE",
});
//DATE BY AMOUNT
const sortByAmount= () => ({
    type: "SORT_BY_AMOUNT",
});
//SET START DATE
const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date,
});
//SET END DATE 
const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date,
});

//Expenses reducer 
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case "ADD_EXPENSE" : 
            return [
                ...state, //this is all the our current items in array 
                action.expense
            ];
        case "REMOVE_EXPENSE": 
            return state.filter(({id}) => {
                return id !== action.id
            });
        case "EDIT_EXPENSE" : 
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense, //grab all expenses
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default: 
            return state;
    }
};

//FILTERs REDUCER - managed the filter object 
const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case "SET_TEXT" : 
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE": 
            return {
                ...state,
                sortBy: "date"
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SET_START_DATE": 
            return {
                ...state,
                startDate: action.date,
            }
        case "SET_END_DATE": {
            return {
                ...state,
                endDate: action.date
            }
        }
        default: 
            return state;
    }
};

//timestamps are counted in milliseconds 
//timestamp of 0 = Jan. 1, 1970 (unix epoch)
//33400
//-243..etc

//get visibile expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
     console.log(expense)

      return startDateMatch && endDateMatch && textMatch;

   }).sort((a,b) => {
    if(sortBy === "date") {
        //return -1 if "a" should come first and return 1 if "b" should come first 
        return a.createdAt < b.createdAt ? 1  : -1;
    }
    else if(sortBy === "amount") {
        return a.amount  < b.amount ? 1 : -1;
    }
   });
  };


//STORE
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

//watch for changes 
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: -31000}));
store.dispatch(addExpense({ description: "Coffee", amount: 800, createdAt: 1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500}));
//store.dispatch(setTextFilter("rent"));
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
 //store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));


//console.log(edit)

const demoState = {
    expenses: [{
        id: 'idhere',
        description: "Jan. Rent",
        note: "this is my final payment for addy",
        amount: 54500,
        createdAt: 0,
    }],

    filters: {
        text: "rent",
        sortBy: "amount", //date or ammount
        stateDate: undefined,
        endDate: undefined
    }

};
