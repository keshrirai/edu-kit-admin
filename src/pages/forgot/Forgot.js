import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { MdCircle } from 'react-icons/md';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import LoadingOverlay from 'react-loading-overlay';
import Timer from 'otp-timer';
import Slider from "react-slick";



class Signup extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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

  next() {
    this.slider.slickNext();

  }
  previous() {
    this.slider.slickPrev();
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


    var settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      lazyLoad: true,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    };
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
          <div className="h-screen flex justify-center  overflow-y-auto bg-white">

          <div className="bg-[#FF8005] lg:w-1/2 w-full h-screen  mx-auto lg:flex hidden items-center justify-center ">
              <div className="w-5/6 mx-auto space-y-10" >

              <Slider ref={c => (this.slider = c)}  {...settings} className="w-full overflow-hidden "  >

                <div className="space-y-10" >
                  <div className=" ">
                    <img className=" rounded-[10px] 2xl:h-[30rem] xl:h-[20rem] w-full object-cover   "
                      src="http://ifamagazine.com/wp-content/uploads/2020/12/getty_951514270_400405.jpg"
                      alt="" />
                  </div>

                  <div className="text-center">
                    <h1 className="text-white text-3xl font-semibold text-center">
                      Heading come here 1
                    </h1>
                    <p className=" py-2 px-5 text-white pb-5 text-base">
                      In publishing and graphic desing, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur quo, sequi molestiae laboriosam deleniti, commodi id dolor ut et ad vero est
                      doloribus
                      iste, assumenda illum repellat
                    </p>
                  </div>
                </div>

                <div className="space-y-10" >
                  <div className=" ">
                    <img className=" rounded-[10px] 2xl:h-[30rem] xl:h-[20rem] w-full object-cover   "
                      src="https://cdn.elearningindustry.com/wp-content/uploads/2018/04/9-benefits-of-sharing-best-practices-in-an-organization.jpg"
                      alt="" />
                  </div>

                  <div className="text-center">
                    <h1 className="text-white text-3xl font-semibold text-center">
                      Heading come here 2
                    </h1>
                    <p className=" py-2 px-5 text-white pb-5 text-base">
                      In publishing and graphic desing, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur quo, sequi molestiae laboriosam deleniti, commodi id dolor ut et ad vero est
                      doloribus
                      iste, assumenda illum repellat
                    </p>
                  </div>
                </div>

                <div className="space-y-10" >
                  <div className=" ">
                    <img className=" rounded-[10px] 2xl:h-[30rem] xl:h-[20rem] w-full object-cover   "
                      src="https://content.thriveglobal.com/wp-content/uploads/2020/01/Picture1-1.png"
                      alt="" />
                  </div>

                  <div className="text-center">
                    <h1 className="text-white text-3xl font-semibold text-center">
                      Heading come here 3
                    </h1>
                    <p className=" py-2 px-5 text-white pb-5 text-base">
                      In publishing and graphic desing, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur quo, sequi molestiae laboriosam deleniti, commodi id dolor ut et ad vero est
                      doloribus
                      iste, assumenda illum repellat
                    </p>
                  </div>
                </div>
                </Slider>

                <div className="flex justify-between items-center ">

                  <div onClick={this.previous} className="h-10 w-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg " >
                    <HiOutlineChevronLeft className="text-black text-[1.5rem]" />
                  </div>

                  <div className="flex space-x-1.5 pt-3">
                    <MdCircle className='text-white h-2 w-2' />
                    <MdCircle className='text-white/70 h-2 w-2' />
                    <MdCircle className='text-white/50 h-2 w-2' />
                  </div>


                  <div onClick={this.next} className="h-10 w-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg " >
                    <HiOutlineChevronRight className="text-black text-[1.5rem]" />
                  </div>

                </div>
              </div>
            </div>

            <div className="bg-white lg:w-1/2 w-full h-screen mx-auto flex items-center justify-center ">
              <div className="2xl:w-3/6  xl:w-4/6  w-5/6  mx-auto -mt-10 space-y-10">

                <div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <a className='cursor-pointer' onClick={() => this.onClickMenu('/')}  ><img src="dist/img/Logo.png" alt="" className="text-center mx-auto h-[60px] mb-10" /></a>
                </div>

                <div>
                  <h1 class="xl:text-3xl text-2xl font-medium   text-center text-gray-800 capitalize  ">
                    For recover your password
                  </h1> 
                </div>
                </div>

                <form autoComplete="off">


                  <div className="{otpSent?'disableArea':''}">


                    <label className="text-gray-600 font-medium text-sm">Email</label>

                    <div className="mt-1 rounded-md ">
                      <input disabled={otpSentForgotPass ? true : false} className={` w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500  ${!this.state.errorslogin["userName"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                        id="userName" name="userName" placeholder="Enter User ID" type="userName" onChange={this.inputChange} />
                      {this.state.errorslogin["userName"] ?
                        <div className="invalid-feedback text-red-500 mt-1">
                          {this.state.errorslogin["userName"]}
                        </div>
                        : null}
                    </div>

                  </div>

                  <div className="mt-6">
                    {
                      otpSentForgotPass ?
                        <>
                          <div class="mt-4">


                          <div className="flex justify-center pb-4 items-center space-x-4"> <div className="border-t w-full" ></div>  <label className="text-black font-medium text-sm bg-white  whitespace-nowrap">OTP</label><div className="border-t w-full" ></div></div>

                           
                            <div className="mt-1 rounded-md flex justify-center">
                              <input className={`w-3/6 mx-auto border text-center px-4 py-2.5 rounded-md focus:outline-none text-base font-normal focus:font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                id="OTP" name="OTP" placeholder="Enter OTP" type="OTP" onChange={this.inputChange} />
                              {this.state.errorslogin["OTP"] ?
                                <div className="invalid-feedback text-yellow-400">
                                  {this.state.errorslogin["OTP"]}
                                </div>
                                : null}
                          
                            </div>
                            
                           
                          </div>
                          {/* <div className="mt-6">
                            <label className="text-black/80 text-sm font-semibold">OTP</label>
                            <div className="mt-1 rounded-md shadow-sm relative">
                              <input className={`appearance-none block w-full px-4 py-1 h-10 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-xs font-medium sm:leading-5 ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                id="OTP" name="OTP" placeholder="Password" type="OTP" onChange={this.inputChange} />
                              {this.state.errorslogin["OTP"] ?
                                <div className="invalid-feedback text-yellow-400">
                                  {this.state.errorslogin["OTP"]}
                                </div>
                                : null}
                          
                            </div>
                          </div> */}

                          <div className="mt-6">
                             
                            <label className="text-gray-600 font-medium text-sm">New Password</label>
                            <div className="mt-1 rounded-md shadow-sm relative">
                              <input className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base font-normal focus:font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                id="password" name="password" placeholder="New Password" type="password" onChange={this.inputChange} />
                              {this.state.errorslogin["password"] ?
                                <div className="invalid-feedback text-yellow-400">
                                  {this.state.errorslogin["password"]}
                                </div>
                                : null}

                            </div>
                          </div>

                          <div className="mt-6">
                            <label className="text-gray-600 font-medium text-sm">Confirm New Password</label>
                            <div className="mt-1 rounded-md shadow-sm relative">
                              <input className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base font-normal focus:font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["confirmPassword"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-700" : "border-opacity-100 border border-red-500 bg-dark-400"}`}
                                id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password" type="password" onChange={this.inputChange} />
                              {this.state.errorslogin["confirmPassword"] ?
                                <div className="invalid-feedback text-yellow-400">
                                  {this.state.errorslogin["confirmPassword"]}
                                </div>
                                : null}
                            </div>
                          </div>
                        </>
                        : null
                    }
                  </div>


                  {
                    otpSentForgotPass ?
                      <div className="flex md:w-3/6 w-5/6  mx-auto  mr-auto justify-between lg:mt-5 mt-3 items-center ">
                        <div className="flex items-center  lg:ml-0 ml-2 py-1">
                          <Timer textColor={"white"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.forgotPasswordSubmit} />
                        </div>
                      </div> : null
                  }


                  {
                    otpSentForgotPass ?
                      <div className="mt-6  mx-auto">
                        <button className="w-full mx-auto flex justify-center p-3 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" onClick={this.otpSubmit}>Verify OTP</button>
                      </div>
                      :
                      <div className="mt-6  mx-auto">
                        <button className="w-full mx-auto flex justify-center p-3 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" onClick={this.forgotPasswordSubmit}>Recover Password</button>
                      </div>

                  }

                </form>

                <p className="text-base  text-gray-500 text-center">Don't have an account?
                  <b className=" cursor-pointer text-[#FF8005]  hover:underline font-semibold" onClick={() => this.onClickMenu('/signup')}> Sign Up</b>
                </p>
                {/* <div className="mt-10 w-64 sm:w-72 mx-auto">
                  <div className="text-lg leading-5 text-center justify-center flex">
                      <span className="cursor-pointer font-light text-gray-300 hover:text-gray-500 hover:underline focus:outline-none focus:underline transition ease-in-out duration-150 ml-0" onClick={() => this.onClickMenu('forgot')}>Forgot password?</span>
                    </div>
                  <div className="leading-5 text-center pt-2 font-light">
                    <p className="text-xs font-medium text-gray-500">Don't have an account?
                      <span className="text-xs font-medium cursor-pointer text-[#FF8005]  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('signup')}> Sign up</span>
                    </p>
                  </div>
                </div> */}
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
