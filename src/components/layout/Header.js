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
        const {active} = this.props
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="d-flex align-items-center">
                {/* <strong>{user ? `${user.username}` : ''}</strong> */}

                {/* <button onClick={this.props.logout} className="btn header__btn ml-2">sign out</button> */}
                <div className="mx-2 header__imgContainer">
                  <Link to={"/dashboard"}><img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/s53-ae-num-009656545000.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d39e0cd4a19eb5c941a940c25efc8caf" className=" img-circle" alt="" /></Link></div>
            </div>
        );

        const guestLinks = (
            <div>
                <Link to={'/login'} className ="btn header__btn">sign in</Link>
            </div>
        );

        const navLinks = (
            <ul className="header__navLinks d-flex">
                <li className="header__navLink"><Link to={"/home"} className={active === 'home' ? 'active' :''}>Home</Link></li>
                <li className="header__navLink"><Link to={"/explore"} className={active === 'explore' ? 'active' :''}>Explore</Link></li>
                <li className="header__navLink"><Link to={"/support"} className={active === 'support' ? 'active' :''}>Support</Link></li>
            </ul>
        )

        return (
            <header className="col-12 header">
                <div className ="container">
                    <div className ="row align-items-center justify-content-between">
                        <div className ="d-flex align-items-center">
                            <Link to={'/'}>
                                <img src={logo} className="header__logo mr-3" alt="" />
                            </Link>
                            {/* ### */}
                            {isAuthenticated ? navLinks : ''}
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
