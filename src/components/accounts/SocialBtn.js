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
        let facebookResponse = await this.props.fbLogin(response.accessToken);
        console.log('facebookResponse', facebookResponse);
        console.log('Respose', response);
    };
    
    responseGoogle = async (response) => {
        let googleResponse = await this.props.googleLogin(response.accessToken);
        console.log('googleResponse', googleResponse);
        console.log('Respose', response);
    };

    render() {

        return (
            <div className="my-2 d-flex justify-content-between">
                <GoogleLogin 
                    clientId = "544513198345-82jojq661i8drp80kmekocbmhc9i0tfk.apps.googleusercontent.com"
                    onSuccess = {this.responseGoogle}
                    onFailure = {this.responseGoogle}
                    buttonText = "Google"
                    icon={false}
                    className="btn df__btn"
                    cssClass="btn df__btn"
                />
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

export default connect(null, { fbLogin, googleLogin })(SocialBtn)