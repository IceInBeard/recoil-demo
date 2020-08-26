import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, Button, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { ToDoItem } from '../App'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { CSSProperties } from '@material-ui/core/styles/withStyles'


export interface ToDoListProps {
    items: Record<number, ToDoItem>;
    onAddTodo(): void;
    onDeleteTodo(id: number): void;
}

const wrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    outline: '1px solid #e7e7e7',
    width: '100%'
}

export default ({ items, onAddTodo, onDeleteTodo }: ToDoListProps) => <Box style={wrapperStyle}>
    <List>
        {
            Object.values(items).map((item: ToDoItem) => (<ListItem>
                <ListItemIcon>
                    <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => onDeleteTodo(item.id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>))
        }
    </List>

    <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onAddTodo}
    >
        Add ToDo
    </Button>
</Box>