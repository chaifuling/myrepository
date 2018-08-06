import React ,{ Component } from "react";
import {connect} from "react-redux";
import {getCommonNavAction} from "../../../store/action/commonNavAction";
import "./filter.css";
class FilterCom extends Component {
    render(){
           let all_name,arr_name = [];
          if(this.props.nav.inside_sort_filter){
            all_name = this.props.nav.inside_sort_filter[0].name;
          }

          if( this.props.nav.outside_sort_filter){
            arr_name = this.props.nav.outside_sort_filter
          }
          
        return (
            <div id="filter">
                <ul>
                    <li>{all_name}</li>
                    {
                       arr_name.map((item,index)=>{
                           return <li>{item.name}</li>
                       })
                    }
                    <li>筛选</li>
                </ul>
            </div>
        )
    }

    componentDidMount(){
       
        this.props.getFilterDate()
    }
}

const mapDispatchToProps = (dispatch)=>({
    getFilterDate:function(){
        getCommonNavAction(dispatch)
    }
})

const mapStateToProps = (state)=>({
    nav:state.commonRedure.nav
})

export default connect(mapStateToProps,mapDispatchToProps)(FilterCom)