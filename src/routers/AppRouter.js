import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <PrivateRoute  path="/dashboard" component={ExpenseDashboard}/>
            <PrivateRoute  path="/create" component={AddExpense} />
            <PrivateRoute  path="/edit/:id" component={EditExpensePage} />
            <Route path= "/help" component={HelpPage} />
            <Route component = {NotFoundPage} />
        </Switch>
    </div>
    </Router>
)


export default AppRouter;