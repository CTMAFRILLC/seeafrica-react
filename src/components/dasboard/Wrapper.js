import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../layout/Header';
import SideNav from './SideNav';
import './Wrapper.css';

export default class Wrapper extends Component {
    render() {
        const {sidenav} = this.props
        return (
            <div>
                <main className="container p-0">
                    <div className="row wrapper__container align-items-start pt-4">
                        <SideNav active={sidenav}/>
                         {this.props.children}
                       </div>
                </main>
            </div>
        )
    }
};
