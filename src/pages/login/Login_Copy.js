import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import Timer from 'otp-timer'


// import NetworkDetector from './Hoc/NetworkDetector';
// import NetworkDetector from '../../components/Hoc/NetworkDetector';

class Login extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(userActions.logout());
    this.loginSubmit = this.loginSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fieldslogin: {},
      errorslogin: {},
      otpSentLogin: false

    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.otpSentLogin) {
      return {
        ...nextProps,
        // fieldslogin: {},
        // errorslogin: {},
        otpSentLogin: nextProps.otpSentLogin ? nextProps.otpSentLogin : false

      }
    } else {
      return {
        ...nextProps
      }
    }
  }


  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    // // console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }


  loginSubmit(e) {
    e.preventDefault();
    if (this.handleValidationLogin()) {
      let { userName, password, } = this.state;
      this.props.dispatch(userActions.login({ userName: userName, password: password, }, this.props));
    }

  }

  resendSubmit = (e) => {
    // e.preventDefault();
    if (this.handleValidationLogin()) {
      let { userName, password, } = this.state;
      this.props.dispatch(userActions.login({ userName: userName, password: password, }, this.props));
    }

  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldslogin: {},
      errorslogin: {},
    })
    this.hideErrorMessage();
  }


  handleValidationLogin = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Email
    // if (!fieldslogin["email"] || fieldslogin["email"] === "") {
    //   formIsValid = false;
    //   errorslogin["email"] = "Please Enter Email Address";
    // }
    // if (typeof fieldslogin["email"] !== "undefined" && fieldslogin["email"] !== "") {
    //   let lastAtPos = fieldslogin["email"].lastIndexOf('@');
    //   let lastDotPos = fieldslogin["email"].lastIndexOf('.');

    //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldslogin["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldslogin["email"].length - lastDotPos) > 2)) {
    //     formIsValid = false;
    //     errorslogin["email"] = "Enter valid email!";
    //   }
    // }

    //userName
    // if (!fieldslogin["userName"] || !fieldslogin["userName"].match("^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$")) {
    //   formIsValid = false;
    //   errorslogin["userName"] = "Please Enter Valid Name!";
    // }

    //userName
    if (!fieldslogin["userName"]) {
      formIsValid = false;
      errorslogin["userName"] = "Please Enter UserName!";
    }

    //Password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Please Enter Password!";
    }
    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  componentDidMount() {

  }

  onClickMenu = (url) => {
    // console.log("url:", url);
    this.props.history.push(url)
  }

  otpSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationOTP()) {
      let { token } = this.props.registeruser;
      let { OTP } = this.state;
      this.props.dispatch(userActions.validateLoginOtp({
        token: token,
        otp: OTP
      }, this.props));
    }
  }

  handleValidationOTP = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Name
    if (!fieldslogin["OTP"]) {
      formIsValid = false;
      errorslogin["OTP"] = "please enter OTP!";
    }

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  render() {
    let { loading } = this.props;

    // console.log("Render______this.state.otpSentLogin:::", this.state.otpSentLogin);

    return (
      <>

        <div>
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        <>

          {/* Whole Structure */}
          <div className="overflow-y-auto">
            {/*Header Section */}
            <div className="bg-cover bg-no-repeat overflow-y-auto" style={{ backgroundImage: `url("newImg/lOGIN.png")` }}>
              <div className="h-screen flex flex-col justify-center py-12 px-3 sm:px-6 lg:px-8 z-20  overflow-y-auto">
                <div className="mx-auto w-full  max-w-lg">
                  <div className="bg-dark border border-gray-800 py-16 shadow rounded-3xl px-6 sm:px-12">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm" onClick={() => this.onClickMenu('/')}>
                      <img src="dist/img/Logo.png"  alt="packages"  className="text-center mx-auto h-[60px] mb-10" />
                    </div>

                    <h2 className="mb-4 text-left text-3xl leading-9 font-bold uppercase text-white tracking-wide">Login</h2>

                    <form autoComplete="off">

                      <div className="{otpSent?'disableArea':''}">
                        <label className="text-white text-sm">User Name</label>
                        <div className="mt-1 rounded-md shadow-sm relative">
                          <input disabled={this.state.otpSentLogin} className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["userName"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                            id="userName" name="userName" placeholder="User Name" type="userName" onChange={this.inputChange} />
                          {this.state.errorslogin["userName"] ?
                            <div className="invalid-feedback text-yellow-400">
                              {this.state.errorslogin["user Name"]}
                            </div>
                            : null}
                          <span className="absolute top-3 left-5 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg></span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <label className="text-white text-sm">Password</label>
                        <div className="mt-1 rounded-md shadow-sm relative">
                          <input disabled={this.state.otpSentLogin} className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                            id="password" name="password" placeholder="Password" type="password" onChange={this.inputChange} />
                          {this.state.errorslogin["password"] ?
                            <div className="invalid-feedback text-yellow-400">
                              {this.state.errorslogin["password"]}
                            </div>
                            : null}
                          <span className="absolute top-3 left-5 text-gray-400 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg></span>
                        </div>

                        {
                          this.state.otpSentLogin ?
                            <div className="mt-6">
                              <label className="text-white text-sm">OTP</label>
                              <div className="mt-1 rounded-md shadow-sm relative">
                                <input className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                  id="OTP" name="OTP" placeholder="OTP" type="OTP" onChange={this.inputChange} />
                                {this.state.errorslogin["OTP"] ?
                                  <div className="invalid-feedback text-yellow-400">
                                    {this.state.errorslogin["OTP"]}
                                  </div>
                                  : null}
                                <span className="absolute top-3 left-5 text-gray-400 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg></span>
                              </div>
                            </div>
                            : null
                        }
                      </div>


                      {
                        this.state.otpSentLogin ?
                          <div className="flex md:w-3/6 w-5/6  mx-auto  mr-auto justify-between lg:mt-5 mt-3 items-center ">
                            <div className="flex items-center  lg:ml-0 ml-2 py-2">
                              {/* <h1 className="lg:text-sm text-[10px] text-blue-400 cursor-pointer" onClick={this.loginSubmit}>Resend OTP</h1> */}
                              <Timer textColor={"white"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.resendSubmit} />
                            </div>
                          </div> : null
                      }


                      {
                        this.state.otpSentLogin ?
                          <div className="mt-6  mx-auto">
                            <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="submit" onClick={this.otpSubmit}>Verify OTP</button>
                          </div>
                          :
                          <div className="mt-6  mx-auto">
                            <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="submit" onClick={this.loginSubmit}>Sign in</button>
                          </div>

                      }

                    </form>
                    <div className="mt-10 w-64 sm:w-80 mx-auto">
                      <div className="flex justify-between">
                        <div className="text-sm text-center justify-center flex">
                          <span className="cursor-pointer font-light text-gray-300 hover:text-green-600 hover:underline focus:outline-none focus:underline transition ease-in-out duration-150 ml-0" onClick={() => this.onClickMenu('forgot')}>Forgot password?</span>
                        </div>
                        <div className="text-sm text-center justify-center flex">
                          <span className="cursor-pointer font-light text-gray-300 hover:text-green-600 hover:underline focus:outline-none focus:underline transition ease-in-out duration-150 ml-0" onClick={() => this.onClickMenu('forgotUserName')}>Forgot UserName?</span>
                        </div>
                      </div>
                      <div className="leading-5 text-center pt-6 font-light">
                        <p className="text-base text-gray-300">Don't have an account?
                          <span className="cursor-pointer text-green-600  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('signup')}> Sign up</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Whole Structure End*/}


        </>

      </>
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn, user, otpSentLogin, registeruser, loading } = state.authentication;
  const { users, authentication } = state;
  return {
    loggingIn,
    otpSentLogin,
    user,
    users,
    registeruser,
    loading,
    authentication
  };
}
export default connect(mapStateToProps)(Login);
// export default NetworkDetector(connect(mapStateToProps)(Login));