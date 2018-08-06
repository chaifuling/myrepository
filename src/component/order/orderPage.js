import React,{Component} from "react";
import TopCom from "../common/top/top";
import FooterCom from "../common/footer/footer";
export default class OrderCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"订单"
        }
    }
    render(){
        return(
            <div id="container">
                <TopCom title={this.state.title}/>
                <div className="content">
                    订单
                </div>
                <FooterCom/>
            </div>

        )
    }
}