import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseItemList = ({id, description, createdAt, amount}) =>  (
    <div>
    <Link to={`/edit/${id}`}>   
      <p>{description}</p>
    </Link>
      <p>Created at: {moment(createdAt).format("MMMM Do, YYYY")} </p>
       <p>Amount: {numeral(amount / 100).format("$0,0.00")}</p>     
    </div>
);


export default ExpenseItemList;