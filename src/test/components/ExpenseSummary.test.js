import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import { expect } from "@jest/globals";

test("should render ExpenseSummary",() => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expenses",() => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={45235}/>)
    expect(wrapper).toMatchSnapshot();
})