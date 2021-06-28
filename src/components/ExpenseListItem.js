import React from "react";
import { Link } from "react-router-dom"

const ExpenseItemList = ({id, description, createdAt, amount}) =>  (
    <div>
    <Link to={`/edit/${id}`}>   
      <p>{description}</p>
    </Link>
      <p>Created at: {createdAt} </p>
       <p>Amount: {amount}</p>     
    </div>
);


export default ExpenseItemList;