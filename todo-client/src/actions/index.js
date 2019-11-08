
import {SIGN_IN, SIGN_OUT, CREATE_ITEM, FETCH_ITEMS, ITEM_TOGGLE, ITEM_LABEL_CHANGE, ITEM_DELETE, ITEM_EDIT_TOGGLE} from './types';
import todoer from '../apis/todoer';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createItem = (itemObj) => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await todoer.post(`/todo`, {...itemObj, userId} );
  dispatch({ type: CREATE_ITEM, payload: response.data })
}

export const itemToggle = (id) => async (dispatch, getState) => {
  const {done} = getState().items[id];
  //Toggle
  let newVal;
  if(done){
    newVal = false
  }else{
    newVal = true
  }
  const response = await todoer.patch(`/todo/${id}`, { done: newVal });
  dispatch({ type: ITEM_TOGGLE, payload: response.data })
}

export const itemDelete = (id) => async (dispatch) => {
  await todoer.delete(`/todo/${id}`);
  dispatch({ type: ITEM_DELETE, payload: id });
}

export const itemLabelChange = (id, newLabel) => async (dispatch) => {
  const response = await todoer.patch(`/todo/${id}`, {label: newLabel});
  dispatch({ type: ITEM_LABEL_CHANGE, payload: response.data });
}

export const itemEditToggle = (id) => async (dispatch, getState) => {
  const {editable} = getState().items[id];
  //Toggle
  let newVal;
  if(editable){
    newVal = false
  }else{
    newVal = true
  }
  const response = await todoer.patch(`/todo/${id}`, { editable: newVal });
  dispatch({ type: ITEM_EDIT_TOGGLE, payload: response.data })
}

export const fetchItems = () => async (dispatch) => {
  const response = await todoer.get('/todo');
  dispatch({ type: FETCH_ITEMS, payload: response.data })
}
