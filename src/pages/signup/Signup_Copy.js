
import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import Timer from 'otp-timer'



class Signup extends Component {
  constructor(props) {
    super(props);
    // this.props.dispatch(userActions.logout());
    this.registerSubmit = this.registerSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fieldslogin: {},
      errorslogin: {},
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
    // console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }

  registerSubmit(e) {
    // alert("Hello! I am an alert box!!");
    e.preventDefault();
    if (this.handleValidationLogin()) {
      let data = {
        userName: this.state.fieldslogin.userName,
        name: this.state.fieldslogin.name,
        email: this.state.fieldslogin.email,
        // mobNo: this.state.fieldslogin.mobNo,
        password: this.state.fieldslogin.password,
        confirmPassword: this.state.fieldslogin.confirmPassword,
        refByCode: this.props.match.params.id ? this.props.match.params.id : (this.state.fieldslogin.refByCode ? this.state.fieldslogin.refByCode : "")
      }
      // console.log("registerSubmit___registerSubmit:::", data);
      this.props.dispatch(userActions.register(data, this.props));
    }
  }

  resendOtpSubmit = (e) => {
    // alert("Hello! I am an alert box!!");
    // e.preventDefault();
    if (this.handleValidationLogin()) {
      let data = {
        name: this.state.fieldslogin.name,
        email: this.state.fieldslogin.email,
        mobNo: this.state.fieldslogin.mobNo,
        password: this.state.fieldslogin.password,
        confirmPassword: this.state.fieldslogin.confirmPassword,
        refByCode: this.props.match.params.id ? this.props.match.params.id : (this.state.fieldslogin.refByCode ? this.state.fieldslogin.refByCode : "")
      }
      // console.log("registerSubmit___registerSubmit:::", data);
      this.props.dispatch(userActions.register(data, this.props));
    }
  }


  otpSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationOTP()) {
      let { token } = this.props.registeruser;
      let { OTP } = this.state;
      this.props.dispatch(userActions.registerValidateOtp({
        token: token,
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
      errorslogin["OTP"] = "please Enter OTP!";
    }

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }



  handleValidationLogin = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //Name
    // if (!fieldslogin["name"] || !fieldslogin["name"].match("^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$")) {
    //   formIsValid = false;
    //   errorslogin["name"] = "Please Enter Valid Name!";
    // }

    //userName
    if (!fieldslogin["userName"] || fieldslogin["userName"] === "" || !fieldslogin["userName"].match(/^\w+$/)) {
      formIsValid = false;
      errorslogin["userName"] = "Cannot Be Empty UserName";
    }

    // userName
    if (!fieldslogin["userName"] || !fieldslogin["userName"].match(/^\w+$/)) {
      formIsValid = false;
      errorslogin["userName"] = "UserName only allowed alphanumeric";
    }



    //Email
    if (!fieldslogin["email"] || fieldslogin["email"] === "") {
      formIsValid = false;
      errorslogin["email"] = "Cannot Be Empty";
    }

    if (typeof fieldslogin["email"] !== "undefined" && fieldslogin["email"] !== "") {
      let lastAtPos = fieldslogin["email"].lastIndexOf('@');
      let lastDotPos = fieldslogin["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldslogin["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldslogin["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorslogin["email"] = "Enter Valid Email!";
      }
    }

    // //mobNo
    // if (!fieldslogin["mobNo"] || !fieldslogin["mobNo"].match("^[0-9]{10}$")) {
    //   formIsValid = false;
    //   errorslogin["mobNo"] = "Please Enter Mobile No!";
    // }

    //Password
    // if (!fieldslogin["password"] || !fieldslogin["password"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
    //   formIsValid = false;
    //   errorslogin["password"] = "Invalid Password!";
    // }

    //confirmPassword
    // if (!fieldslogin["confirmPassword"] || !fieldslogin["confirmPassword"].match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")) {
    //   formIsValid = false;
    //   errorslogin["confirmPassword"] = "Invalid confirmPassword!";
    // }

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


    // refByCode
    // if (!fieldslogin["refByCode"] || !this.props.match.params.id) {
    //   formIsValid = false;
    //   errorslogin["refByCode"] = "Please enter the referral code !";
    // }

    // console.log("errorsloginerrorsloginerrorslogin", errorslogin);

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }



  inputChangeReferal = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    if (value.length === 8) {
      // alert("Hello! I am an alert box!!");
      this.props.dispatch(userActions.getUserByRefCode({ refCode: value }));
    }
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    // console.log(name, value);

    this.setState({ fieldslogin, errorslogin });
  }


  componentDidMount() {
    let data = "";
    data = this.props.match.params.id ? this.props.match.params.id : "!!!!"
    if (this.props.match.params.id) {
      this.props.dispatch(userActions.getUserByRefCode({ refCode: this.props.match.params.id }));

    }
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  render() {
    let { otpSentRegister, loading, users } = this.props;
    let { userByRefCode } = users;
    // console.log("render______userByRefCode::", userByRefCode);
    // console.log("render______this.props.match.params.id::", this.props.match.params.id);
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
              <div className="mx-auto w-full  max-w-[50rem]">
                <div className="bg-dark border border-gray-800 py-16 shadow rounded-3xl px-6 sm:px-12">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-8">
                    <a className='cursor-pointer' onClick={() => this.onClickMenu('/')}  > <img src="dist/img/Logo.png" alt="" className="text-center mx-auto h-[60px] mb-4" /></a>
                  </div>

                  <h2 className="mb-4 text-left text-3xl leading-9 font-bold uppercase text-white tracking-wide">Signup</h2>

                  <form autoComplete="off">
                    <div className="">
                      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="relative">
                          <label className="text-white text-sm">User Name</label>
                          <div className="mt-1 rounded-md shadow-sm relative">
                            <input disabled={otpSentRegister ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["userName"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                              id="userName" name="userName" placeholder="User Name" type="userName" onChange={this.inputChange} />
                            {this.state.errorslogin["userName"] ?
                              <div className="invalid-feedback text-red-600">
                                {this.state.errorslogin["user Name"]}
                              </div>
                              : null}
                          </div>
                        </div>

                        <div className="relative">
                          <label className="text-white text-sm">Email</label>
                          <div className="mt-1 rounded-md shadow-sm relative">
                            <input disabled={otpSentRegister ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["email"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                              id="email" name="email" placeholder="Email" type="email" onChange={this.inputChange} />
                            {this.state.errorslogin["email"] ?
                              <div className="invalid-feedback text-red-600">
                                {this.state.errorslogin["email"]}
                              </div>
                              : null}
                          </div>
                        </div>
                      </div>

                      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
                        <div className="relative">
                          <label className="text-white text-sm">Password</label>
                          <div className="mt-1 rounded-md shadow-sm relative">
                            <input disabled={otpSentRegister ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                              id="password" name="password" placeholder="password" type="password" onChange={this.inputChange} />
                            {this.state.errorslogin["password"] ?
                              <div className="invalid-feedback text-red-600">
                                {this.state.errorslogin["password"]}
                              </div>
                              : null}
                          </div>
                        </div>

                        <div className="relative">
                          <label className="text-white text-sm">Confirm Password</label>
                          <div className="mt-1 rounded-md shadow-sm relative">
                            <input disabled={otpSentRegister ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["confirmPassword"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                              id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" type="password" onChange={this.inputChange} />
                            {this.state.errorslogin["confirmPassword"] ?
                              <div className="invalid-feedback text-red-600">
                                {this.state.errorslogin["confirmPassword"]}
                              </div>
                              : null}
                          </div>
                        </div>
                      </div>

                      <div className="grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
                        {
                          this.props.match.params.id ?
                            <div className="">
                              <div className="relative">
                                <label className="text-white text-sm">Referral Code</label>
                                <div className="mt-1 rounded-md shadow-sm relative">
                                  <input disabled={true} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["refByCode"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                                    id="refByCode" name="refByCode" value={this.props.match.params.id} placeholder="Referral Code" type="text" onChange={this.inputChange} />
                                </div>
                              </div>
                              <div className="text-left text-gray-100 md:w-3/5 px-2 pt-2 w-full ">
                                <h5 className="md:text-base text-sm font-semibold text-green-700"> {userByRefCode && userByRefCode.userName ? userByRefCode.userName : null}</h5>
                              </div>
                            </div>
                            :
                            <div className="">
                              <div className="mt-1 rounded-md shadow-sm relative">
                                <label className="text-white text-sm">Referral Code</label>
                                <input disabled={otpSentRegister ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                                  id="refByCode" name="refByCode" placeholder="Referral Code" type="refByCode" onChange={this.inputChangeReferal} />
                                {this.state.errorslogin["refByCode"] ?
                                  <div className="invalid-feedback text-yellow-400">
                                    {this.state.errorslogin["refByCode"]}
                                  </div>
                                  : null}
                                <div className="text-left text-gray-100 md:w-3/5 px-2 pt-2 w-full ">
                                  <h5 className="md:text-base text-sm font-semibold text-green-700">Note : <p className="text-white">
                                    If you don't referral code then use <b className="text-base text-green-600">"ADMIN"</b> as referral code.
                                  </p></h5>
                                </div>
                              </div>
                            </div>
                        }

                        {
                          otpSentRegister ?

                            <div className="relative">
                              <label className="text-white text-sm">OTP</label>
                              <div className="mt-1 rounded-md shadow-sm relative">
                                <input className={`appearance-none block w-full px-4 pl-4 py-2 h-12 rounded-xl text-gray-800 bg-gray-50 focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-lg font-normal sm:leading-5 ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500"}`}
                                  id="OTP" name="OTP" placeholder="Enter OTP" type="OTP" onChange={this.inputChange} />
                                {this.state.errorslogin["OTP"] ?
                                  <div className="invalid-feedback text-red-600">
                                    {this.state.errorslogin["OTP"]}
                                  </div>
                                  : null}
                              </div>
                            </div>
                            : null
                        }
                      </div>

                    </div>


                    {otpSentRegister ?
                      <div className="flex md:w-3/6 w-5/6  mx-auto  mr-auto justify-between lg:mt-5 mt-3 items-center ">
                        <div className="flex items-center  lg:ml-0 ml-2 py-2">
                          <Timer textColor={"white"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.resendOtpSubmit} />
                        </div>
                      </div> : null
                    }


                    {
                      otpSentRegister ?
                        <div className="mt-6  mx-auto">
                          <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="submit" onClick={this.otpSubmit}>Verify OTP</button>
                        </div>
                        :
                        <div className="mt-6  mx-auto">
                          <button className="w-full mx-auto flex justify-center py-3 uppercase px-4 border text-lg font-semibold rounded-xl text-white bg-[#BD0C47] border-[#BD0C47] hover:bg-[#BD0C47] hover:text-white focus:outline-none focus:border-red-600 focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="submit" onClick={this.registerSubmit}>Sign up</button>
                        </div>

                    }

                  </form>
                  <div className="mt-10 w-64 sm:w-72 mx-auto">
                    {/* <div className="text-lg leading-5 text-center justify-center flex">
                      <span className="cursor-pointer font-light text-gray-300 hover:text-gray-500 hover:underline focus:outline-none focus:underline transition ease-in-out duration-150 ml-0" onClick={() => this.onClickMenu('forgot')}>Forgot password?</span>
                    </div> */}
                    <div className="leading-5 text-center pt-4 font-light">
                      <p className="text-base text-gray-300">Already have account?
                        <span className="cursor-pointer text-green-600  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('/login')}> Sign In</span>
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
  const { loggingIn, user, otpSentRegister, registeruser, loading } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    registeruser,
    otpSentRegister,
    user,
    users,
    loading
  };
}
// export default connect(mapStateToProps)(Login);
export default (connect(mapStateToProps)(Signup));