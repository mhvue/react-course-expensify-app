import { expect, test } from "@jest/globals";
import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";

test("should generate set start date object", () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});

test("should generate a end date object", () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    })
});

test("should generate a filter a text object", () => {
    const action = setTextFilter("bill");

    expect(action).toEqual({
        type: "SET_TEXT",
        text: "bill"
    })
});

//default text
test("should generate filter object with default text",() => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: "SET_TEXT",
        text: ""
    })
});

test("should have action object sort by date", () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});

test("should have action object sort by amt", () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

