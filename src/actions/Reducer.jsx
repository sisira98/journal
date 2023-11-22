// import { LOGIN_SUCCESS } from './UserLogin';
const initialState = {
  sharedData: null,
  selectedEntryId: null,
  selectedEntry: null,
  totalList:[],
  listData: [],
  catList:[],
  accessToken: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ENTRY_DATA':
      return {
        ...state,
        sharedData: action.payload,
      };
    case 'SET_SELECTED_ENTRY_ID':
      return {
        ...state,
        selectedEntryId: action.payload,
      };
    case 'CREATE_ENTRY_DATA':
      return {
        ...state,
        sharedData: action.payload,
      };
    case 'LIST_ENTRIES_SUCCESS':
      return {
        ...state,
        listData: action.payload,
      };
    case 'TOTAL_ENTRIES_SUCCESS':
      return {
        ...state,
        totalList: action.payload,
      };
    case 'DELETE_ENTRY_SUCCESS':
      return {
        ...state,
      };
    case 'EDIT_ENTRY_SUCCESS':
      return {
        ...state,
      };
    case 'GET_SELECTED_ENTRY':
      return {
        ...state,
        selectedEntry: action.payload,
      };
    case 'LOGIN_SUCCESS':{
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    case 'CREATE_USER':
      return {
        ...state,
      };
    case 'CREATE_CATEGORY_DATA':
      return {
        ...state,
      };
    case 'LIST_CATEGORIES_SUCCESS':
      return {
        ...state,
        catList: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;