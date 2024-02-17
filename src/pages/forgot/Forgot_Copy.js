import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import Timer from 'otp-timer'



class Signup extends Component {
  constructor(props) {
    super(props);
    // this.props.dispatch(userActions.logout());
    this.state = {
      fieldslogin: {},
      errorslogin: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.authentication.isForgotSuccess) {
      return {
        ...nextProps,
        fieldslogin: {},
        errorslogin: {},
      }
    } else {
      return {
        ...nextProps
      }
    }
  }

  inputChange = (e) => {

    e.preventDefault();
    let { name, value } = e.target;
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    // console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }



  forgotPasswordSubmit = (e) => {
    // e.preventDefault();
    if (this.handleValidationLogin()) {

      let { userName } = this.state.fieldslogin;

      this.props.dispatch(userActions.forgotPassword({
        userName: userName,
      }, this.props));
    }
  }

  // resendOtpSubmit = (e) => {
  //   if (this.handleValidationLogin()) {

  //     let { email } = this.state.fieldslogin;

  //     this.props.dispatch(userActions.forgotPassword({
  //       email: email,
  //     }, this.props));
  //   }
  // }

  otpSubmit = () => {
    // e.preventDefault();
    if (this.handleValidationOTP()) {

      // console.log("handleValidationOTPhandleValidationOTPhandleValidationOTP:::");
      let { token } = this.props.forgotuser;
      let { OTP, password, confirmPassword } = this.state.fieldslogin;
      this.props.dispatch(userActions.forgotUpdatePassword({
        token: token, newPassword: password, confirmnewPassword: confirmPassword,
        otp: OTP
      }, this.props));
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

  handleValidationOTP = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Name
    if (!fieldslogin["OTP"]) {
      formIsValid = false;
      errorslogin["OTP"] = "Please enter OTP!";
    }
    //password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Invalid Password!";
    }

    //confirmPassword
    if (!fieldslogin["confirmPassword"]) {
      formIsValid = false;
      errorslogin["confirmPassword"] = "Invalid confirmPassword!";
    }
    // // //newPassword
    // if (!fieldslogin["newPassword"] || !fieldslogin["newPassword"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
    //   formIsValid = false;
    //   errorslogin["newPassword"] = "Invalid Password!";
    // }

    // //ConfirmPassword
    // if (!fieldslogin["confirmPassword"] || !fieldslogin["confirmPassword"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
    //   formIsValid = false;
    //   errorslogin["confirmPassword"] = "Invalid Confirm Password!";
    // }

    // console.log("errorsloginerrorsloginerrorsloginerrorslogin", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }


  handleValidationLogin = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Email

    if (!fieldslogin["userName"] || fieldslogin["userName"] === "") {
      formIsValid = false;
      errorslogin["userName"] = "Cannot Be Empty";
    }

    if (typeof fieldslogin["email"] !== "undefined" && fieldslogin["email"] !== "") {
      let lastAtPos = fieldslogin["email"].lastIndexOf('@');
      let lastDotPos = fieldslogin["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldslogin["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldslogin["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorslogin["email"] = "Enter Valid Email!";
      }
    }

    // //Password
    // if (!fieldslogin["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
    //   formIsValid = false;
    //   errorslogin["password"] = "Invalid Password!";
    // }

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  componentDidMount() {
  }
  onClickMenu = (url) => {
    this.props.history.push(url)
  }



  render() {
    let { otpSentForgotPass, forgotuser, loading } = this.props;
    // let { token } = this.props.forgotuser;

    // console.log("RENDER___this.state.fieldslogin", this.state.fieldslogin);
    // console.log("RENDER___forgotuser", forgotuser);

    return (
      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        {/* Whole Structure */}
        <div className="overflow-y-auto">
          {/*Header Section */}
          <div className="bg-cover bg-no-repeat overflow-y-auto" style={{ backgroundImage: `url("newImg/lOGIN.png")` }}>
            <div className="h-screen flex flex-col justify-center py-12 px-3 sm:px-6 lg:px-8 z-20  overflow-y-auto">
              <div className="mx-auto w-full  max-w-lg">
                <div className="bg-dark border border-gray-800 py-16 shadow rounded-3xl px-6 sm:px-12">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <a className='cursor-pointer' onClick={() => this.onClickMenu('/')}  ><img src="dist/img/Logo.png" alt="" className="text-center mx-auto h-[60px] mb-10" /></a>
                  </div>

                  <h2 className="text-left text-3xl leading-9 font-bold uppercase text-white tracking-wide">Forgot Password</h2>

                  <form autoComplete="off">
                    <h2 className="text-lg py-3 font-medium text-white">For recover your password</h2>

                    <div className="{otpSent?'disableArea':''}">

                      <label className="text-white text-sm">Email</label>

                      <div className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={otpSentForgotPass ? true : false} className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["userName"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                          id="userName" name="userName" placeholder="Enter User ID" type="userName" onChange={this.inputChange} />
                        {this.state.errorslogin["userName"] ?
                          <div className="invalid-feedback text-yellow-400">
                            {this.state.errorslogin["userName"]}
                          </div>
                          : null}
                        <span className="absolute top-3 left-5 text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg></span>
                      </div>

                    </div>

                    <div className="mt-6">
                      {
                        otpSentForgotPass ?
                          <>
                            <div className="mt-6">
                              <label className="text-white text-sm">OTP</label>
                              <div className="mt-1 rounded-md shadow-sm relative">
                                <input className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                  id="OTP" name="OTP" placeholder="Password" type="OTP" onChange={this.inputChange} />
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

                            <div className="mt-6">
                              <label className="text-white text-sm">New Password</label>
                              <div className="mt-1 rounded-md shadow-sm relative">
                                <input className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                  id="password" name="password" placeholder="New Password" type="password" onChange={this.inputChange} />
                                {this.state.errorslogin["password"] ?
                                  <div className="invalid-feedback text-yellow-400">
                                    {this.state.errorslogin["password"]}
                                  </div>
                                  : null}
                                <span className="absolute top-3 left-5 text-gray-400 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg></span>
                              </div>
                            </div>

                            <div className="mt-6">
                              <label className="text-white text-sm">Confirm New Password</label>
                              <div className="mt-1 rounded-md shadow-sm relative">
                                <input className={`appearance-none block w-full px-4 pl-14 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["confirmPassword"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                  id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password" type="password" onChange={this.inputChange} />
                                {this.state.errorslogin["confirmPassword"] ?
                                  <div className="invalid-feedback text-yellow-400">
                                    {this.state.errorslogin["confirmPassword"]}
                                  </div>
                                  : null}
                                <span className="absolute top-3 left-5 text-gray-400 "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg></span>
                              </div>
                            </div>
                          </>
                          : null
                      }
                    </div>


                    {
                      otpSentForgotPass ?
                        <div className="flex md:w-3/6 w-5/6  mx-auto  mr-auto justify-between lg:mt-5 mt-3 items-center ">
                          <div className="flex items-center  lg:ml-0 ml-2 py-2">
                            <Timer textColor={"white"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.forgotPasswordSubmit} />
                          </div>
                        </div> : null
                    }


                    {
                      otpSentForgotPass ?
                        <div className="mt-6  mx-auto">
                          <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="button" onClick={this.otpSubmit}>Verify OTP</button>
                        </div>
                        :
                        <div className="mt-6  mx-auto">
                          <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="button" onClick={this.forgotPasswordSubmit}>Recover Password</button>
                        </div>

                    }

                  </form>
                  <div className="mt-10 w-64 sm:w-72 mx-auto">
                    {/* <div className="text-lg leading-5 text-center justify-center flex">
                      <span className="cursor-pointer font-light text-gray-300 hover:text-gray-500 hover:underline focus:outline-none focus:underline transition ease-in-out duration-150 ml-0" onClick={() => this.onClickMenu('forgot')}>Forgot password?</span>
                    </div> */}
                    <div className="leading-5 text-center pt-2 font-light">
                      <p className="text-base text-gray-300">Don't have an account?
                        <span className="cursor-pointer text-red-600  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('signup')}> Sign up</span>
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
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn, otpSentForgotPass, forgotuser, loading } = state.authentication;
  const { users, authentication } = state;
  return {
    loggingIn,
    forgotuser,
    otpSentForgotPass,
    users,
    loading,
    authentication
  };
}
export default connect(mapStateToProps)(Signup);
