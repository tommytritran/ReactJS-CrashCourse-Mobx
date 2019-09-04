import React, { useState, useEffect } from "react";
import axios from "axios";
import {List} from "antd";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:5000/todo');
    setTodos(data);
    console.log(data);

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <List
      size="small"
      dataSource={todos}
      renderItem={todo =>(
        <List.Item>
          {todo.title}
        </List.Item>
      )}
    >
    </List>
  )
}