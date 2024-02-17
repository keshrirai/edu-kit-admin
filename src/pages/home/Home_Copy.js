import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
// import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiMail } from "react-icons/ti";
// import { FaMediumM, FaInstagram } from "react-icons/fa";
// import { BsReddit } from "react-icons/bs";
// import { BiBitcoin } from "react-icons/bi";
import { HiChevronDown, HiPlus } from "react-icons/hi";
import { MdMail } from 'react-icons/md';
import { AiFillFacebook, AiFillRedditSquare, AiFillTwitterSquare, AiFillMediumSquare, AiFillLinkedin } from 'react-icons/ai';
import { SiTelegram, SiBitcoin } from 'react-icons/si';
import { FiMenu } from 'react-icons/fi';
import { FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


class Home extends Component {
  constructor(props) {

    super(props);
    // this.props.dispatch(userActions.logout());
    this.loginSubmit = this.loginSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      fieldslogin: {},
      errorslogin: {},
      otpSentLogin: false,
      shown: false,

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
      let { email, password, } = this.state;
      this.props.dispatch(userActions.login({ email: email, password: password, }, this.props));
    }

  }

  resendSubmit = (e) => {
    // e.preventDefault();
    if (this.handleValidationLogin()) {
      let { email, password, } = this.state;
      this.props.dispatch(userActions.login({ email: email, password: password, }, this.props));
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
    if (!fieldslogin["email"] || fieldslogin["email"] === "") {
      formIsValid = false;
      errorslogin["email"] = "Please Enter Email Address";
    }
    if (typeof fieldslogin["email"] !== "undefined" && fieldslogin["email"] !== "") {
      let lastAtPos = fieldslogin["email"].lastIndexOf('@');
      let lastDotPos = fieldslogin["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldslogin["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldslogin["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorslogin["email"] = "Enter valid email!";
      }
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
    document.title = "EfinCap";


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

  setCurrentCount = (data) => {
    this.setState({ currentCount: data });

  };

  render() {

    AOS.init();

    let { otpSentLogin, loading } = this.props;

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


        {/* Whole Structure */}
        <div className="h-screen overflow-y-auto">



          {/* Header section */}
          <div data-aos="fade-down" className="w-full bg-[#29092a] h-24 sticky top-0 z-20">
            <div className="flex justify-between items-center max-w-6xl xl:px-0 md:px-10 px-4 h-full text-white mx-auto relative">

              <div>
                <a className='cursor-pointer' onClick={() => this.onClickMenu('/')}  > <img src="/imglogo/EFINCAP_Final Logo_For Dark BG.png" alt="" className="md:w-44 w-36 bg-contain" /></a>
              </div>


              {this.state.shown ? <div className="md:flex md:relative absolute md:top-0 top-20 right-0 md:w-auto w-full md:bg-transparent bg-[#29092a]  ">
                <ul className="text-white md:flex font-semibold uppercase md:space-x-8 md:space-y-0 space-y-4 md:p-0 p-6 md:text-left text-center">
                  <li className=" cursor-pointer text-orange-500" onClick={() => this.onClickMenu('/')}>Home</li>
                  <li className=" cursor-pointer" onClick={() => this.onClickMenu('/aboutus')}>About</li>
                  <li className=" cursor-pointer" onClick={() => this.onClickMenu('/contactus')}>contact</li>
                  <li className=" cursor-pointer" onClick={() => this.onClickMenu('/login')}>login</li>
                  <li className=" cursor-pointer" onClick={() => this.onClickMenu('/signup')}>Sign Up</li>
                </ul>
              </div> :
                <div className="md:flex hidden md:relative absolute md:top-0 top-20 right-0 md:w-auto w-full md:bg-transparent bg-[#29092a]  ">
                  <ul className="text-white md:flex font-semibold uppercase md:space-x-8 md:space-y-0 space-y-4 md:p-0 p-6 md:text-left text-center">
                    <li className=" cursor-pointer text-orange-500" onClick={() => this.onClickMenu('/')}>Home</li>
                    <li className=" cursor-pointer" onClick={() => this.onClickMenu('/aboutus')}>About</li>
                    <li className=" cursor-pointer" onClick={() => this.onClickMenu('/contactus')}>contact</li>
                    <li className=" cursor-pointer" onClick={() => this.onClickMenu('/login')}>login</li>
                    <li className=" cursor-pointer" onClick={() => this.onClickMenu('/signup')}>Sign Up</li>
                  </ul>
                </div>}
              <FiMenu onClick={() => this.setState({ shown: !this.state.shown })} className="text-white text-[1.5rem] md:hidden flex" />

            </div>
          </div>

          {/* Trade with a new section */}
          {/* <section>
            <div className="h-full w-full">
              <img src="newImg/MainBanner.jpg" className="w-full" />
            </div>
          </section> */}

          <section>
            <video autoPlay loop id="video-background" muted plays-inline className="h-full w-full">
              <source src="imglogo/mainbannervideo.mp4" type="video/mp4" className="w-full" />
              <p> In unfortunate year of pandemic the goal is to go eco friendly</p>
            </video>
          </section>

          {/* Header2 section */}
          <section className="w-full bg-[#ee6e28] md:h-24 md:sticky   md:top-24  z-20 xl:px-0 px-10 p-4">
            <div className="md:flex md:flex-row   justify-between items-center max-w-6xl h-full text-white mx-auto">


              <div className="flex cursor-pointer" onClick={e => {
                let hero = document.getElementById("service");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView();
              }} duration={1000}  >

                <p className="text-lg font-normal text-white ">Our Services</p>
                <HiChevronDown className="w-5 h-5 text-white m-1.5" />
              </div>

              <div className="flex cursor-pointer" onClick={e => {
                let hero = document.getElementById("feature");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView();
              }} duration={1000}>
                <p className="text-lg font-normal text-white ">Our Features</p>
                <HiChevronDown className="w-5 h-5 text-white m-1.5" />
              </div>


              <div className="flex cursor-pointer " onClick={e => {
                let hero = document.getElementById("Benifits");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView();
              }} duration={1000}>
                <p className="text-lg font-normal text-white ">Benifits</p>
                <HiChevronDown className="w-5 h-5 text-white m-1.5" />
              </div>


              <div className="flex cursor-pointer " onClick={e => {
                let hero = document.getElementById("whyus");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView();
              }} duration={1000}>
                <p className="text-lg font-normal text-white ">why Us</p>
                <HiChevronDown className="w-5 h-5 text-white m-1.5" />
              </div>

            </div>
          </section>

          {/* features of fincap section */}
          <section id="service" className="bg-cover bg- bg-no-repeat" style={{ backgroundImage: `url("newImg/section02BG.png")` }}>
            <div className="section02BGmd:flex items-center relative">
              <div className="py-24">
                <div className="2xl:w-4/6 xl:w-5/6 w-11/12 mx-auto">
                  {/* text-section */}
                  <div className="text-center space-y-4">
                    <div className="w-full flex justify-between flex-wrap items-start">
                      <img src="newImg/section02Title.png" alt="" />
                      <h1 className="text-lg font-medium uppercase text-white bg-[#1e061e] px-6 py-2">What we do</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-24 gap-16 py-10">

                      <div className="bg-[#1e061e] rounded-xl p-8 drop-shadow-2xl space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150">
                        <img src="newImg/signal.png" alt="App Development Services" title="App Development Services" className="w-16" />
                        <h1 className="text-2xl font-semibold text-left text-white">Broadest Asset Coverage</h1>
                        <p className="text-left text-lg text-white">With support for 30+ assets and 15+ more coming soon, Staked delivers rewards across the broadest range of crypto assets.</p>
                      </div>

                      <div className="bg-[#1e061e] rounded-xl p-8 drop-shadow-2xl space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150">
                        <img src="newImg/fast.png" alt="App Development Services" title="App Development Services" className="w-16" />
                        <h1 className="text-2xl font-semibold text-left text-white">Broadest Asset Coverage</h1>
                        <p className="text-left text-lg text-white">With blockchain technology, users may automatically and manually share and securely store digital assets.</p>
                      </div>

                      <div className="bg-[#1e061e] rounded-xl p-8 drop-shadow-2xl space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150">
                        <img src="newImg/saving.png" alt="App Development Services" title="App Development Services" className="w-16" />
                        <h1 className="text-2xl font-semibold text-left text-white">Broadest Asset Coverage</h1>
                        <p className="text-left text-lg text-white">There are no limitations on the amount you can earn. Invite as many people as you like.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*of fincap section */}
          <div id="feature" className="bg-cover bg-top py-24 " style={{ backgroundImage: `url("newImg/Setion03BG.png")` }}>
            <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto md:flex items-center md:space-x-10 md:space-y-0 space-y-10 ">
              {/* img section */}
              <div className="w-full flex md:justify-start justify-center hover:-translate-y-6 cursor-pointer transition duration-150">
                <img className="rounded-md" src="newImg/Section03_Graphics.png" />
              </div>

              {/* text-section */}
              <div className="space-y-6 w-full md:text-left text-center shadow-xl rounded-xl border-4 border-gray-300 p-10">
                <div className="">
                  <div className="flex justify-end items-end">
                    <img src="newImg/Section03Title.png" alt="" />
                    {/* <h1 className="text-4xl font-medium uppercase text-white bg-[#ff6633] pl-10 pt-6 pr-3 pb-2 tracking-wide">of fincap</h1> */}
                  </div>
                  <p className="text-black text-lg font-normal pt-6">EfinCap makes it easy to create, issue, and manage digital security on the blockchain creating a transparent and secure ecosystem for investors.</p>

                  <h1 className="text-[#440544] text-lg font-bold leading-10 pt-6">Open source</h1>
                  <p className="text-black text-lg font-normal">EfinCap is an open-source project founded by the EfinCap Foundation and open-source protocol built for everyone.</p>

                  <h1 className="text-[#440544] text-lg font-bold leading-10 pt-6">Purpose-built</h1>
                  <p className="text-black text-lg font-normal">With the EfinCap blockchain Initiative, we’re implementing and researching integrating blockchain built specifically for security tokens creating an ecosystem.</p>

                  <h1 className="text-[#440544] text-lg font-bold leading-10 pt-6">Compliant</h1>
                  <p className="text-black text-lg font-normal">Each Smart contracts mean it has programmably enforced jurisdictional regulations built into the security tokens.</p>
                </div>

              </div>


            </section>
          </div>


          {/*of fincap section */}

          <div id="Benifits" style={{ backgroundImage: `url("newImg/Section04BG.png")` }}>

            <div className="py-10"   >
              <section className="md:flex 2xl:w-4/6 xl:w-5/6 w-11/12 mx-auto md:space-x-10 items-center md:space-y-0 space-y-10">
                <div className="w-full space-y-8">
                  <img src="newImg/Section04Title.png" alt="" />

                  <div className="mt-2 toggle_bg_col rounded-lg p-4 cursor-pointer" onClick={() => this.setCurrentCount(this.state.currentCount === 1 ? 0 : 1)}>
                    <div className="flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">FAST</span>
                      <span><img className="pt-2" src={this.state.currentCount === 1 ? "newImg/minus.svg" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 1 ? <div className="pt-4 text-sm text-white">Achieve fast, low-latency transactions with guaranteed finality in seconds, not minutes or hours. EfinCap is an order of magnitude faster than blockchain alternatives.</div> : null}
                  </div>

                  <div className="mt-2 toggle_bg_col rounded-lg p-4 cursor-pointer" onClick={() => this.setCurrentCount(this.state.currentCount === 2 ? 0 : 2)}>
                    <div className="flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">FAIR</span>
                      <span><img className="pt-2" src={this.state.currentCount === 2 ? "newImg/minus.svg" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 2 ? <div className="pt-4 text-sm text-white">Count on fair access, timestamps, and transaction ordering that can't be manipulated by malicious nodes.</div> : null}
                  </div>

                  <div className="mt-2 toggle_bg_col rounded-lg p-4 cursor-pointer" onClick={() => this.setCurrentCount(this.state.currentCount === 3 ? 0 : 3)}>
                    <div className="flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">SECURE</span>
                      <span><img className="pt-2" src={this.state.currentCount === 3 ? "newImg/minus.svg" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 3 ? <div className="pt-4 text-sm text-white">Deploy on a network with proven, best-in-class Asynchronous Byzantine fault tolerant (ABFT) security that's resistant to DDoS and Sybil attacks.</div> : null}
                  </div>

                  <div className="mt-2 toggle_bg_col rounded-lg p-4 cursor-pointer" onClick={() => this.setCurrentCount(this.state.currentCount === 4 ? 0 : 4)}>
                    <div className="flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">STABLE</span>
                      <span><img className="pt-2" src={this.state.currentCount === 4 ? "newImg/minus.svg" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 4 ? <div className="pt-4 text-sm text-white">Run on a reliable network governed by term-limited enterprises with no authorized forks, and the ability to meet global data regulations.</div> : null}
                  </div>
                </div>

                <div className="space-y-6 w-full md:text-left text-center">
                  <img src="newImg/Section04_Graphics.png" className="" alt="" />
                </div>

              </section>
            </div>


          </div>

          {/* Why us section  */}
          <section id="whyus" className="bg-cover bg- bg-no-repeat" style={{ backgroundImage: `url("newImg/Section05BG.png")` }}>
            <div className="section02BGmd:flex items-center relative">
              <div className="py-24">
                <div className="2xl:w-4/6 xl:w-5/6 w-11/12 mx-auto">
                  {/* text-section */}
                  <div className="text-center space-y-4">
                    <div className="w-full flex justify-end items-end">
                      {/* <img src="newImg/section02Title.png" alt="" /> */}
                      <h1 className="text-6xl font-semibold tracking-wide uppercase text-white">why us</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-24 gap-16 py-10">

                      <div className="space-y-4 text-left cursor-pointer hover:scale-105 scale-100 transition duration-150">
                        <img height={80} width="100%" src="newImg/Image01.png" alt="Choose Us" title='Why Choose us' />
                        <div className="p-4"> <h1 className="text-xl font-semibold text-white">Marketing experts</h1>
                          <p className="text-base text-white">Our team of experts have more than +12 years of experience.</p></div>
                      </div>

                      <div className="space-y-4 text-left cursor-pointer hover:scale-105 scale-100 transition duration-150">
                        <img height={80} width="100%" src="newImg/Image02.png" alt="Choose Us" title='Why Choose us' />
                        <div className="p-4"> <h1 className="text-xl font-semibold text-white">Marketing experts</h1>
                          <p className="text-base text-white">Our team of experts have more than +12 years of experience.</p></div>
                      </div>

                      <div className="space-y-4 text-left cursor-pointer hover:scale-105 scale-100 transition duration-150">
                        <img height={80} width="100%" src="newImg/Image03.png" alt="Choose Us" title='Why Choose us' />
                        <div className="p-4"> <h1 className="text-xl font-semibold text-white">Marketing experts</h1>
                          <p className="text-base text-white">Our team of experts have more than +12 years of experience.</p></div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* footer section  */}
          <section className="w-full   bg-cover" style={{ backgroundImage: `url("newImg/FOOTER.png")` }}>
            <footer className="pt-20" >
              <div className=" 2xl:w-8/12 w-5/6  mx-auto lg:flex  py-10 lg:space-x-20 lg:space-y-0 space-y-10 justify-between ">

                <div className="lg:w-6/12 w-full">
                  <div className="space-y-4">
                    <img src="/imglogo/EFINCAP_Final Logo_For Dark BG.png" alt="" className="w-48 bg-contain flex justify-center" />
                    <h2 className="text-left text-white  text-sm ">Efincap provides clients with the industry’s broadest range of solutions to meet their investment objectives, continued investment in technology and our ambition is to give more people access to financial markets.</h2>
                  </div>
                </div>


                <div className="lg:w-3/12 w-full">
                  <h1 className="uppercase font-semibold text-white text-2xl py-4 " >Social media</h1>
                  <div className="flex flex-wrap gap-4   text-white">

                    <a className="cursor-pointer" href='https://www.facebook.com/Efin-Cap-101877035960050' target="blank" > <AiFillFacebook className="text-[1.5rem]" /></a>

                    <a className="cursor-pointer" href='https://www.reddit.com/user/EFinCap' target="blank" > <AiFillRedditSquare className="text-[1.5rem]" /></a>
                    <a className="cursor-pointer" href='https://twitter.com/CaptialEfin' target="blank" ><AiFillTwitterSquare className="text-[1.5rem]" /></a>

                    <a className="cursor-pointer" href='https://t.me/EFinCap' target="blank" > <SiTelegram className="text-[1.5rem]" /></a>

                    <a className="cursor-pointer" href='https://medium.com/@efincap' target="blank" ><AiFillMediumSquare className="text-[1.5rem]" /></a>
                    <a className="cursor-pointer" href='https://www.instagram.com/efincap_tech/' target="blank" ><FaInstagramSquare className="text-[1.5rem]" /></a>

                    <a className="cursor-pointer" href='https://bitcointalk.org/index.php?action=profile;u=3493952;sa=showPosts' target="blank" ><SiBitcoin className="text-[1.5rem]" /></a>
                    <a className="cursor-pointer" href='https://www.linkedin.com/in/efin-captial-384b47246/?original_referer=http%3A%2F%2F127.0.0.1%3A5555%2F' target="blank" ><AiFillLinkedin className="text-[1.5rem]" /></a>
                    <a className="cursor-pointer" href='https://www.youtube.com/channel/UCum_a5LW2IWHfJ8WMJ0fS5A' target="blank" ><FaYoutubeSquare className="text-[1.5rem]" /></a>


                  </div>
                </div>

                <div className="lg:w-3/12 text-white w-full ">
                  <h1 className="uppercase text-2xl text-white py-4" >contact us</h1>

                  <div className="space-y-2" >
                    <div className="flex items-center space-x-2" > <MdMail className="text-[1.5rem]" /> <p className="text-white text-base" >info@efincap.io</p> </div>
                    <div className="flex items-center space-x-2" ><MdMail className="text-[1.5rem]" /> <p className="text-white text-base" >support@efincap.io</p></div>
                  </div>

                </div>

              </div>

              <div className="text-white text-sm py-2 text-center bg-white/10">© 2022 All Rights Reserved</div>

            </footer>
          </section>

        </div>
        {/* Whole Structure End*/}
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
export default connect(mapStateToProps)(Home);
// export default NetworkDetector(connect(mapStateToProps)(Home));