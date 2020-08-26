import { atom, RecoilState } from 'recoil'

export interface ToDoItem {
 id: string;
 text: string;
 x: number;
 y: number;
}

export const itemListState = atom<string[]>({ key: 'itemList', default: [] })
export const selectedToDoState = atom<string>({ key: 'selectedToDo', default: '' })

const getDefaultToDo = (id: string): ToDoItem => ({ id, text: `new item`, x: Math.round(Math.random() * 550), y: Math.round(Math.random() * 550) })

const atoms: Record<string, RecoilState<ToDoItem>> = {}

// export const toDoItems = selector({
//  key: 'toDoItems', get: ({ get }) => {
//   return Object.keys(atoms)
//  }, set: ({ set }, newIds) => {
//   newIds.forEach(id => {
//    getItemState(id);
//   });
//  }
// })

export const getItemState = (id: string) => {

 if (atoms[id]) {
  return atoms[id]
 }
 const newAtom = atom<ToDoItem>({ key: `toDoItem${id}`, default: getDefaultToDo(id) })
 atoms[id] = newAtom
 return newAtom
}