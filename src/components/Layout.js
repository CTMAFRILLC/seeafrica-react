import React, { Component } from 'react'
import './Layout.css'
import Alerts  from './layout/Alerts'
export default class Layout extends Component {
  render() {
    return (
      <section id="sa_container">
        <Alerts/>
        {this.props.children}
      </section>
    )
  }
}
