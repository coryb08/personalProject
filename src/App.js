import React, { Component } from "react"
import "./App.css"
import reducer from "./reducers"
import * as actions from "./actions"
import { connect } from "react-redux"
import { store } from "./store.js"
import { bindActionCreators } from "redux"
import Home from "./components/Home"

export class App extends Component {
  componentDidMount = () => {
    this.props.actions.fetchArticles()
  }
  render() {
    if (false) {
    } else {
      return (
        <div>
          <div className="container">
            <Home />
          </div>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
