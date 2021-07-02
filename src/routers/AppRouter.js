import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import Header from "../components/Header";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    <Header />
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <Route  path="/dashboard" component={ExpenseDashboard}/>
            <Route  path="/create" component={AddExpense} />
            <Route  path="/edit/:id" component={EditExpensePage} />
            <Route component = {NotFoundPage} />
        </Switch>
    </div>
    </Router>
)

// <PublicRoute path="/" component={LoginPage} exact={true}/>
//             <PrivateRoute  path="/dashboard" component={ExpenseDashboard}/>
//             <PrivateRoute  path="/create" component={AddExpense} />

export default AppRouter;