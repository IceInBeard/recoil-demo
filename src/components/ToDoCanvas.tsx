import React from 'react'

import { Box } from '@material-ui/core'
import Draggable from 'react-draggable';
import { CSSProperties } from '@material-ui/core/styles/withStyles';


const ToDoItem = (props: any) => {
  const { id, x, y, text, updateItemPos, handleCardPress } = props


  const handleDrag = (event: any, ui: any) => {

    updateItemPos(id)(parseInt(x) + ui.deltaX, parseInt(y) + ui.deltaY)
  }

  const cardStyles: CSSProperties = {
    backgroundColor: '#efefef',
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 9001,
    cursor: 'pointer'
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      position={{ x, y }}
      onDrag={handleDrag}
    >
      <Box p={2} onClick={handleCardPress(id)} className="handle" style={cardStyles}>
        {text}
      </Box>

    </Draggable>
  )
}

export default (props: any) => {
  const { toDoItems, setToDoItems, setSelectedToDo } = props

  if (!toDoItems) {
    return null
  }

  const handleCardPress = (itemId: number) => () => {
    setSelectedToDo(itemId)
  }

  const updateItemPos = (itemId: number) => (x: number, y: number) => {
    setToDoItems({
      ...toDoItems, [itemId]: {
        ...toDoItems[itemId],
        x,
        y
      }
    })
  }

  return <Box style={{ height: '100%' }}>
    {Object.values(toDoItems).map(toDo => <ToDoItem {...toDo} updateItemPos={updateItemPos} handleCardPress={handleCardPress} />)}
  </Box>

}