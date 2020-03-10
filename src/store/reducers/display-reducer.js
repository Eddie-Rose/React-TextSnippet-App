import { DISPLAY_TITLE } from "../../constants/action-types";

const INITIAL_STATE={
  showTitle:true,

};
  const displayReducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
        case DISPLAY_TITLE:
            return{
            ...state,
            showTitle: action.value,
        };
        default:
            return state;    
    
    }
};

export default displayReducer;
