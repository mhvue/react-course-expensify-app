import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import Header from "../components/Header";
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <Route path="/dashboard" component={ExpenseDashboard}/>
            <Route path="/create" component={AddExpense} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path= "/help" component={HelpPage} />
            <Route component = {NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)


export default AppRouter;