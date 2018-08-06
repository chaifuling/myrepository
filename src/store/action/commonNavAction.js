import axios from "axios";

export const getCommonNavAction = (dispatch) =>{
    /*
        https://h5.ele.me
        /restapi/shopping/v1/restaurants/outside_filter/attributes
        latitude=28.208012
        longitude=112.881993
        terminal=h5
    */
    dispatch({
        type: "GET_FILTER_NAV",
        payload: new Promise( resolve=>{
                axios.get("/restapi/shopping/v1/restaurants/outside_filter/attributes", {
                    params: {
                        latitude:28.208012,
                        longitude:112.881993,
                        terminal:"h5"
                    }
                })
                .then(function (response) {
                   resolve(response.data)
                })
                .catch(function (error) {
                    console.log(error)
                })
        })
    })
}