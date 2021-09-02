import actionsTypes from "../actions/actionTypes"

const initState = {
    notifications:{
        title:"",
        msgShow: "",
        show: false
    }
}
const rootReducer = (state = initState, action) =>{
    switch (action) {
        case actionsTypes.DISPLAY_MSG:
            console.log(state);
            return {
                ...state,
                show: [...state.show, true],
                msg: [...state.msg, action.msg]
            }
        case actionsTypes.REMOVE_MSG:
            return {
                ...state,
                show: [...state.show, false]
            }
    
        default:
            return state;
            
        }
    
}

export default rootReducer;