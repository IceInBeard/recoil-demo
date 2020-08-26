import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, Button, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { v4 as uuid } from 'uuid'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { itemListState, getItemState, selectedToDoState } from '../state';


const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    outline: '1px solid #e7e7e7',
    width: '100%'
}

const ToDoListItem = ({ id }: { id: string }) => {
    const itemState = getItemState(id)
    const itemData = useRecoilValue(itemState)
    const setSelectedToDo = useSetRecoilState(selectedToDoState)

    const [itemIds, setItemIds] = useRecoilState(itemListState)

    return (<ListItem onClick={() => { setSelectedToDo(id) }}>
        <ListItemIcon>
            <InsertDriveFileIcon />
        </ListItemIcon>
        <ListItemText>{itemData.text}</ListItemText>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => { setItemIds(itemIds.filter(itemId => itemId !== id)) }}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>)

}

export default () => {

    const [itemIds, setItemIds] = useRecoilState(itemListState)

    const handleAddTodo = () => {
        const newId = uuid()
        setItemIds([...itemIds, newId])
    }


    return (<Box style={wrapperStyle}>
        <List>
            {
                itemIds.map(id => <ToDoListItem id={id} />)
            }
        </List>

        <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddTodo}
        >
            Add ToDo
        </Button>
    </Box>)
}