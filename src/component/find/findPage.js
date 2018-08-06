import React,{Component} from "react";

import TopCom from "../common/top/top";
import FooterCom from "../common/footer/footer";
export default class FindCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"发现"
        }
    }
    render(){
        return(
            <div id="container">
                <TopCom title={this.state.title}/>
                <div className="content">
                    发现
                </div>
                <FooterCom/>
            </div>

        )
    }
}