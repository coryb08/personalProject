import React, { Component } from "react"
import uuid from "uuid"
import { connect } from "react-redux"
import * as actions from "../actions"

const Home = props => {
  console.log("inside favs ", props)
  const handleOffClick = () => {
    props.handleWarning(false)
  }

  return (
    <div className="home">
      <h1 className="greeting">Hello</h1>
      <br />

      <div className="message">
        My website is in the works. <br />In the mean time here are some links.
      </div>
      <div className="links">
        <a
          target="_blank"
          href="https://www.facebook.com/corydbaker"
          className="facebook"
        />

        <a
          target="_blank"
          href="https://medium.com/@corybaker_54290"
          className="medium"
        />

        <a
          target="_blank"
          href="https://www.linkedin.com/in/cory-baker-5a533895/"
          className="linkedin"
        />

        <a href="mailto:douglasb2008@gmail.com" className="email" />

        <a
          target="_blank"
          href="https://stackoverflow.com/users/9094578/cory-baker?tab=profile"
          className="stackOverflow"
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Home)
