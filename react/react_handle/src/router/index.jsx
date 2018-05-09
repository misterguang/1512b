import React from "react"
import {
  // HashRouter as Router
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import AsyncComponent from "../tool/asyncComponent"

// import App from "../components/app"
// import Index from "../components/index"

const App = AsyncComponent(() => import("../components/app"));
const Index = AsyncComponent(() => import("../components/index/index"));
const ChooseLocation = AsyncComponent(() => import("../components/index/chooseLocation"));



const baseRouter=()=>{

  return (

    <Router basename="/" >
        <App>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/chooseLocation" component={ChooseLocation} />
          </Switch>
        </App>
      </Router>
  )
}

export default baseRouter