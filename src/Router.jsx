import React from 'react';
import {Redirect, Switch, Route} from 'react-router';
import TodoList from './todos/todo-list';

const Router = () => (
    <Switch>
        <Route path="/todo-list" component={TodoList}></Route>
        <Redirect from="/" exact to="/todo-list"></Redirect>
    </Switch>
)

export default Router;