import database from "../firebase/firebase";
import expenses from "../test/fixtures/expenses";
//actions:
//ADD EXPENSE
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense 
});
//REMOVE EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});


export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const {
            description = "", 
            note = "", 
            amount = 0, 
            createdAt=0
        } = expenseData;
        //access firebase and save data 

        const expense = {
            description, 
            note, 
            amount, 
            createdAt
        }
        return database.ref(`users/${uid}/expenses`).push(expense)
            .then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
}


export const startSetExpenses = () => {
    return (dispatch,getState) => {
      const uid = getState.auth.uid;
      return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = [];
  
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setExpenses(expenses))
      });
    };
  };
  
  export const startRemoveExpense = ({id}) => {
      return (dispatch, getState) => {
        const uid = getState().auth.uid;
          return database.ref(`users/${uid}/expenses${id}`).remove()
          .then(() => {
              dispatch(removeExpense({id}))
          })
      }
  };

  export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses${id}`).update(updates)
        .then(() => {
            dispatch(editExpense(id,updates))
        });
    };
  };
