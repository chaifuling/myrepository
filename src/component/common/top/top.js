import React ,{ Component } from "react";
import "./top.css";

export default class TopCom extends Component {
    render(){
        return (
            <div id="top">
               <div>
                   <div className="goback">&lt;</div>
                   <div>{this.props.title}</div>
               </div>
            </div>
        )
    }
}