const initNav = {
    nav:false
} 

const navReducer = (state = initNav, action) => {
    switch(action.type){
        case "IS_NAV_TRUE" :
            return {...state,nav:true};
        case "IS_NAV_FALSE" :
            return {...state,nav:false};
        default :
            return state;
    }
}

export default navReducer;