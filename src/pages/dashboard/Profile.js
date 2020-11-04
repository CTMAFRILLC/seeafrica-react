import React, { Component } from 'react'
import Wrapper from '../../components/dasboard/Wrapper'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


class Profile extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }
    render(){
        const { user } = this.props.auth;
    return (
        <Wrapper sidenav="profile">
            <div className="dashboard__ma col-lg-9">
                <div className="dashboard__title py-2">
                    <h1>Profile</h1>
                </div>
                <div className="toursite__desc sa-preveiw-dashboad">
                    <div className="row align-items-center justify-content-between dashboard__inputfield">
                        <div className="col-2 pl-0">
                            <p className="m-0">Username</p>
                        </div>
                        <div className="col-8">
                            <p className="m-0">{user.username}</p>
                        </div>
                        <div className="pr-2">
                            <a href="#"   data-toggle="modal" data-target="#usernameModal">Edit</a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between dashboard__inputfield">
                        <div className="col-2 pl-0">
                            <p className="m-0">Email address</p>
                        </div>
                        <div className="col-8 p-0">
                            <p className="m-0">{user.email}</p>
                        </div>
                        <div className="pr-2">
                            <a href="#"></a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between dashboard__inputfield">
                        <div className="col-2 pl-0">
                            <p className="m-0">Password</p>
                        </div>
                        <div className="col-8">
                            <p className="m-0">***********</p>
                        </div>
                        <div className="pr-2">
                            <a href="#"  data-toggle="modal" data-target="#passwordModal">Edit</a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between dashboard__inputfield">
                        <div className="col-2 pl-0">
                            <p className="m-0">Language</p>
                        </div>
                        <div className="col-8">
                            <p className="m-0">English-UK</p>
                        </div>
                        <div className="pr-2">
                            <a href="#">Edit</a>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between dashboard__inputfield">
                        <div className="col-2 pl-0">
                            <p className="m-0">Profile Picture</p>
                        </div>
                        <div className="pr-2">
                            <a href="#"  data-toggle="modal" data-target="#profileModal">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
}


const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
export default connect(mapStateToProps)(Profile);
  