import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import SigoutSvg from '../../assets/icons/svg/signout.svg'
class SideNav extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    }
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
                        <li>
                            <button className="btn" onClick={this.props.logout}><img src={SigoutSvg} /> sign out</button>
                        </li>
                    </ul>
                </nav>
            </aside>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
export default connect(mapStateToProps, { logout })(SideNav);