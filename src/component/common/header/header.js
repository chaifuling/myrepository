import React ,{ Component } from "react";
import "./header.css";

export default class HeaderCom extends Component {
    render(){
        return (
            <div id="header">
                <ul>
                    <li><h2>{this.props.title}</h2></li>
                </ul>
            </div>
        )
    }
}