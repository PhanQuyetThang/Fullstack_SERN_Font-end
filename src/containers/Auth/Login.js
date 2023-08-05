import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from '../../store/actions';
import { userLoginSuccess } from '../../store/actions';
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: '',
            isShowPassword: false,
        }
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: '',
        })
        console.log('Username: ', this.state.username, 'password: ', this.state.password)
        // console.log("All state", this.state);
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.eerCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                //todo
                this.props.userLoginSuccess(data.user)
                console.log('Login succeed')
            }
        } catch (error) {
            console.log("Check error: ", error.response)
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }
    handleshowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className="col-12 text-center text-login">Sign in</div>
                        <div className='col-12 social-login row'>
                            <div className='col-6 login-google'>
                                <i classname="fab fa-google-plus-g google"></i>
                            </div>
                            <div className=' col-6 login-facebook'>
                                <i classname="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                        <div className='col-12 mt-3 text-center'>
                            <span>Or use your account</span>
                        </div>
                        <div className="col-12 form-group login-input">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='Enter your username...'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <div className='custom-password-input'>
                                <input
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder='Enter your password...'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick={() => this.handleshowHidePassword()}>
                                    <i classname={this.state.isShowPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                                </span>
                            </div>

                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12' >
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Sign in</button>
                        </div>
                        <div className='col-12 forgot-password'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12'>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
