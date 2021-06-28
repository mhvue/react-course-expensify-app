import filterReducers from "../../reducers/filters";
import moment from "moment";

test("should set up default filter values", () => {
    const state = filterReducers(undefined,{type:"@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")

    })
});

test("should set sortBy to amount", () => {
    const state = filterReducers(undefined,{type: "SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe("amount")
});

test("should set sortBy to date", () => {
    const currentState = {
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    }

    const action={type: "SORT_BY_DATE"};

    const state = filterReducers(currentState,action)
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const text = "amount";
    const state = filterReducers(undefined, {type: "SET_TEXT", text});
    expect(state.text).toBe(text)
});

test("should set startDate", () => {
    const date = moment();
    const action = {
        type: "SET_START_DATE",
        date,
    }
    const state = filterReducers(undefined, action);
    expect(state.startDate).toEqual(date)
});

test("should set endDate", () => {
    const date = moment()
    const action = {
        type: "SET_END_DATE",
        date
    };
    const state = filterReducers(undefined, action);
  expect(state.endDate).toEqual(date);
});

