import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import expenses from "../fixtures/expenses";

import { 
  startAddExpense, 
  editExpense, 
  removeExpense, 
  setExpenses, 
  startSetExpenses, 
  startRemoveExpense,
  startEditExpense} from "../../actions/expenses";

//create the configuration for mockStore
const createMockStore = configureMockStore([thunk]);
const uid = "testuid";
const defaultAuthState = {auth: { uid } };

beforeEach((done) => {
  const expensesData ={};
  //loop thru each item in arr
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    //setting each in an obj for expenseData 
      expensesData[id] = {description, note, amount, createdAt}
  });

  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => {
    done();
  })
});

test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should edit an expense action object", () => {
    const action = editExpense("123abc", 
        {note:"July"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
             note: "July" 
            
         }
    });
});

test("should set up add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
  });

  test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
  
    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
  });
  

test("should set up the SET expense action object with data", () => {

   const action = setExpenses(expenses)
   expect(action).toEqual({
     type: "SET_EXPENSES",
     expenses
   });
});

test("should fetch expenses from firebase" , (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});

test("should remove expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  }) 
  });

  test("should edit expenses in firebase", (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updateData = {
      note: "August rent"
    }
    store.dispatch(startEditExpense(id, updateData)).then(() => {
      const action = store.getActions();
      expect(action[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updateData
      });
      //check if data change in firebase
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val().note).toBe(updateData.note);
      done();
    })
  });