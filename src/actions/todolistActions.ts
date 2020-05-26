import * as actionTypes from './types/todolistTypes'
import { ISingleElementList } from '../entities/todoSingleEl'

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEM,
    newElem,
})
export const deleteElementTodoList = (id:string) => ({
    type: actionTypes.DELETE_ELEMENT,
    id
})