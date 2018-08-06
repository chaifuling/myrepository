import React ,{ Component } from "react";
import {NavLink} from "react-router-dom";
import "./footer.css";

export default class FooterCom extends Component {
    render(){
        return (
            <div id="footer">
                <ul>
                    <li>
                        <NavLink to="/home">
                            
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/find">
                           
                            发现
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">                          
                           订单
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                           我的
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}