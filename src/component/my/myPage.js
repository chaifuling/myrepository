import React,{Component} from "react";
import TopCom from "../common/top/top";
import FooterCom from "../common/footer/footer";
export default class MyCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:"我的"
        }
    }
    render(){
        return(
            <div id="container">
                <TopCom title={this.state.title}/>
                <div className="content">
                    wode
                </div>
                <FooterCom/>
            </div>

        )
    }
}