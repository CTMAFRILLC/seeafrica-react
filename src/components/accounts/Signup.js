import React, { Component } from 'react';
import Auth from './Auth';

import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

class Signup extends Component {
    state = {
        username: '',
        email: '',
        password1: '',
        password2: '',
    };
    
    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };
    
    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password1, password2 } = this.state;
        if (password1 !== password2) {
          this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
          const newUser = {
            username,
            email,
            password1,
            password2,
          };
          this.props.register(newUser);
        }
    };
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/dashboard" />;
        }
        const { username, email, password1, password2 } = this.state;
        return (
            <Auth>
                <div className="col-md-6 col__left">
                    <div className="mb-2">
                        <h3 className="txt1">Create an Account</h3>
                        <h4 className="txt2"> Already A User? <Link to={"/login"} className="txt3"> Sign in</Link></h4>
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input type="text" className="text__input" placeholder="Username" required name="username" onChange={this.onChange} value={username}/>
                        </div>
                        <div>
                            <input type="email" className="text__input" placeholder="Email" required name="email" onChange={this.onChange} value={email}/>
                        </div>
                        <div>
                            <input type="password" className="text__input" placeholder="Password" required name="password1" onChange={this.onChange} value={password1}/>
                        </div>
                        <div>
                            <input type="password" className="text__input" placeholder="Confirm Password" required name="password2" onChange={this.onChange} value={password2}/>
                        </div>
                        <div className="my-2">
                            <button type="submit" className="btn form__btn">
                            create an account
                            </button>
                        </div>

                        <div>
                            <div className="my-2 form__quest">
                                <span className="form__questDash" />
                                <span>Or sign in with</span>
                                <span className="form__questDash" />
                            </div>
                            <div className="my-2 d-flex justify-content-between">
                                <a href="#" className="btn df__btn">Google</a>
                                <a href="#" className="btn df__btn">Facebook</a>
                            </div>
                        </div>

                        
                    </form>
                </div>
            </Auth>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, { register, createMessage })(Signup);