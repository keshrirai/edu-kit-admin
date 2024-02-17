import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import Header from '../../components/Header/Header';
import moment from 'moment';
import Timer from 'otp-timer';





class Security extends Component {
  constructor(props) {
    super(props);
    this.profileSubmitUserInfo = this.profileSubmitUserInfo.bind(this);
    // this.inputChange = this.inputChange.bind(this);
    this.state = {
      isDisabled: true,
      fieldspasswordupdate: {},
      errorspasswordupdate: {},
      fieldsprofile: {},
      errorsprofile: {},
    }
  }
  componentDidMount() {
    this.props.dispatch(userActions.getUserInfo());
    this.props.dispatch(userActions.getKYC());
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.users.isPasswordUpdate) {
      return {
        ...nextProps,
        fieldspasswordupdate: {},
        errorspasswordupdate: {},

      }
    } else if (nextProps.users.isProfileUpdated) {
      return {
        ...nextProps,
        isDisabled: true
      }
    } else {
      return {
        ...nextProps,

      }
    }
  }

  inputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    // this.setState({ [name]: value });
    let fieldspasswordupdate = this.state.fieldspasswordupdate;
    let errorspasswordupdate = this.state.errorspasswordupdate;
    fieldspasswordupdate[name] = value;
    errorspasswordupdate[name] = "";
    // console.log(name, value);
    this.setState({ fieldspasswordupdate, errorspasswordupdate });
  }

  inputChangeProfile = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
    let fieldsprofile = this.state.fieldsprofile;
    let errorsprofile = this.state.errorsprofile;
    fieldsprofile[name] = value;
    errorsprofile[name] = "";
    // console.log(name, value);
    this.setState({ fieldsprofile, errorsprofile });
  }



  profileSubmitUserInfo(e) {
    e.preventDefault();
    if (this.handleValidationProfille()) {
      let reqData = {
        name: this.state.fieldsprofile.name,
        mobile: this.state.fieldsprofile.mobile,
        state: this.state.fieldsprofile.state,
        city: this.state.fieldsprofile.city,
        country: this.state.fieldsprofile.country,
        address: this.state.fieldsprofile.address
      }

      // console.log("reqData_reqData_reqData:::", reqData);
      this.props.dispatch(userActions.updateUserInfo(reqData, this.props));
    }
  }

  updateProfile = (e) => {
    let { users } = this.props;
    let { getUserInfo } = users;
    this.setState({
      fieldsprofile: getUserInfo,
      isDisabled: !this.state.isDisabled,
    })
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldspasswordupdate: {},
      errorspasswordupdate: {},
    })
    this.hideErrorMessage();
  }

  handleValidationProfille = () => {
    let fieldsprofile = this.state.fieldsprofile;
    let errorsprofile = {};
    let formIsValid = true;

    //Name
    if (!fieldsprofile["name"]) {
      formIsValid = false;
      errorsprofile["name"] = "Please enter Name!";
    }

    if (!fieldsprofile["mobile"]) {
      formIsValid = false;
      errorsprofile["mobile"] = "Please enter Mobile Number!";
    }

    //address
    if (!fieldsprofile["address"]) {
      formIsValid = false;
      errorsprofile["address"] = "Please enter Address!";
    }

    //state
    if (!fieldsprofile["state"]) {
      formIsValid = false;
      errorsprofile["state"] = "Please enter State!";
    }

    //city
    if (!fieldsprofile["city"]) {
      formIsValid = false;
      errorsprofile["city"] = "Please enter City!";
    }
    //country
    if (!fieldsprofile["country"]) {
      formIsValid = false;
      errorsprofile["country"] = "Please enter Country!";
    }
    this.setState({ errorsprofile: errorsprofile });
    return formIsValid;
  }

  updateChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
    let fieldspasswordupdate = this.state.fieldspasswordupdate;
    let errorspasswordupdate = this.state.errorspasswordupdate;
    fieldspasswordupdate[name] = value;
    errorspasswordupdate[name] = "";
    this.setState({ fieldspasswordupdate, errorspasswordupdate });
  }

  updatePassward = (e) => {
    e.preventDefault();
    if (this.handleUpdatepassword()) {
      let { confirmPassword, newPassword, OldPassword } = this.state.fieldspasswordupdate;
      this.props.dispatch(userActions.updatePassword({
        currentpassword: OldPassword,
        newpassword: newPassword,
        confirmnewpassword: confirmPassword,
      }, this.props));
    }
  }


  handleUpdatepassword = () => {
    let fieldspasswordupdate = this.state.fieldspasswordupdate;
    let errorspasswordupdate = {};
    let formIsValid = true;

    //OldPassword
    if (!fieldspasswordupdate["OldPassword"]) {
      formIsValid = false;
      errorspasswordupdate["OldPassword"] = "Please enter Old Password!";
    }

    //newPassword
    if (!fieldspasswordupdate["newPassword"]) {
      formIsValid = false;
      errorspasswordupdate["newPassword"] = "Please enter New Password!";
    }
    //confirmPassword
    if (!fieldspasswordupdate["confirmPassword"]) {
      formIsValid = false;
      errorspasswordupdate["confirmPassword"] = "Please enter Confirm New Password!";
    }

    this.setState({ errorspasswordupdate: errorspasswordupdate });
    return formIsValid;
  }
  // handleChange = (event) => {
  //   event.preventDefault();
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  otpSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationOTP()) {
      let { users } = this.props;
      let { upadatePassOtp } = users;
      let { confirmPassword, newPassword, OldPassword, otp } = this.state.fieldspasswordupdate;
      // let { token } = upadatePassOtp;
      // let { otp } = this.state;

      // let data = {
      //   token: upadatePassOtp.token,
      //   otp: this.state.fieldspasswordupdate.otp,
      //   currentpassword: this.state.fieldspasswordupdate.currentpassword,
      //   confirmnewpassword: this.state.fieldspasswordupdate.confirmnewpassword,
      //   newpassword: this.state.fieldspasswordupdate.newpassword
      // }
      this.props.dispatch(userActions.updatePasswordValidateOtp({
        token: upadatePassOtp.token,
        otp: otp,
        currentpassword: OldPassword,
        newpassword: newPassword,
        confirmnewpassword: confirmPassword,
      }, this.props));
    }
  }

  handleValidationOTP = () => {
    let fieldspasswordupdate = this.state.fieldspasswordupdate;
    let errorspasswordupdate = {};
    let formIsValid = true;

    //Name
    if (!fieldspasswordupdate["otp"]) {
      formIsValid = false;
      errorspasswordupdate["otp"] = "please enter otp!";
    }

    // console.log("errorspasswordupdate___errorspasswordupdate:::", errorspasswordupdate);

    this.setState({ errorspasswordupdate: errorspasswordupdate });
    return formIsValid;
  }

  render() {

    // let classes = {};
    let { users } = this.props;
    let { kycData, loading, otpSent,
      //  upadatePassOtp
    } = users;
    let { userInfoId } = kycData ? kycData : {};

    // console.log('RENDER_____otpSent::', otpSent);
    // // console.log('RENDER_____upadatePassOtp::', upadatePassOtp);
    // console.log('RENDER_____this.state.fieldspasswordupdate::', this.state.fieldspasswordupdate);

    return (
      <>
        <Header name="Security" />
        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>



        {/* Main Content */}
        <main className="bg-slate-700 flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
          <div className="2xl:p-10 p-4 mb-10">
            <div className="max-w-screen-3xl mx-auto">
              {/* Wallet Section */}
              <section className="grid grid-cols-12 gap-5">
                <div className="bg-slate-900 xl:col-span-12  lg:col-span-12 col-span-12 2xl:py-7 py-5 2xl:px-10 px-5 flex-col rounded-md">
                  <div className="flex justify-end">
                    <div className="w-full">
                      <h3 className="pb-4 md:text-2xl text-lg leading-9 font-semibold uppercase text-white text-opacity-70 tracking-widest">
                        Personal Information</h3>
                    </div>
                    {/* <button className="w-32 flex justify-center items-center uppercase border border-transparent text-sm font-meduim rounded-md text-white bg-gradient-to-r from-shine to-shine-400 hover:from-shine-400 hover:to-shine focus:outline-none transition duration-150 ease-in-out mx-auto xl:ml-auto xl:mr-0" type="button" onClick={this.updateProfile} >Edit Profile</button> */}
                  </div>
                  <form autoComplete="off" className="lg:space-y-8 2xl:space-y-3 space-y-3 mt-2">
                    <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">

                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>First Name:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["firstName"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`} name="firstName"
                          value={this.state.isDisabled && userInfoId && userInfoId["firstName"] ? userInfoId["firstName"] : this.state.fieldsprofile["firstName"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="First Name" type="text" />

                        {this.state.errorsprofile["firstName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["firstName"]}
                          </div>
                          : null}
                      </div>

                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Last Name:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["lastName"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`} name="lastName"
                          value={this.state.isDisabled && userInfoId && userInfoId["lastName"] ? userInfoId["lastName"] : this.state.fieldsprofile["lastName"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="Last Name" type="text" />

                        {this.state.errorsprofile["lastName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["lastName"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Dob:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["dob"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="dob"

                          // value={this.state.isDisabled && userInfoId && userInfoId["dob"] ? userInfoId["dob"] : this.state.fieldsprofile["dob"] || ''}

                          value={moment(new Date(parseInt(this.state.isDisabled && userInfoId && userInfoId["dob"] ? userInfoId["dob"] : this.state.fieldsprofile["dob"] || ''))).utcOffset("+05:30").format("DD-MM-YYYY")}

                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="City" type="text" />
                        {this.state.errorsprofile["dob"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["dob"]}
                          </div>
                          : null}
                      </div>

                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Gender:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["gender"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="gender"
                          value={this.state.isDisabled && userInfoId && userInfoId["gender"] ? userInfoId["gender"] : this.state.fieldsprofile["gender"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="State" type="text" />
                        {this.state.errorsprofile["gender"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["gender"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Address 1:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["address1"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="address1"
                          value={this.state.isDisabled && userInfoId && userInfoId["address1"] ? userInfoId["address1"] : this.state.fieldsprofile["address1"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="City" type="text" />
                        {this.state.errorsprofile["address1"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["address1"]}
                          </div>
                          : null}
                      </div>

                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Address 2:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["address2"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="address2"
                          value={this.state.isDisabled && userInfoId && userInfoId["address2"] ? userInfoId["address2"] : this.state.fieldsprofile["address2"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="State" type="text" />
                        {this.state.errorsprofile["address2"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["address2"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>City:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["city"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="city"
                          value={this.state.isDisabled && userInfoId && userInfoId["city"] ? userInfoId["city"] : this.state.fieldsprofile["city"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="City" type="text" />
                        {this.state.errorsprofile["city"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["city"]}
                          </div>
                          : null}
                      </div>

                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>State:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["state"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="state"
                          value={this.state.isDisabled && userInfoId && userInfoId["state"] ? userInfoId["state"] : this.state.fieldsprofile["state"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="State" type="text" />
                        {this.state.errorsprofile["state"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["state"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className=" grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-5">
                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Country:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["country"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="country"
                          value={this.state.isDisabled && userInfoId && userInfoId["country"] ? userInfoId["country"] : this.state.fieldsprofile["country"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="City" type="text" />
                        {this.state.errorsprofile["country"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["country"]}
                          </div>
                          : null}
                      </div>

                      <div className="relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Zip Code:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none focus:bg-gray-100 text-gray-200 bg-slate-600  ${!this.state.errorsprofile["zipCode"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="zipCode"
                          value={this.state.isDisabled && userInfoId && userInfoId["zipCode"] ? userInfoId["zipCode"] : this.state.fieldsprofile["zipCode"] || ''}
                          disabled={this.state.isDisabled}
                          // onChange={this.inputChangeProfile}
                          placeholder="City" type="text" />
                        {this.state.errorsprofile["zipCode"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsprofile["zipCode"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    {/* <div className="flex justify-end w-full">
                      <button className="w-64 flex justify-center py-2 uppercase px-3 border border-transparent text-xl font-meduim rounded-md text-white bg-gradient-to-r from-shine to-shine-400 hover:from-shine-400 hover:to-shine focus:outline-none transition duration-150 ease-in-out mx-auto xl:ml-auto xl:mr-0" disabled={this.state.isDisabled} type="button" onClick={this.profileSubmitUserInfo} >Save</button>
                    </div> */}
                  </form>
                </div>
              </section>

              {/* Password Section */}
              <section className="grid grid-cols-12 gap-5 lg:mt-8 mt-2 mb-10  ">
                <div className="bg-slate-900 xl:col-span-6  lg:col-span-12 col-span-12 2xl:py-7  2xl:px-10 px-5 flex-col rounded-md">
                  <div className="w-full ">
                    <h3 className="pb-4 md:text-2xl text-lg leading-9 font-semibold uppercase text-white text-opacity-70 tracking-widest">
                      Change Password</h3>
                  </div>

                  <form autoComplete="off" className="lg:space-y-8 space-y-2 2xl:space-y-5 sm:space-y-4 mt-2">
                    <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                      <div className=" rounded-md shadow-sm relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Old Password:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none  text-gray-200 bg-slate-600  ${!this.state.errorspasswordupdate["OldPassword"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="OldPassword"
                          value={this.state.fieldspasswordupdate["OldPassword"] ? this.state.fieldspasswordupdate["OldPassword"] : ''}
                          onChange={this.inputChange} placeholder="Old Password" type="password" />
                        {this.state.errorspasswordupdate["OldPassword"] ?
                          <div className="invalid-feedback  text-red-500">
                            {this.state.errorspasswordupdate["OldPassword"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                      <div className=" rounded-md shadow-sm relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>New Password:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none  text-gray-200 bg-slate-600  ${!this.state.errorspasswordupdate["newPassword"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`} name="newPassword"
                          value={this.state.fieldspasswordupdate["newPassword"] ? this.state.fieldspasswordupdate["newPassword"] : ''}
                          onChange={this.inputChange} placeholder="New Password" type="password" />
                        {this.state.errorspasswordupdate["newPassword"] ?
                          <div className="invalid-feedback  text-red-500">
                            {this.state.errorspasswordupdate["newPassword"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                      <div className=" rounded-md shadow-sm relative">
                        <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>Confirm New Password:</label>
                        <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none  text-gray-200 bg-slate-600  ${!this.state.errorspasswordupdate["confirmPassword"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                          name="confirmPassword"
                          value={this.state.fieldspasswordupdate["confirmPassword"] ? this.state.fieldspasswordupdate["confirmPassword"] : ''}
                          onChange={this.inputChange} placeholder="Confirm New Password" type="password" />
                        {this.state.errorspasswordupdate["confirmPassword"] ?
                          <div className="invalid-feedback  text-red-500">
                            {this.state.errorspasswordupdate["confirmPassword"]}
                          </div>
                          : null}
                      </div>
                    </div>

                    {
                      otpSent ?

                        <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                          <div className=" rounded-md shadow-sm relative">
                            <label className="block w-full mb-1 pl-4" style={{ color: "#A09DC5" }}>OTP:</label>
                            <input className={`block w-full px-4 py-3 rounded-md transition duration-150 ease-in-out text-sm font-normal sm:leading-5 border-black border-opacity-20 border mx-auto mt-2 placeholder-gray-600 focus:outline-none text-gray-200 bg-slate-600  ${!this.state.errorspasswordupdate["otp"] ? 'border-opacity-20' : 'border-opacity-100 border-red-500 bg-red-100'}`}
                              name="otp"
                              value={this.state.fieldspasswordupdate["otp"] ? this.state.fieldspasswordupdate["otp"] : ''}
                              onChange={this.inputChange} placeholder="Confirm New Password" type="text" />
                            {this.state.errorspasswordupdate["otp"] ?
                              <div className="invalid-feedback  text-red-500">
                                {this.state.errorspasswordupdate["otp"]}
                              </div>
                              : null}
                          </div>
                        </div>
                        : null
                    }


                    {otpSent ?
                      <div className="flex lg:w-3/5 w-64">
                        <div className="flex items-center lg:ml-0 ml-2">
                          {/* <h1 className="lg:text-sm text-[10px] text-blue-400 cursor-pointer" onClick={this.loginSubmit}>Resend OTP</h1> */}
                          <Timer textColor={"white"} seconds={1} minutes={2} ButtonText="Resend Otp" resend={this.updatePassward} />
                        </div>
                      </div> : null}


                    {
                      otpSent ?
                        <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                          <span className="block w-full rounded-md shadow-sm">
                            <button className="btn_bg_col w-48 mx-auto flex justify-center py-1  px-1 border border-transparent text-lg font-meduim rounded-md text-white focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.otpSubmit} data-config-id="01_primary-action">Verify Otp</button>
                          </span>
                        </div>
                        :
                        <div className="grid lg:grid-cols-1 pb-4 grid-cols-1 gap-6 mt-3 ">
                          <span className="block w-full rounded-md shadow-sm lg:mt-0 mt-5">
                            <button className="btn_bg_col lg:w-48 w-full mx-auto flex justify-center py-1  px-1 border border-transparent text-lg font-meduim rounded-md text-white focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.updatePassward} data-config-id="01_primary-action">Save </button>
                          </span>
                        </div>
                    }




                  </form>
                </div>

              </section>
            </div>
          </div>
        </main>





      </>
    );
  }
}
function mapStateToProps(state) {
  const { users, getUserInfo, authentication } = state;
  // const { loggingIn, otpSent, upadatePassOtp } = authentication;

  return {
    users,
    getUserInfo,
    authentication
    // loggingIn,
    // otpSent,
    // upadatePassOtp
  };
}
export default connect(mapStateToProps)(Security);
