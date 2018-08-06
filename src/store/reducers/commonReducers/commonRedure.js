const defaultSatet = {
    nav:{}
}

export default (state =defaultSatet,action)=>{
    console.log(action);
    switch(action.type){
        case "GET_FILTER_NAV_FULFILLED":
            let newStateComNav = JSON.parse(JSON.stringify(state));
            newStateComNav.nav = action.payload;
            console.log(newStateComNav)
            return newStateComNav;
            default:
            return state;
    }
}