import React ,{ Component } from "react";
import "./search.css";

export default class SearchCom extends Component {
    render(){
        return (
            <div id="search">
               <div>
                    <i className="iconfont icon-sousuo search-icon"></i>
                    <span>搜索饿了么商家、商品名称</span>
               </div>
            </div>
        )
    }
}