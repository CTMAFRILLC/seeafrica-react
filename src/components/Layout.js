import React, { Component } from 'react'
import './Layout.css'
import Alerts  from './layout/Alerts'
import Header from './layout/Header'
export default class Layout extends Component {
  render() {
    return (
      <section id="sa_container">
        <Header />
        <Alerts/>
        {this.props.children}
      </section>
    )
  }
}
