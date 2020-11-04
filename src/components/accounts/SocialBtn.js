import React, { Component } from 'react'
import ReactFacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fbLogin, googleLogin } from '../../actions/auth';


class SocialBtn extends Component {
    static propTypes = {
        fbLogin: PropTypes.func.isRequired,
        googleLogin: PropTypes.func.isRequired,
      
    }
    responseFacebook = async (response) => {
        this.props.fbLogin(response.accessToken);
    };

    render() {

        const responseGoogle = async (response) => {
            let googleResponse = await googleLogin(response.accessToken);
            console.log(googleResponse);
            console.log(response);
          };

        return (
            <div className="my-2 d-flex justify-content-between">
                {/* <GoogleLogin 
                    clientId = "544513198345-82jojq661i8drp80kmekocbmhc9i0tfk.apps.googleusercontent.com"
                    onSuccess = {responseGoogle}
                    onFailure = {responseGoogle}
                    buttonText = "Google"
                    icon={false}
                    className="btn df__btn"
                    cssClass="btn df__btn"
                /> */}
                <ReactFacebookLogin 
                    appId = "1041512509617176"
                    fields = "name,email,picture"
                    callback = {this.responseFacebook }
                    cssClass="btn df__btn"
                    textButton="Facebook"
                />
            </div> 
        )
    }
}

export default connect(null, { fbLogin })(SocialBtn)