import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import store from "./store/store";
import HomeCom from "./component/home/homePage";
import FindCom from "./component/find/findPage";
import OrderCom from "./component/order/orderPage";
import MyCom from "./component/my/myPage";
import {Provider} from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <div>
                  <Switch>
                  <Route exact path="/" render={()=>{
                      return <Redirect to="/home"/>
                    }}></Route>

                    <Route path="/home" render={()=>{
                      return <HomeCom/>
                    }}></Route>

                     <Route path="/find" render={()=>{
                      return <FindCom/>
                    }}></Route>

                     <Route path="/order" render={()=>{
                      return <OrderCom/>
                    }}></Route>

                     <Route path="/my" render={()=>{
                      return <MyCom/>
                    }}></Route>
                  </Switch>
              </div>
          </Router>
      </Provider>
    );
  }
}

export default App;
