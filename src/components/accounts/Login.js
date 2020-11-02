import React, { Component } from 'react';
import Auth from './Auth';

import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


class Login extends Component {
    state = {
        username: '',
        password: '',
    }

      
    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }
    
    onChange = (e) => this.setState({ [e.target.name] : e.target.value});
    
    render() {
        if (this.props.isAuthenticated){
            return <Redirect to="/dashboard" />;
        }
        const { username, password } = this.state;
        return (
            <Auth>
                <div className="col-md-6 col__left">
                    <div className="mb-4">
                        <h3 className="txt1">Sign In</h3>
                        <h4 className="txt2"> New User? <a to={"/sign-up"} className="txt3"> Create an Account</a></h4>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input 
                                type="text" 
                                className="text__input" 
                                placeholder="Username"
                                name="username" required
                          onChange={this.onChange} 
                          value={username}
                            />
                        </div>
                        <div>
                            <input type="password" className="text__input" placeholder="Password" name="password"  required  onChange={this.onChange} value={password} />
                        </div>
                        <div className="checkbox__container my-2">
                            <label className="checkbox__label">
                                <input type="checkbox" />
                                <div className="input__title">Keep me signed in</div>
                                    <span className="checkbox__custom rectangular" />
                            </label>
                        </div>
                        <div className="my-2">
                            <button type="submit" className="btn form__btn">sign in</button>
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
  
export default connect(mapStateToProps, { login })(Login)