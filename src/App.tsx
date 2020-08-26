import React from 'react';
import { Grid } from '@material-ui/core'
import { RecoilRoot } from 'recoil'
import ToDoList from './components/ToDoList'
import ToDoCanvas from './components/ToDoCanvas'
import ToDoEdit from './components/ToDoEdit'
import { ToDoItem } from './state';



export type ToDoItems = Record<number, ToDoItem>


function App() {

  return (
    <RecoilRoot>
      <Grid container>
        <Grid item xs={3}>
          <ToDoList />
        </Grid>
        <Grid item xs={6}>
          <ToDoCanvas />
        </Grid>
        <Grid item xs={3}>
          <ToDoEdit />
        </Grid>
      </Grid>
    </RecoilRoot>
  );
}

export default App;