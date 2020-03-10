import { NEW_TEXT_ASYNC, SAVE_TEXT_ASYNC } from "../../constants/action-types";

const INITIAL_STATE={
  idCount: 0,
  idTitle: 0,
  title: [],
  history: []
};
  const fileReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
      case SAVE_TEXT_ASYNC:
        return{
          ...state,
          idCount: state.idCount + 1,
          history: state.history.concat({id: action.id, titleName: action.title, filename: action.filename, time: action.time})
        };
      case NEW_TEXT_ASYNC:
        return{
          ...state,
          idCount: 0,
          idTitle: state.idTitle + 1,
          idCount: state.idCount + 1, 
          title: state.title.concat({id: state.idTitle, titleName: action.title}),
          history: state.history.concat({id: action.id, titleName: action.title, filename: action.filename, time: action.time})
        };

      default:
        return state;    
    }
  };
  
  export default fileReducer;
  