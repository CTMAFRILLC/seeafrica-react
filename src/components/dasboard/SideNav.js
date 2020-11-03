import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SideNav extends Component {
    render() {
        const {active} = this.props
        return (
            <aside className="aside__dashboard col-lg-3">
                <nav className="py-2">
                    <ul>
                        <li className={active === 'dashboard' ? 'active' : '' }><Link to={"/dashboard"}>dashboard</Link></li>
                        <li className={active === 'profile' ? 'active' : '' }><Link to={"/profile"}>profile</Link></li>
                        <li className={active === 'payments' ? 'active' : '' }><Link to={"/payments"}>payments</Link></li>
                        <li className={active === 'inbox' ? 'active' : '' }><Link to={"/inbox"}>inbox</Link></li>
                        <div className="sa-dashboad-divider">
                            <div className="py-5" />
                            <div className="py-5" />
                        </div>
                        signout
                    </ul>
                </nav>
            </aside>
        )
    }
}
