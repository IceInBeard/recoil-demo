import React from 'react'

import { Box } from '@material-ui/core'
import Draggable from 'react-draggable';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { itemListState, selectedToDoState, getItemState } from '../state';


const ToDoItem = (props: any) => {
 const { id, handleCardPress } = props
 const [item, setItem] = useRecoilState(getItemState(id))

 const { x, y, text } = item

 const handleDrag = (event: any, ui: any) => {
  setItem({
   ...item,
   x: x + ui.deltaX,
   y: y + ui.deltaY
  })
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
 const toDoItems = useRecoilValue(itemListState)
 const setActiveToDo = useSetRecoilState(selectedToDoState)

 const handleCardPress = (itemId: string) => () => {
  setActiveToDo(itemId)
 }

 return <Box style={{ height: '100%' }}>
  {toDoItems.map(id => <ToDoItem id={id} handleCardPress={handleCardPress(id)} />)}
 </Box>

}