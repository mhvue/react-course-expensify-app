
//Expenses reducer 
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
        case "SET_EXPENSES": 
            return action.expense;
        default: 
            return state;
    }
};

