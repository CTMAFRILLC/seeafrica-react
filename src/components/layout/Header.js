import React, { Component } from 'react'
import './Header.css'
import logo from '../../assets/icons/png/Logo Placement.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="d-flex align-items-center">
                <strong>{user ? `${user.username}` : ''}</strong>
                <button onClick={this.props.logout} className="btn header__btn ml-2">sign out</button>
            </div>
        );

        const guestLinks = (
            <div>
                <Link to={'/login'} className ="btn header__btn">sign in</Link>
            </div>
        );

        return (
            <header className="col-12 header">
                <div className ="container">
                    <div className ="row align-items-center justify-content-between">
                        <div className ="d-flex align-items-center">
                            <Link to={'/'}>
                                <img src={logo} className="header__logo mr-3" alt="" />
                            </Link>
                        </div>
                        {/* ### */}
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </div>
          </header> 
        )
    }
}



const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
