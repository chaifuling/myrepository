import axios from "axios";

export const getHomeTitleAction = (dispatch) => {
    dispatch({
        type: "GET_HOME_TITLE",
        payload: new Promise( resolve=>{
                axios.get("/restapi/bgs/poi/reverse_geo_coding", {
                    params: {
                        latitude: 28.208012,
                        longitude: 112.881993
                    }
                })
                .then(function (response) {
                   resolve(response.data.name)
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
    })
}

/*
 https://h5.ele.me
/restapi/shopping/openapi/entries
    latitude=28.208012
    &longitude=112.881993
    &templates[]=main_template
    &templates[]=favourable_template
    &templates[]=svip_template
    &terminal=h5
*/
export const getHomeNavAction = (dispatch) => {
    dispatch({
        type: "GET_HOME_NAV",
        payload: new Promise( resolve=>{
                axios.get("/restapi/shopping/openapi/entries", {
                    params: {
                        latitude:28.208012,
                        longitude:112.881993,
                        templates:["main_template","favourable_template","svip_template"],
                        terminal:"h5"
                    }
                })
                .then(function (response) {
                   resolve(response.data[0].entries)
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
    })
}

export const getHomeAdAction = (dispatch) => {
    dispatch({
        type: "GET_HOME_AD",
        payload: new Promise( resolve=>{
                axios.get("/restapi/shopping/openapi/entries", {
                    params: {
                        latitude:28.208012,
                        longitude:112.881993,
                        templates:["main_template","favourable_template","svip_template"],
                        terminal:"h5"
                    }
                })
                .then(function (response) {
                   
                   resolve(response.data[1].entries)
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
    })
}


export const getHomeGoodsAction = (dispatch) => {
    /* 
        https://h5.ele.me
        /restapi/shopping/v3/restaurants
        latitude=28.208012
        &longitude=112.881993
        &offset=0
        &limit=8
        &extras[]=activities
        &extras[]=tags
        &extra_filters=home
        &rank_id=
        &terminal=h5
    */
    dispatch({
        type: "GET_HOME_GOODS",
        payload: new Promise( resolve=>{
                axios.get("/restapi/shopping/v3/restaurants", {
                    params: {
                        latitude:28.208012,
                        longitude:112.881993,
                        offset:0,
                        limit:8,
                        extras:["activities","tags"],
                        extra_filters:"home",
                        rank_id:"",
                        terminal:"h5"
                    }
                })
                .then(function (response) {
                   resolve(response.data.items)
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
    })
}