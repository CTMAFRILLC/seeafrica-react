// import { Link } from 'react-router-dom'
import Header from '../layout/Header'
import React, { Component } from 'react'
import Footer from '../layout/Footer'
import './Auth.css'


export default class Auth extends Component {
  render() {
    return (
        <>
            <Header />
            <main className="container">
                <div className="col-12">
                    <div className="row wrapper__container align-content-center justify-content-center">
                        <div className="wrapper col-lg-7 mx-auto">
                            <div className="row"> 
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
}
