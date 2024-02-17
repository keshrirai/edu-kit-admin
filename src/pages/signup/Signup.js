
import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { MdCircle } from 'react-icons/md';
import Timer from 'otp-timer'
import Slider from "react-slick";



class Signup extends Component {
  constructor(props) {
    super(props);
    // this.props.dispatch(userActions.logout());
    this.registerSubmit = this.registerSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
    // let { userByRefCode } = users;

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
    // console.log("render______userByRefCode::", userByRefCode);
    // console.log("render______this.props.match.params.id::", this.props.match.params.id);
    return (
      <>
        <div>
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>


        {/* Whole Structure */}
        <div className="z-20 flex justify-center h-screen bg-white flex-cols-2">

          <div className="flex items-center w-full h-screen mx-auto space-y-10 bg-white lg:w-1/2 ">
            <div className="w-5/6 mx-auto -mt-10 space-y-10 2xl:w-3/6 xl:w-4/6">

              <div className="space-y-6 " >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <span className='cursor-pointer' onClick={() => this.onClickMenu('/')}  >
                    <img src="school/logo.png" alt="" className="text-center mx-auto h-[60px] mb-3" />
                  </span>
                </div>

                <div className="w-full px-3 ">
                  <h1 class="xl:text-3xl text-2xl text-gray-800 capitalize font-medium text-center ">
                    Welcome to School Management
                    {/* <b className="font-bold">"Sign Up"</b> */}
                  </h1>
                </div>
              </div>

              <form autoComplete="off ">
                <div className="space-y-6 ">
                  <div className="grid grid-cols-2 gap-6 ">
                    <div className="relative">
                      <label className="text-sm font-medium text-gray-600">User Name</label>
                      <div className="mt-1 rounded-md ">
                        <input disabled={otpSentRegister ? true : false} className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["userName"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border border-red-500"}`}
                          id="userName" name="userName" placeholder="User Name" type="userName" onChange={this.inputChange} />

                        {/* px-4 py-2 rounded-md placeholder-gray-400 text-[rgb(156,163,175)]  text-xs font-medium  border border-gray-400/50 focus:outline-none focus:ring-1 ring-slate-500 w-full */}


                        {this.state.errorslogin["userName"] ?
                          <div className="mt-1 text-red-500 invalid-feedback">
                            {this.state.errorslogin["user Name"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <div className="mt-1 rounded-md">
                        <input disabled={otpSentRegister ? true : false} className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["email"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                          id="email" name="email" placeholder="example@gmail.com" type="email" onChange={this.inputChange} />
                        {this.state.errorslogin["email"] ?
                          <div className="mt-1 text-red-500 invalid-feedback">
                            {this.state.errorslogin["email"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 " >
                    <div className="relative">

                      <label className="text-sm font-medium text-gray-600">Password</label>
                      <div className="mt-1 rounded-md">
                        <input disabled={otpSentRegister ? true : false} className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                          id="password" name="password" placeholder="Password" type="password" onChange={this.inputChange} />
                        {this.state.errorslogin["password"] ?
                          <div className="mt-1 text-red-500 invalid-feedback">
                            {this.state.errorslogin["password"]}
                          </div>
                          : null}
                      </div>
                    </div>
                    <div className="relative">
                      <label className="text-sm font-medium text-gray-600">Confirm Password</label>
                      <div className="mt-1 rounded-md">
                        <input disabled={otpSentRegister ? true : false} className={`w-full border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorslogin["ConfirmPassword"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-500" : "border-opacity-100 border-none ring-2 ring-red-300 "}`}
                          id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" type="password" onChange={this.inputChange} />
                        {this.state.errorslogin["confirmPassword"] ?
                          <div className="mt-1 text-red-500 invalid-feedback">
                            {this.state.errorslogin["confirmPassword"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>

                  {/* <div className="flex w-full space-x-2">
                    <p className="w-full mt-2 border-t"></p><span className="pb-1 font-medium text-black whitespace-nowrap">Referral Code</span>
                    <p className="w-full mt-2 border-t"></p>
                  </div> */}



                  {/* {this.props.match.params.id ?

                    <>
                      <div className="flex justify-center w-full" >
                        <input disabled={true} className=" border px-4 py-2.5 text-center rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500"
                          id="confirmPassword" name="refByCode" placeholder="Enter referral Code" type="code"
                          value={this.props.match.params.id} />
                      </div>
                      <div className="">
                        <p className="text-sm font-medium text-center text-gray-800">{userByRefCode && userByRefCode.userName ? userByRefCode.userName : null}</p>
                      </div>
                    </> :

                    <div>

                      <div className="flex justify-center w-full" >
                        <input className=" border px-4 py-2.5 text-center rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500"
                          id="refByCode" name="refByCode" placeholder="Enter referral Code" type="code" onChange={this.inputChangeReferal} />
                        {this.state.errorslogin["refByCode"] ?
                          <div className="mt-1 text-red-500 invalid-feedback">
                            {this.state.errorslogin["refByCode"]}
                          </div>
                          : null}

                        <div className="">
                          <p className="text-sm font-medium text-center text-gray-800">{userByRefCode && userByRefCode.userName ? userByRefCode.userName : null}</p>
                        </div>

                      </div>
                    </div>


                  } */}

                  {/* <div className="flex justify-center w-full" >
                    <input className=" border px-4 py-2.5 text-center rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500"
                      id="confirmPassword" name="confirmPassword" placeholder="Enter referral Code" type="code" onChange={this.inputChange} />
                  </div> */}

                  {/* <div className="">
                    <p className="text-sm font-medium text-center text-gray-800">Note: If you don't referral code then use "ADMIN" as referral code.</p>
                  </div> */}


                  <div className="grid grid-cols-1 gap-5 mt-4 xl:grid-cols-2 lg:grid-cols-2">
                    {/* {
                      this.props.match.params.id ?
                        <div className="">
                          <div className="relative">
                            <label className="text-sm font-semibold text-black/80">Referral Code</label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                              <input disabled={true} className={`appearance-none block w-full px-4 pl-4 py-2 h-10 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-sm font-normal sm:leading-5 ${!this.state.errorslogin["refByCode"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-400" : "border-opacity-100 border border-red-500"}`}
                                id="refByCode" name="refByCode" value={this.props.match.params.id} placeholder="Referral Code" type="text" onChange={this.inputChange} />
                            </div>
                          </div>
                          <div className="w-full px-2 pt-2 text-left text-gray-100 md:w-3/5 ">
                            <h5 className="text-sm font-semibold text-green-700 md:text-base"> {userByRefCode && userByRefCode.userName ? userByRefCode.userName : null}</h5>
                          </div>
                        </div>
                        :
                        <div className="">
                          <div className="relative mt-1 rounded-md shadow-sm">
                            <label className="text-sm font-semibold text-black/80">Referral Code</label>
                            <input disabled={otpSentRegister ? true : false} className={`appearance-none block w-full px-4 pl-4 py-2 h-10 rounded-lg text-gray-800 bg-white focus:outline-none focus:border-gray-200 focus:bg-gray-100 focus:text-gray-800 transition duration-150 ease-in-out text-sm font-normal sm:leading-5 ${!this.state.errorslogin["password"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-400" : "border-opacity-100 border border-red-500"}`}
                              id="refByCode" name="refByCode" placeholder="Referral Code" type="refByCode" onChange={this.inputChangeReferal} />
                            {this.state.errorslogin["refByCode"] ?
                              <div className="text-yellow-400 invalid-feedback">
                                {this.state.errorslogin["refByCode"]}
                              </div>
                              : null}
                            <div className="w-full px-2 pt-2 text-left text-gray-100 md:w-3/5 ">
                              <h5 className="text-sm font-semibold md:text-base text-black/80">Note : <p className="text-black">
                                If you don't referral code then use <b className="text-base text-black">"ADMIN"</b> as referral code.
                              </p></h5>
                            </div>
                          </div>
                        </div>
                    } */}

                    {
                      otpSentRegister ?

                        <div className="relative">
                          <label className="text-sm font-semibold text-black/80">OTP</label>
                          <div className="relative mt-1 rounded-md shadow-sm">
                            <input className={`w-3/6 mx-auto border px-4 py-2.5 rounded-md focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500 text-center ${!this.state.errorslogin["OTP"] ? "'border-opacity-20 border-opacity-100 border placeholder-gray-400" : "border-opacity-100 border border-red-500"}`}
                              id="OTP" name="OTP" placeholder="Enter OTP" type="OTP" onChange={this.inputChange} />
                            {this.state.errorslogin["OTP"] ?
                              <div className="text-red-600 invalid-feedback">
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
                  <div className="flex items-center justify-between w-5/6 mx-auto mt-3 mr-auto md:w-3/6 lg:mt-5 ">
                    <div className="flex items-center py-2 ml-2 lg:ml-0">
                      <Timer textColor={"white"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.resendOtpSubmit} />
                    </div>
                  </div> : null
                }


                {
                  otpSentRegister ?
                    <div className="mx-auto mt-5">
                      <button className="lg:px-32 mx-auto flex justify-center py-2 capitalize px-4 border text-sm font-semibold rounded-lg text-white bg-[#FF8005]  hover:text-white focus:outline-none focus:shadow-outline-yellow active:bg-red-700 transition duration-150 ease-in-out" type="submit" onClick={this.otpSubmit}>Verify OTP</button>
                    </div>
                    :
                    <div className="mx-auto mt-5">
                      <button className="w-full mx-auto flex justify-center p-3 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="submit" onClick={this.registerSubmit}>Sign up</button>
                    </div>
                }
              </form>


              {/* <div className="w-64 mx-auto sm:w-72">
                <div className="flex justify-center text-sm leading-5 text-center">
                      <span className="ml-0 font-light text-gray-300 transition duration-150 ease-in-out cursor-pointer hover:text-gray-500 hover:underline focus:outline-none focus:underline" onClick={() => this.onClickMenu('forgot')}>Forgot password?</span>
                    </div>


                <div className="pt-4 leading-5 text-center">
                  <p className="text-base font-medium text-center text-gray-500">Already have account?
                    <span className="text-base font-medium cursor-pointer text-[#FF8005]  hover:underline hover:text-shine focus:outline-none focus:underline transition ease-in-out duration-150" onClick={() => this.onClickMenu('/login')}> Sign In</span>
                  </p>
                </div>
              </div> */}

              <p className="text-base text-center text-gray-500">Already have an account ?
                <b className=" cursor-pointer text-[#FF8005]  hover:underline font-semibold" onClick={() => this.onClickMenu('/login')}> Sign in</b>
              </p>


            </div>
          </div>

          {/* slider */}
          <div className="bg-[#FF8005] lg:w-1/2 w-full h-screen  mx-auto lg:flex hidden items-center justify-center ">
            <div className="w-5/6 mx-auto space-y-10" >

              <Slider ref={c => (this.slider = c)}  {...settings} className="w-full overflow-hidden "  >

                <div className="space-y-10" >
                  <div className="">
                    <img className=" rounded-[10px] 2xl:h-[30rem] xl:h-[20rem] w-full object-cover   "
                      src="http://ifamagazine.com/wp-content/uploads/2020/12/getty_951514270_400405.jpg"
                      alt="" />
                  </div>

                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-center text-white">
                      Heading come here 1
                    </h1>
                    <p className="px-5 py-2 pb-5 text-base text-white ">
                      In publishing and graphic desing, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur quo, sequi molestiae laboriosam deleniti, commodi id dolor ut et ad vero est
                      doloribus
                      iste, assumenda illum repellat
                    </p>
                  </div>
                </div>

                <div className="space-y-10" >
                  <div className="">
                    <img className=" rounded-[10px] 2xl:h-[30rem] xl:h-[20rem] w-full object-cover   "
                      src="https://cdn.elearningindustry.com/wp-content/uploads/2018/04/9-benefits-of-sharing-best-practices-in-an-organization.jpg"
                      alt="" />
                  </div>

                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-center text-white">
                      Heading come here 2
                    </h1>
                    <p className="px-5 py-2 pb-5 text-base text-white ">
                      In publishing and graphic desing, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur quo, sequi molestiae laboriosam deleniti, commodi id dolor ut et ad vero est
                      doloribus
                      iste, assumenda illum repellat
                    </p>
                  </div>
                </div>

                <div className="space-y-10" >
                  <div className="">
                    <img className=" rounded-[10px] 2xl:h-[30rem] xl:h-[20rem] w-full object-cover   "
                      src="https://content.thriveglobal.com/wp-content/uploads/2020/01/Picture1-1.png"
                      alt="" />
                  </div>

                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-center text-white">
                      Heading come here 3
                    </h1>
                    <p className="px-5 py-2 pb-5 text-base text-white ">
                      In publishing and graphic desing, Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consectetur quo, sequi molestiae laboriosam deleniti, commodi id dolor ut et ad vero est
                      doloribus
                      iste, assumenda illum repellat
                    </p>
                  </div>
                </div>
              </Slider>

              <div className="flex items-center justify-between ">

                <div onClick={this.previous} className="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:shadow-lg " >
                  <HiOutlineChevronLeft className="text-black text-[1.5rem]" />
                </div>

                <div className="flex space-x-1.5 pt-3">
                  <MdCircle className='w-2 h-2 text-white' />
                  <MdCircle className='w-2 h-2 text-white/70' />
                  <MdCircle className='w-2 h-2 text-white/50' />
                </div>


                <div onClick={this.next} className="flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer hover:shadow-lg " >
                  <HiOutlineChevronRight className="text-black text-[1.5rem]" />
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