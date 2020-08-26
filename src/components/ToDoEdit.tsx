import React from 'react'
import { Box, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { useRecoilValue, useRecoilState } from 'recoil'
import { selectedToDoState, getItemState, ToDoItem } from '../state'


export default (props: any) => {
  const selectedToDo = useRecoilValue(selectedToDoState)
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    outline: '1px solid #e7e7e7',
    width: '100%',
    alignItems: 'center',
  }

  const itemState = getItemState(selectedToDo)

  if (!itemState) {
    return <Box style={wrapperStyle}>Select a ToDo item</Box>
  }

  const [toDoItem, setToDoItem] = useRecoilState<ToDoItem>(itemState)




  if (toDoItem === undefined) {
    return <Box style={wrapperStyle}>Select a ToDo item</Box>
  }

  const updateValue = (key: string) => (inputEvent: any) => {
    let { value } = inputEvent.target
    if (key === 'x' || key === 'y') {
      value = parseInt(value)
    }
    setToDoItem({
      ...toDoItem,
      [key]: value
    })
  }

  return (<Box style={wrapperStyle}>
    <h2>Edit item {selectedToDo}</h2>
    <Box py={1}>
      <TextField id="standard-basic" value={toDoItem.text} onChange={updateValue('text')} label="Text" />
    </Box>
    <Box py={1}>
      <TextField id="standard-basic" value={toDoItem.x} onChange={updateValue('x')} type="number" label="X" />
    </Box>
    <Box py={1}>
      <TextField id="standard-basic" value={toDoItem.y} onChange={updateValue('y')} type="number" label="Y" />
    </Box>
  </Box>)
}