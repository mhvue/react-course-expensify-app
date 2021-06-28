
import { expect } from "@jest/globals";
import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";


test("should set default state", () => {
    const state = expenseReducer(undefined, { type: "@@INIT"});
    expect(state).toEqual([])
});

test("should remove expenese by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);

});

test("should not remove expenese if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);

});


test("should add an expense", () => {
    const expense = {
        id: '4',
        description: 'Credit Card',
        note: '',
        amount: 6500,
        createdAt: 20000
    }
    const action ={ 
        type: "ADD_EXPENSE",
        expense
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test("should edit an expense", () => {
    const description= 'Rent Two'

    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            description
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state[1].description).toBe(description)
});

test("should not edit expense if expense not found", () => {
    const description= 'Rent Two'
    
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            description
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses)
})


