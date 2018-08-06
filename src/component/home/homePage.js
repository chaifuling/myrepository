import React,{Component} from "react";
import HeaderCom from "../common/header/header";
import SearchCom from "../common/search/search";
import FooterCom from "../common/footer/footer";
import FilterCom from "../common/filter/filter";
import {connect} from "react-redux";
import "./home.css";
import {
    getHomeTitleAction,
    getHomeNavAction,
    getHomeAdAction,
    getHomeGoodsAction
} from "../../store/action/createAction";

class HomeCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:""
        }
    }
    render(){
        return(
            <div id="container">
                <HeaderCom title={this.props.title}/>
                <SearchCom/>
                <div className="content-home">
                    <div id="nav">
                        <ul>
                            {
                                this.props.nav.map((item,index)=>{
                                    return <li key={index}>
                                        <img src={this.handleToImg(item.image_hash)}/>
                                        <span>{item.name}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div id="ad">
                            <div className="ad_main">
                                 <h3>品质套餐</h3>
                                 <p>搭配齐全吃得好</p>
                                 <p>立即抢购></p>
                                 <img src="http://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png"/> 
                            </div>
                            <div className="ad_main">
                                 <h3>{this.props.ad[0]?this.props.ad[0].name:""}</h3>
                                 <p>{this.props.ad[0]?this.props.ad[0].description:""}</p>
                                 <p>立即抢购></p>
                                 <img src={this.handleToImg(this.props.ad[0]?this.props.ad[0].image_hash
:"")}/> 
                            </div>
                    </div>
                    <div id="shoplist-title">
                         <h3>推荐商家</h3>           
                    </div>
                    <FilterCom/>
                    <div id="shoplist">
                        <ul>
                            {
                                this.props.items.map((item,index)=>{
                                    return <li key={index}>
                                            
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <FooterCom/>
            </div>

        )
    }

    handleToImg(hash){
        let imgUrl ="http://fuss10.elemecdn.com/";
        if(hash.indexOf("jpeg")){
            return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".jpeg";
        }else if(hash.indexOf("png")){
            return imgUrl+hash[0]+"/"+hash[1]+hash[2]+"/"+hash.slice(3)+".png";
        }
        //7d8a867c870b22bc74c87c348b75528djpeg
        //http://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg
    }
    componentDidMount(){
        /*
            https://h5.ele.me
            /restapi/bgs/poi/reverse_geo_coding
            latitude=28.208012
            longitude=112.881993
        */
        this.props.getHomeData();
    }
}
const mapDispatchToProps = (dispatch)=>({
    getHomeData:function(){
        getHomeTitleAction(dispatch)
        getHomeNavAction(dispatch)
        getHomeAdAction(dispatch)
        getHomeGoodsAction(dispatch)
    }
})
const mapStateToProps = (state)=>({
    title:state.homeReducers.title,
    nav:state.homeReducers.nav,
    ad:state.homeReducers.ad,
    items:state.homeReducers.items
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeCom)


/* 
app.use("/restapi",httpProxyMiddleware({
    target:"https://h5.ele.me",
    changeOrigin:true
  }))

*/