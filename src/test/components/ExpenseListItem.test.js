import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem  from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("should render ExpenseListItem with each expense", () => {
    const wrapper = shallow(<ExpenseListItem 
                                id={expenses[1].id}
                                description={expenses[1].description}
                                createdAt={expenses[1].createdAt}
                                amount={expenses[1].amount}
                            />)
    expect(wrapper).toMatchSnapshot();
})