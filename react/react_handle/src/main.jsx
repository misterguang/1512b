
import React from "react"
import reactDom from "react-dom"

import Router from "./router/index"
import {Provider} from "react-redux"
import store from "./store/index"

// import 'antd-mobile/dist/antd-mobile.css';
reactDom.render(
  <Provider store={store}>
    <Router />
  </Provider>
,
document.getElementById("app"))