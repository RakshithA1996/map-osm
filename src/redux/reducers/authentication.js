const initAuth = {
    auth:false
} 

const loginReducer = (state = initAuth, action) => {
    switch(action.type){
        case "IS_LOGOUT_TRUE" :
            return {...state,auth:true};
        case "IS_LOGOUT_FALSE" :
            return {...state,auth:false};
        default :
            return state;
    }
}

export default loginReducer;