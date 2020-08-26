import React from 'react'
import { Box, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/core/styles/withStyles'


export default (props: any) => {
  const { toDoItems, setToDoItems, selectedToDo } = props

  const currentToDo = toDoItems[selectedToDo]
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    outline: '1px solid #e7e7e7',
    width: '100%',
    alignItems: 'center',
  }


  if (currentToDo === undefined) {
    return <Box style={wrapperStyle}>Select a ToDo item</Box>
  }

  const updateValue = (key: string) => (inputEvent: any) => {
    const { value } = inputEvent.target
    setToDoItems({
      ...toDoItems, [selectedToDo]: {
        ...currentToDo,
        [key]: value
      }
    })
  }

  return (<Box style={wrapperStyle}>
    <h2>Edit item {selectedToDo}</h2>
    <Box py={1}>
      <TextField id="standard-basic" value={currentToDo.text} onChange={updateValue('text')} label="Text" />
    </Box>
    <Box py={1}>
      <TextField id="standard-basic" value={currentToDo.x} onChange={updateValue('x')} type="number" label="X" />
    </Box>
    <Box py={1}>
      <TextField id="standard-basic" value={currentToDo.y} onChange={updateValue('y')} type="number" label="Y" />
    </Box>
  </Box>)
}