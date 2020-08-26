import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
import ToDoList from './components/ToDoList'
import ToDoCanvas from './components/ToDoCanvas'
import ToDoEdit from './components/ToDoEdit'

export interface ToDoItem {
  id: number;
  text: string;
  x: number;
  y: number;
}

export type ToDoItems = Record<number, ToDoItem>


function App() {
  const [toDoItems, setToDoItems] = useState<ToDoItems>({ 0: { id: 0, text: 'Buy milk', x: 0, y: 0 } })
  const [selectedToDo, setSelectedToDo] = useState<number>(0)

  const addTodo = () => {
    const newId = Object.values(toDoItems).map(item => item.id).reduce((maxId, curId) => curId > maxId ? curId : maxId, 0) + 1;
    setToDoItems({ ...toDoItems, [newId]: { id: newId, text: `new item ${newId}`, x: Math.round(Math.random() * 550), y: Math.round(Math.random() * 550) } })
    setSelectedToDo(newId);
  }

  const deleteTodo = (id: number) => {
    setToDoItems(Object.fromEntries(Object.entries(toDoItems).filter(([key, item]) => item.id !== id)));
    if (id === selectedToDo) {
      setSelectedToDo(Object.values(toDoItems).find(item => item.id !== undefined)?.id || 0)
    }
  }

  return (

    <Grid container>
      <Grid item xs={3}>
        <ToDoList items={toDoItems} onAddTodo={addTodo} onDeleteTodo={deleteTodo} />
      </Grid>
      <Grid item xs={6}>
        <ToDoCanvas toDoItems={toDoItems} setToDoItems={setToDoItems} selectedToDo={selectedToDo} setSelectedToDo={setSelectedToDo} />
      </Grid>
      <Grid item xs={3}>
        <ToDoEdit toDoItems={toDoItems} setToDoItems={setToDoItems} selectedToDo={selectedToDo} />
      </Grid>
    </Grid>

  );
}

export default App;
