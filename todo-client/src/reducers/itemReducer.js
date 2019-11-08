import {CREATE_ITEM, FETCH_ITEMS, ITEM_TOGGLE, ITEM_DELETE, ITEM_LABEL_CHANGE, ITEM_EDIT_TOGGLE} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  switch(action.type){
    case CREATE_ITEM:
      return {...state, [action.payload.id]: action.payload };
    case FETCH_ITEMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case ITEM_TOGGLE:
      return { ...state, [action.payload.id]: action.payload };
    case ITEM_DELETE:
      //Take state object and omit the sub-object with id action.payload
      return _.omit(state, action.payload);
    case ITEM_LABEL_CHANGE:
      return { ...state, [action.payload.id]: action.payload };
    case ITEM_EDIT_TOGGLE:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  }

}
