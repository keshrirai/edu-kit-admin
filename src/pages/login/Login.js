import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import { MdCircle } from "react-icons/md";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
// import Timer from 'otp-timer';
import Slider from "react-slick";



// import NetworkDetector from './Hoc/NetworkDetector';
// import NetworkDetector from '../../components/Hoc/NetworkDetector';

class Login extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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


  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }


  inputChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = this.state.errorslogin;
    fieldslogin[name] = value;
    errorslogin[name] = "";
    console.log(name, value);
    this.setState({ fieldslogin, errorslogin });
  }


  loginSubmit(e) {
    e.preventDefault();
    if (this.handleValidationLogin()) {
      let { username, password, } = this.state;
      this.props.dispatch(userActions.login({ username: username, password: password, }, this.props));
    }

  }

  // resendSubmit = (e) => {
  //   // e.preventDefault();
  //   if (this.handleValidationLogin()) {
  //     let { username, password, } = this.state;
  //     this.props.dispatch(userActions.login({ username: username, password: password, }, this.props));
  //   }

  // }

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

    //username
    if (!fieldslogin["username"]) {
      formIsValid = false;
      errorslogin["username"] = "Please Enter UserName!";
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

  // otpSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.handleValidationOTP()) {
  //     let { token } = this.props.registeruser;
  //     let { OTP } = this.state;
  //     this.props.dispatch(userActions.validateLoginOtp({
  //       token: token,
  //       otp: OTP
  //     }, this.props));
  //   }
  // }

  // handleValidationOTP = () => {
  //   let fieldslogin = this.state.fieldslogin;
  //   let errorslogin = {};
  //   let formIsValid = true;

  //   //Name
  //   if (!fieldslogin["OTP"]) {
  //     formIsValid = false;
  //     errorslogin["OTP"] = "please enter OTP!";
  //   }

  //   this.setState({ errorslogin: errorslogin });
  //   return formIsValid;
  // }

  render() {
    let { loading } = this.props;

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
          {/*Header Section */}
          <div className="bg-white h-screen w-full lg:flex z-20 overflow-y-auto">

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

            <div className="bg-white lg:w-1/2 w-full h-screen mx-auto flex items-center ">

              <div className="2xl:w-3/6  xl:w-4/6  w-5/6  mx-auto -mt-10">
                <div className="space-y-10">

                  <div >
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm cursor-pointer" onClick={() => this.onClickMenu('/')}>
                      <img src="school/logo.png" alt="packages" className="text-center mx-auto h-[60px] mb-10" />
                    </div>

                    <div class="w-full">
                      <h1 class="xl:text-3xl text-2xl text-gray-800 capitalize font-medium text-center ">
                        Welcome to School<br /> Management
                        {/* <b className="font-bold">"Jone Wick"</b> */}
                      </h1>
                    </div>
                  </div>

                  <form autoComplete="off">

                    <div className="{otpSent?'disableArea':''}">
                      <label className="text-gray-600 font-medium text-sm">User Name</label>

                      <div className="mt-1 rounded-md  relative">
                        <input disabled={this.state.otpSentLogin} className={` w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500  ${!this.state.errorslogin["username"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500 font-base " : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                          id="username" name="username" placeholder="Jhon wick" type="username" onChange={this.inputChange} />
                        {this.state.errorslogin["username"] ?
                          <div className="invalid-feedback text-red-500 mt-1">
                            {this.state.errorslogin["user Name"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="text-gray-600 font-medium text-sm">Password</label>
                      <div className="mt-1 rounded-md shadow-sm relative">
                        <input disabled={this.state.otpSentLogin} className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                          id="password" name="password" placeholder="Password" type="password" onChange={this.inputChange} />
                        {/* <div className="flex justify-between " >
                          {this.state.errorslogin["password"] ?
                            <div className="invalid-feedback text-red-500 mt-1">
                              {this.state.errorslogin["password"]}
                            </div>
                            : null}<span className="cursor-pointer  text-gray-500 pt-1.5  hover:text-[#FF8008]   transition   duration-200 " onClick={() => this.onClickMenu('forgot')}>Forgot password?</span>
                        </div> */}


                      </div>

                      {/* {
                        this.state.otpSentLogin ?
                          <div className="mt-4">
                            <div className="flex justify-center pb-4 items-center space-x-4"> <div className="border-t w-full" ></div>  <label className="text-black font-medium text-sm bg-white  whitespace-nowrap">OTP</label><div className="border-t w-full" ></div></div>
                            <div className="mt-1 rounded-md ">
                              <div className="flex justify-center" >
                                <input className={`w-3/6 mx-auto border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 text-center ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                                  id="OTP" name="OTP" placeholder="Enter OTP" type="OTP" onChange={this.inputChange} />
                                {this.state.errorslogin["OTP"] ?
                                  <div className="invalid-feedback text-red-500 mt-1">
                                    {this.state.errorslogin["OTP"]}
                                  </div>
                                  : null}
                              </div>

                            </div>
                          </div>
                          : null
                      } */}
                    </div>


                    {/* {
                      this.state.otpSentLogin ?
                        <div className="flex   justify-center   lg:mt-5 mt-3 items-center ">
                          <div className="flex items-center justify-center   py-2 text-gray-800" >
                            <h1 className="lg:text-sm text-[10px] text-blue-400 cursor-pointer" onClick={this.loginSubmit}>Resend OTP</h1>
                            <Timer textColor={"black"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.resendSubmit} />
                          </div>
                        </div> : null
                    } */}


                    {/* {
                      this.state.otpSentLogin ?
                        <div className="mt-6  mx-auto">
                          <button className="w-full mx-auto flex justify-center p-3 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="submit" onClick={this.otpSubmit}>Verify OTP</button>
                        </div>
                        :
                        <div className="mt-6  mx-auto">
                          <button className="w-full mx-auto flex justify-center p-3 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="submit" onClick={this.loginSubmit}>Sign in</button>
                        </div>

                    } */}



                    <div className="mt-6  mx-auto">
                      <button className="w-full mx-auto flex justify-center p-3 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="submit" onClick={this.loginSubmit}>Sign in</button>
                    </div>
                  </form>


                  {/* <p className="text-base  text-gray-500 text-center">Don't have an account ?
                    <b className=" cursor-pointer text-[#FF8005]  hover:underline font-semibold" onClick={() => this.onClickMenu('signup')}> Sign up</b>
                  </p> */}


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