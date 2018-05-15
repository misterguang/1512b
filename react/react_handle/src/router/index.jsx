import React from "react"
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom"

import AsyncComponent from "../tool/asyncComponent"

// import App from "../components/app"
// import Index from "../components/index"
// import ChooseLocation from "../components/index/chooseLocation"
// import ChooseLicencePlate from "../components/index/chooseLicencePlate"
// import BuyCar from "../components/buyCar/buyCar"

const App = AsyncComponent(() => import("../components/app"));
const Index = AsyncComponent(() => import("../components/index/index"));
const ChooseLocation = AsyncComponent(() => import("../components/index/chooseLocation"));
const ChooseLicencePlate = AsyncComponent(() => import("../components/index/chooseLicencePlate"));
const BuyCar = AsyncComponent(() => import("../components/buyCar/buyCar"));
// const Content = AsyncComponent(() => import("../components/buyCar/Content"));



const baseRouter=()=>{

  return (

    <Router basename="/" >
        <App>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/chooseLocation" component={ChooseLocation} />
            <Route exact path="/chooseLicencePlate" component={ChooseLicencePlate} />
            <Route path="/buyCar" component={ BuyCar} />

          </Switch>
        </App>
      </Router>
  )
}



export default baseRouter