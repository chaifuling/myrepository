const defaultSatet = {
    title:"",
    nav:[],
    ad:[],
    items:[]
}

export default (state =defaultSatet,action)=>{
    console.log(action)
    switch(action.type){
        case "GET_HOME_TITLE_PENDING":
            let newHomeStatePending = Object.assign({},state);
                newHomeStatePending.title = "正在识别地址...";
            return newHomeStatePending;
        case "GET_HOME_TITLE_FULFILLED":
            let newHomeStateFulf = Object.assign({},state);
                newHomeStateFulf.title = action.payload;
            return newHomeStateFulf;
        case "GET_HOME_NAV_FULFILLED":
            let newHomeStateNav = JSON.parse(JSON.stringify(state))
                newHomeStateNav.nav = action.payload;
            return newHomeStateNav;
        case "GET_HOME_AD_FULFILLED":
            let newHomeStateAd = JSON.parse(JSON.stringify(state))
                newHomeStateAd.ad = action.payload;
            return newHomeStateAd;
        case "GET_HOME_GOODS_PENDING":
            let newHomeStatePendingGoods = JSON.parse(JSON.stringify(state))
            return newHomeStatePendingGoods;
        case "GET_HOME_GOODS_FULFILLED":
            let newHomeStateFulfGoods = JSON.parse(JSON.stringify(state))
            newHomeStateFulfGoods.items = action.payload;
            return newHomeStateFulfGoods;
        default:
        return state;
    }

}