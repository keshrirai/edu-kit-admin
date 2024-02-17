import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
// import { RiFacebookFill, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import { BiEdit, BiX } from "react-icons/bi";
import LoadingOverlay from 'react-loading-overlay';
// import { MdOutlineEdit } from 'react-icons/md';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.saveUserInfo = this.saveUserInfo.bind(this);
    this.saveUserPersonalAddr = this.saveUserPersonalAddr.bind(this);
    this.saveSocialMedia = this.saveSocialMedia.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      isDisabledPersonal: true,
      isDisabledAddress: true,
      isDisabledSocialMedia: true,
      fieldsUser: {},
      errorsUser: {},
      fieldsSocialMedia: {},
      errorsSocialMedia: {},
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.users.isPasswordUpdate) {
      return {
        ...nextProps,
        fieldsUser: {},
        errorsUser: {},
        fieldsSocialMedia: {},
        errorsSocialMedia: {},

      }
    } else if (nextProps.users.isDisabledPersonal) {
      return {
        ...nextProps,
        isDisabledPersonal: true,
        isDisabledAddress: true,
        isDisabledSocialMedia: true,
        // isDisabledPersonal: true
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
    this.setState({ [name]: value });
    let fieldsUser = this.state.fieldsUser;
    let errorsUser = this.state.errorsUser;
    fieldsUser[name] = value;
    errorsUser[name] = "";
    // console.log(name, value);
    this.setState({ fieldsUser, errorsUser });
  }

  inputChangeSocialMedia = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
    let fieldsSocialMedia = this.state.fieldsSocialMedia;
    let errorsSocialMedia = this.state.errorsSocialMedia;
    fieldsSocialMedia[name] = value;
    errorsSocialMedia[name] = "";
    // console.log(name, value);
    this.setState({ fieldsSocialMedia, errorsSocialMedia });
  }

  saveUserInfo(e) {
    e.preventDefault();
    if (this.handleValidationUserInfo()) {
      let { firstName, lastName, mobNo } = this.state.fieldsUser;
      this.props.dispatch(userActions.saveUserInfo({
        firstName: firstName,
        lastName: lastName,
        mobNo: mobNo
      }, this.props));
    }
  }

  handleValidationUserInfo = () => {
    let fieldsUser = this.state.fieldsUser;
    let errorsUser = {};
    let formIsValid = true;

    //firstName
    if (!fieldsUser["firstName"] || !fieldsUser["firstName"].match("^[A-Za-z]+(((\\'|\\-|\\.)?([A-Za-z])+))?$")) {
      formIsValid = false;
      errorsUser["firstName"] = "Please Enter Valid firstName!";
    }

    //lastName
    if (!fieldsUser["lastName"] || !fieldsUser["lastName"].match("^[A-Za-z]+(((\\'|\\-|\\.)?([A-Za-z])+))?$")) {
      formIsValid = false;
      errorsUser["lastName"] = "Please Enter Valid lastName!";
    }

    if (!fieldsUser["mobNo"]) {
      formIsValid = false;
      errorsUser["mobNo"] = "Please enter Mobile Number!";
    }

    // console.log("errorsUsererrorsUsererrorsUser", errorsUser);

    this.setState({ errorsUser: errorsUser });
    return formIsValid;
  }

  saveUserPersonalAddr(e) {
    e.preventDefault();
    if (this.handleValidationAddrInfo()) {
      let { street, city, state, country, postCode } = this.state.fieldsUser;
      this.props.dispatch(userActions.saveUserPersonalAddr({
        street: street,
        city: city,
        state: state,
        country: country,
        postCode: postCode
      }, this.props));
    }
  }


  handleValidationAddrInfo = () => {
    let fieldsUser = this.state.fieldsUser;
    let errorsUser = {};
    let formIsValid = true;


    //street
    if (!fieldsUser["street"] || fieldsUser["street"] === "") {
      formIsValid = false;
      errorsUser["street"] = "Cannot Be Empty";
    }

    //city
    if (!fieldsUser["city"] || fieldsUser["city"] === "") {
      formIsValid = false;
      errorsUser["city"] = "Cannot Be Empty";
    }

    //state
    if (!fieldsUser["state"] || fieldsUser["state"] === "") {
      formIsValid = false;
      errorsUser["state"] = "Cannot Be Empty";
    }

    //country
    if (!fieldsUser["country"] || fieldsUser["country"] === "") {
      formIsValid = false;
      errorsUser["country"] = "Cannot Be Empty";
    }

    //postCode
    if (!fieldsUser["postCode"] || fieldsUser["postCode"] === "") {
      formIsValid = false;
      errorsUser["postCode"] = "Cannot Be Empty";
    }

    // console.log("errorsUsererrorsUsererrorsUser", errorsUser);

    this.setState({ errorsUser: errorsUser });
    return formIsValid;
  }

  saveSocialMedia(e) {
    e.preventDefault();
    if (this.handleValidationSocialMedia()) {
      let { facebook, instagram, twitter, linkedin } = this.state.fieldsSocialMedia;
      this.props.dispatch(userActions.saveSocialMedia({
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        linkedin: linkedin
      }, this.props));
    }
  }


  handleValidationSocialMedia = () => {
    let fieldsSocialMedia = this.state.fieldsSocialMedia;
    let errorsSocialMedia = {};
    let formIsValid = true;

    //facebook
    if (!fieldsSocialMedia["facebook"] || !fieldsSocialMedia["facebook"] === "") {
      formIsValid = false;
      errorsSocialMedia["facebook"] = "Please Enter Valid facebook!";
    }

    //instagram
    if (!fieldsSocialMedia["instagram"] || !fieldsSocialMedia["instagram"] === "") {
      formIsValid = false;
      errorsSocialMedia["instagram"] = "Please Enter Valid instagram!";
    }

    //twitter
    if (!fieldsSocialMedia["twitter"] || !fieldsSocialMedia["twitter"] === "") {
      formIsValid = false;
      errorsSocialMedia["twitter"] = "Please Enter Valid twitter!";
    }

    //linkedin
    if (!fieldsSocialMedia["linkedin"] || !fieldsSocialMedia["linkedin"] === "") {
      formIsValid = false;
      errorsSocialMedia["linkedin"] = "Please Enter Valid linkedin!";
    }

    // console.log("errorsUsererrorsUsererrorsUser", errorsSocialMedia);

    this.setState({ errorsSocialMedia: errorsSocialMedia });
    return formIsValid;
  }

  componentDidMount() {
    this.props.dispatch(userActions.getUserInfo());
    this.props.dispatch(userActions.getUserDetails());
    this.props.dispatch(userActions.getSocialMediaById());
    window.scrollTo(0, 0)
  }

  updateProfile = (e) => {
    let { users } = this.props;
    let { getUserInfo } = users;
    this.setState({
      fieldsUser: getUserInfo,
      isDisabledPersonal: false,
    })
  }
  cancelProfile = (e) => {
    this.setState({
      isDisabledPersonal: true,
    })
  }

  updateProfileAddress = (e) => {
    let { users } = this.props;
    let { getUserInfo } = users;
    this.setState({
      fieldsUser: getUserInfo,
      isDisabledAddress: false,
    })
  }
  cancelProfileAddress = (e) => {
    this.setState({
      isDisabledAddress: true,
    })
  }
  updateSocialMedia = (e) => {
    let { users } = this.props;
    let { getSocialMediaById } = users;

    // console.log("getSocialMediaByIdgetSocialMediaById  ", getSocialMediaById);
    let currentData = {
      facebook: getSocialMediaById && getSocialMediaById.facebook ? getSocialMediaById.facebook : '',
      instagram: getSocialMediaById && getSocialMediaById.instagram ? getSocialMediaById.instagram : '',
      twitter: getSocialMediaById && getSocialMediaById.twitter ? getSocialMediaById.twitter : '',
      linkedin: getSocialMediaById && getSocialMediaById.linkedin ? getSocialMediaById.linkedin : '',
    }
    this.setState({
      fieldsSocialMedia: currentData,
      isDisabledSocialMedia: false,
    })
  }
  cancelSocialMedia = (e) => {
    this.setState({
      isDisabledSocialMedia: true,
    })
  }

  render() {
    let { users, user } = this.props;
    let { loading, getUserInfo, getSocialMediaById } = users;

    // // console.log("RENDER_____________getSocialMediaById::", getSocialMediaById);
    // // console.log("RENDER_____________getUserInfo::", getUserInfo);


    return (
      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>


        <div className="h-screen p-6 space-y-6 overflow-y-auto bg-gray-100">

          <h1 className="text-xl font-semibold text-black">My Profile</h1>


          <div className='overflow-hidden bg-white border rounded-3xl '>

            <div className='bg-orange-500 md:h-44 h-28' >
              <img src='/imge/Group3691.png' className='w-full h-full' />
            </div>

            <div className='flex items-center justify-between px-6 py-2 -mt-6 text-white rounded-sm xl:px-20 xl:-mt-12 md:-mt-8'>

              <div className="flex items-center space-x-6 ">
                <img src='https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg' className="border rounded-full xl:h-40 h-28 xl:w-40 w-28" />
                <div>
                  <h1 className="py-1 text-xl font-semibold text-black capitalize">{user && user.userName ? user.userName : "-"}</h1>
                  <p className='text-sm text-black '>Update your photo and personal details {getUserInfo && getUserInfo.firstName ? getUserInfo.firstName : ""} {getUserInfo && getUserInfo.lastName ? getUserInfo.lastName : ""}</p>
                </div>
              </div> 

              {/* <div className="mx-5 space-y-2 text-center">
                <p className="text-base text-white">{getUserInfo && getUserInfo.email ? getUserInfo.email : ""}</p>
                <p className="text-base text-white">{getUserInfo && getUserInfo.mobNo ? "+91 " + getUserInfo.mobNo : ""}</p>

                <p className="text-base text-white">{getUserInfo && getUserInfo.street ? getUserInfo.street + "," : ""} {getUserInfo && getUserInfo.city ? getUserInfo.city + "," : ""} {getUserInfo && getUserInfo.state ? getUserInfo.state + "," : ""} {getUserInfo && getUserInfo.country ? getUserInfo.country : ""}</p>

                <p className="mt-4 text-lg text-white">SOCIAL PROFILE</p>
              </div> */}

              {/* <div className="py-2 space-y-2">
                <div className="w-full mx-auto md:w-4/5">
                  <div className="flex flex-wrap items-center justify-around px-2 space-y-4">

                    <span className='flex mt-4'>
                      <span className="bg-[#3B5998] border border-none rounded-full p-2 cursor-pointer">
                        <RiFacebookFill className="w-5 h-5" />
                      </span>
                      <p className='mx-1 mt-2 text-white capitalize'>{getSocialMediaById && getSocialMediaById.facebook ? getSocialMediaById.facebook : ""}</p>
                    </span>
                    <span className='flex'>
                      <span className="bg-[#4099ff] border border-none rounded-full p-2 cursor-pointer">
                        <RiTwitterLine className='w-5 h-5' />
                      </span>
                      <p className='mx-1 mt-2 text-white capitalize'>{getSocialMediaById && getSocialMediaById.twitter ? getSocialMediaById.twitter : ""}</p>
                    </span>
                    <span className='flex'>
                      <span className="bg-[#e1306c] border border-none rounded-full p-2 cursor-pointer">
                        <RiInstagramLine className='w-5 h-5' />
                      </span>
                      <p className='mx-1 mt-2 text-white capitalize'>{getSocialMediaById && getSocialMediaById.instagram ? getSocialMediaById.instagram : ""}</p>
                    </span>
                    <span className='flex'>
                      <span className="bg-[#e1306c] border border-none rounded-full p-2 cursor-pointer">
                        <RiInstagramLine className='w-5 h-5' />
                      </span>
                      <p className='mx-1 mt-2 text-white capitalize'>{getSocialMediaById && getSocialMediaById.linkedin ? getSocialMediaById.linkedin : ""}</p>
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            <div className='grid grid-cols-1 gap-6 px-6 xl:grid-cols-2 xl:gap-10 xl:px-20' >
              <div className='text-black'>

                <div className='space-y-4 '>
                  {/* <h2 className='mt-4 text-xl tracking-wider'>Personal Infomation</h2> */}

                  <div className="flex flex-wrap justify-between mt-4">
                    <h3 className="text-xl font-medium">Personal Information</h3>
                    {
                      this.state.isDisabledPersonal === true ?
                        <button className="p-1 uppercase border border-transparent text-sm font-meduim rounded-full text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.updateProfile} ><BiEdit className='w-5 h-5' /></button> : null
                    }
                    {
                      this.state.isDisabledPersonal === false ?
                        <button className="p-1 uppercase border border-transparent text-sm font-meduim rounded-full text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.cancelProfile} ><BiX className='w-5 h-5' /></button> : null
                    }
                  </div>

                  <div className="w-full">
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-first-name">First Name</label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="firstName" placeholder='First Name' type="text"
                          value={this.state.isDisabledPersonal && getUserInfo && getUserInfo["firstName"] ? getUserInfo["firstName"] : this.state.fieldsUser["firstName"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledPersonal} />
                        {this.state.errorsUser["firstName"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["firstName"]}
                          </div>
                          : null}
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-last-name">
                          Last Name
                        </label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="lastName" placeholder='Last Name' type="text"
                          value={this.state.isDisabledPersonal && getUserInfo && getUserInfo["lastName"] ? getUserInfo["lastName"] : this.state.fieldsUser["lastName"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledPersonal}
                        />
                        {this.state.errorsUser["lastName"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["lastName"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3 md:w-1/2">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-last-name">
                          Phone Number
                        </label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="mobNo" placeholder='Enter Phone Number' type="number"
                          value={this.state.isDisabledPersonal && getUserInfo && getUserInfo["mobNo"] ? getUserInfo["mobNo"] : this.state.fieldsUser["mobNo"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledPersonal} />
                        {this.state.errorsUser["mobNo"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["mobNo"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-1">
                    {
                      this.state.isDisabledPersonal === false ?
                        <span className="block w-full rounded-md shadow-sm">
                          <button className="px-8 whitespace-nowrap mx-auto flex justify-center p-2 py-2.5 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" disabled={this.state.isDisabledPersonal}
                            onClick={this.saveUserInfo} data-config-id="01_primary-action">Submit</button>
                        </span>
                        : null
                    }
                  </div>

                </div>




                <div className='text-black '>
                  <div className='space-y-4'>
                    <div className="flex flex-wrap justify-between mt-4">
                      <h3 className="text-xl font-medium ">Social Media</h3>
                      {
                        this.state.isDisabledSocialMedia === true ?
                          <button className="p-1 uppercase border border-transparent text-sm font-meduim rounded-full text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.updateSocialMedia}><BiEdit className='w-5 h-5' /></button> : null
                      }
                      {
                        this.state.isDisabledSocialMedia === false ?
                          <button className="p-1 uppercase border border-transparent text-sm font-meduim rounded-full text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.cancelSocialMedia}><BiX className='w-5 h-5' /></button> : null
                      }
                    </div>
                    <div className="w-full">
                      <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3 md:w-1/2 md:mb-0">
                          <label className="block mb-2 text-sm text-gray-600" for="grid-first-name">Facebook</label>
                          <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="facebook" placeholder='Facebook Id' type="text"
                            value={this.state.isDisabledSocialMedia && getSocialMediaById && getSocialMediaById["facebook"] ? getSocialMediaById["facebook"] : this.state.fieldsSocialMedia["facebook"] || ''}
                            onChange={this.inputChangeSocialMedia}
                            disabled={this.state.isDisabledSocialMedia} />
                          {this.state.errorsSocialMedia["facebook"] ?
                            <div className="text-xs italic text-red-500 invalid-feedback">
                              {this.state.errorsSocialMedia["facebook"]}
                            </div>
                            : null}
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                          <label className="block mb-2 text-sm text-gray-600" for="grid-last-name">Instagram</label>
                          <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="instagram" placeholder='Instagram Id' type="text"
                            value={this.state.isDisabledSocialMedia && getSocialMediaById && getSocialMediaById["instagram"] ? getSocialMediaById["instagram"] : this.state.fieldsSocialMedia["instagram"] || ''}
                            onChange={this.inputChangeSocialMedia}
                            disabled={this.state.isDisabledSocialMedia} />
                          {this.state.errorsSocialMedia["instagram"] ?
                            <div className="text-xs italic text-red-500 invalid-feedback">
                              {this.state.errorsSocialMedia["instagram"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="flex flex-wrap mb-6 -mx-3">
                        <div className="w-full px-3 md:w-1/2 md:mb-0">
                          <label className="block mb-2 text-sm text-gray-600" for="grid-first-name">Twitter</label>
                          <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="twitter" placeholder='Twitter Id' type="text"
                            value={this.state.isDisabledSocialMedia && getSocialMediaById && getSocialMediaById["twitter"] ? getSocialMediaById["twitter"] : this.state.fieldsSocialMedia["twitter"] || ''}
                            onChange={this.inputChangeSocialMedia}
                            disabled={this.state.isDisabledSocialMedia} />
                          {this.state.errorsSocialMedia["twitter"] ?
                            <div className="text-xs italic text-red-500 invalid-feedback">
                              {this.state.errorsSocialMedia["twitter"]}
                            </div>
                            : null}
                        </div>
                        <div className="w-full px-3 md:w-1/2">
                          <label className="block mb-2 text-sm text-gray-600" for="grid-last-name">Linkedin</label>
                          <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="linkedin" placeholder='Linked In Id' type="text"
                            value={this.state.isDisabledSocialMedia && getSocialMediaById && getSocialMediaById["linkedin"] ? getSocialMediaById["linkedin"] : this.state.fieldsSocialMedia["linkedin"] || ''}
                            onChange={this.inputChangeSocialMedia}
                            disabled={this.state.isDisabledSocialMedia} />
                          {this.state.errorsSocialMedia["linkedin"] ?
                            <div className="text-xs italic text-red-500 invalid-feedback">
                              {this.state.errorsSocialMedia["linkedin"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-1">
                      {
                        this.state.isDisabledSocialMedia === false ?
                          <span className="block w-full rounded-md shadow-sm">
                            <button className="px-8 whitespace-nowrap mx-auto flex justify-center p-2 py-2.5 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" disabled={this.state.isDisabledSocialMedia} onClick={this.saveSocialMedia} data-config-id="01_primary-action">Submit</button>
                          </span>
                          : null
                      }
                    </div>

                    {/* <div className="flex justify-center py-10">
                      <button className="bg-[#800000] hover:bg-blue-700 text-white font-bold py-1 px-12 rounded-full" type="button" onClick={this.saveSocialMedia}>SUBMIT</button>
                      </div> */}
                  </div>


                </div>




              </div>



              <div className='text-black '>
                <div className='space-y-4'>
                  <div className="flex flex-wrap justify-between mt-4">
                    <h3 className="text-xl font-medium">Personal Address</h3>
                    {
                      this.state.isDisabledAddress === true ?
                        <button className="p-1 uppercase border border-transparent text-sm font-meduim rounded-full text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.updateProfileAddress} ><BiEdit className='w-5 h-5' /></button> : null
                    }
                    {
                      this.state.isDisabledAddress === false ?
                        <button className="p-1 uppercase border border-transparent text-sm font-meduim rounded-full text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.cancelProfileAddress} ><BiX className='w-5 h-5' /></button> : null
                    }
                  </div>
                  <div className="w-full">
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-first-name">Street</label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="street" placeholder='A-485,Lorem Ipsum,city' type="text"
                          value={this.state.isDisabledAddress && getUserInfo && getUserInfo["street"] ? getUserInfo["street"] : this.state.fieldsUser["street"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledAddress} />
                        {this.state.errorsUser["street"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["street"]}
                          </div>
                          : null}
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-last-name">City</label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="city" placeholder='Your City' type="text"
                          value={this.state.isDisabledAddress && getUserInfo && getUserInfo["city"] ? getUserInfo["city"] : this.state.fieldsUser["city"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledAddress} />
                        {this.state.errorsUser["city"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["city"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-first-name">State</label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="state" placeholder='State' type="text"
                          value={this.state.isDisabledAddress && getUserInfo && getUserInfo["state"] ? getUserInfo["state"] : this.state.fieldsUser["state"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledAddress} />
                        {this.state.errorsUser["state"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["state"]}
                          </div>
                          : null}
                      </div>
                      <div className="w-full px-3 md:w-1/2">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-last-name">Country</label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="country" placeholder='Country'
                          value={this.state.isDisabledAddress && getUserInfo && getUserInfo["country"] ? getUserInfo["country"] : this.state.fieldsUser["country"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledAddress} />
                        {this.state.errorsUser["country"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["country"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex flex-wrap mb-6 -mx-3">
                      <div className="w-full px-3 md:w-1/2 md:mb-0">
                        <label className="block mb-2 text-sm text-gray-600" for="grid-first-name">Post Code</label>
                        <input className="w-full px-4 py-2 text-gray-800 capitalize border rounded focus:outline-none focus:bg-white" name="postCode" placeholder='Post Code' type="text"
                          value={this.state.isDisabledAddress && getUserInfo && getUserInfo["postCode"] ? getUserInfo["postCode"] : this.state.fieldsUser["postCode"] || ''}
                          onChange={this.inputChange}
                          disabled={this.state.isDisabledAddress} />
                        {this.state.errorsUser["postCode"] ?
                          <div className="text-xs italic text-red-500 invalid-feedback">
                            {this.state.errorsUser["postCode"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>


                  <div className="grid grid-cols-1 gap-6 py-6 lg:grid-cols-1">
                    {
                      this.state.isDisabledAddress === false ?
                        <span className="block w-full rounded-md shadow-sm">
                          <button className="px-8 whitespace-nowrap mx-auto flex justify-center p-2 py-2.5 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" disabled={this.state.isDisabledAddress} onClick={this.saveUserPersonalAddr} data-config-id="01_primary-action">Submit</button>
                        </span>
                        : null
                    }
                  </div>
                </div>
              </div>

         

            </div>



          </div>





        </div>

      </>
    );
  }
}
function mapStateToProps(state) {
  const { users } = state;
  const { overview, getSocialMediaById } = users ? users : {};
  const { user } = overview ? overview : {};
  return {
    users,
    user,
    getSocialMediaById
  };
}
export default connect(mapStateToProps)(Dashboard);