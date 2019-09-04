import React, { Fragment } from "react";
import TodoList from "./TodoList";
import {Card} from "antd";

export default function Home() {
    return (
        <Fragment>
            <Card title="Todos">
                <TodoList></TodoList>
            </Card>
        </Fragment>
    )
}