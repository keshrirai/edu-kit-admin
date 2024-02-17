import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import { FiMenu } from 'react-icons/fi';
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrYoutube } from 'react-icons/gr';
 
class Home extends Component {
  constructor(props) {

    super(props);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.state = {
      fieldContact: {},
      errorsContact: {},
      shown: false,
    }
  }

  componentDidMount() {
    document.title = "EfinCap";
  }

 
  inputChange = (event) => {
    event.preventDefault();
    const { fieldContact, errorsContact } = this.state;
    fieldContact[event.target.name] = event.target.value;
    errorsContact[event.target.name] = "";
    // console.log(event.target.name, event.target.value);
    this.setState({ fieldContact, errorsContact });
  }

  createNotificationSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationContact()) {
      let reqData = {
        name: this.state.fieldContact.name,
        email: this.state.fieldContact.email,
        mobNo: this.state.fieldContact.mobNo,
        msg: this.state.fieldContact.msg
      }
      this.props.dispatch(userActions.createNotification(reqData, this.props));
    }
  }

  handleValidationContact = () => {
    let fieldContact = this.state.fieldContact;
    let errorsContact = {};
    let formIsValid = true;

    // name
    if (!fieldContact["name"]) {
      formIsValid = false;
      errorsContact["name"] = "Please Enter Name!";
    }

    // email
    if (!fieldContact["email"]) {
      formIsValid = false;
      errorsContact["email"] = "Please Enter Email!";
    }

    // mobNo
    if (!fieldContact["mobNo"]) {
      formIsValid = false;
      errorsContact["mobNo"] = "Please Enter Mobile Number!";
    }

    // msg
    if (!fieldContact["msg"]) {
      formIsValid = false;
      errorsContact["msg"] = "Please Enter Message!";
    }


    this.setState({ errorsContact: errorsContact });
    return formIsValid;
  }



  loginSubmit(e) {
    e.preventDefault();
    if (this.handleValidationLogin()) {
      let { email, password, } = this.state;
      this.props.dispatch(userActions.login({ email: email, password: password, }, this.props));
    }

  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  setCurrentCount = (data) => {
    this.setState({ currentCount: data });

  };

  render() {
    let { loading } = this.props;

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
        <div className="h-screen overflow-y-auto bg-[rgb(231,231,234)]">



          {/* Header section */}
          <div  className="w-full bg-white h-20 sticky top-0 z-20">
            <div className="flex justify-between items-center  2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto h-full text-black  relative">

              <div>
                <a className='cursor-pointer' onClick={() => this.onClickMenu('/')}  > <img src="/imglogo/EFINCAP_Final Logo_For Dark BG.png" alt="" className="md:w-44 w-36 bg-contain" /></a>
              </div>


              {this.state.shown ?
                <div className="md:flex md:relative absolute md:top-0 top-20 right-0 md:w-auto w-full md:bg-transparent bg-[#29092a]  ">
                  <ul className="md:flex  text-sm font-medium uppercase md:space-x-8 lg:space-x-10 md:space-y-0 space-y-4 md:p-0 p-6 md:text-left text-center">
                    <li className=" cursor-pointer  text-orange-500">Home</li>
                    <li className=" cursor-pointer " onClick={e => {
                      let hero = document.getElementById("aboutus");
                      e.preventDefault();  // Stop Page Reloading
                      hero && hero.scrollIntoView();
                    }} duration={1000} >About</li>
                    <li className=" cursor-pointer" onClick={e => {
                      let hero = document.getElementById("contact_us");
                      e.preventDefault();  // Stop Page Reloading
                      hero && hero.scrollIntoView();
                    }} duration={1000}>contact</li>
                    <li className=" cursor-pointer " onClick={() => this.onClickMenu('/login')}>login</li>
                    <li className=" cursor-pointer" onClick={() => this.onClickMenu('/signup')}>
                      <div className="flex items-center p-2 px-4 font-medium  text-md font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90">
                        Sign Up
                      </div>
                    </li>
                  </ul>
                </div> :
                <div className="md:flex hidden md:relative absolute md:top-0 top-20 right-0 md:w-auto w-full md:bg-transparent bg-[#29092a]  ">
                  <ul className="md:flex items-center text-base font-medium  capitalize  md:space-x-8 lg:space-x-10 md:space-y-0 space-y-4 md:p-0 p-6 md:text-left text-center">
                    <li className=" cursor-pointer  text-orange-500" onClick={() => this.onClickMenu('/')}>Home</li>
                    <li className=" cursor-pointer " onClick={e => {
                      let hero = document.getElementById("aboutus");
                      e.preventDefault();  // Stop Page Reloading
                      hero && hero.scrollIntoView();
                    }} duration={1000}>About</li>
                    <li className=" cursor-pointer " onClick={e => {
                      let hero = document.getElementById("contact_us");
                      e.preventDefault();  // Stop Page Reloading
                      hero && hero.scrollIntoView();
                    }} duration={1000}>contact</li>
                    <li className=" cursor-pointer " onClick={() => this.onClickMenu('/login')}>login</li>

                    <li className=" cursor-pointer" onClick={() => this.onClickMenu('/signup')}>
                      <div className="flex items-center p-2 px-4 font-medium  text-md font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90">
                        Sign Up
                      </div></li>
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

          <section id="main" className="bg-cover bg-center  " style={{ backgroundImage: `url("/imge/christina-wocintechchat-com-Q80LYxv_Tbs-unsplash.jpg")` }}>
            {/* <video autoPlay loop id="video-background" muted plays-inline className="h-full w-full">
              <source src="imglogo/mainbannervideo.mp4" type="video/mp4" className="w-full" />
              <p> In unfortunate year of pandemic the goal is to go eco friendly</p>
            </video> */}
            <div className="bg-gradient-to-b from-[#1B293A]/20 to-[#FF8008]/70 h-[48rem]" >
              <div className="h-full flex flex-col justify-center  items-center   text-white grid-cols-1   2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto bg-cover">
                <div className="pb-10">
                  <h1 className="text-center font-semibold text-[40px] text-white">Welcome to the Efincap MLP Program</h1>
                </div>
                <div className="pb-[130px]">
                  <p className="text-white text-center text-2xl font-normal ">Efincap provides clients with the industry's broadest range of solutions to meet their investment objectives, continued investment in technology and our ambition is to give more people access to financial markets.</p>
                </div>
                <button onClick={() => this.onClickMenu('/signup')}  className="scale-100 hover:scale-105 transition duration-100 text-[rgb(250,128,39)] bg-white px-14  py-3 rounded-[4px] font-medium mx-auto text-xl cursor-pointer shadow-lg ">
                  Sign Up
                </button>
              </div>
            </div>
          </section>

          {/*-------------Header2 section----------- */}
          {/* <section id="header_2">
            <div className="w-full bg-[#ee6e28] md:h-24 md:sticky   md:top-24  z-20 xl:px-0 px-10 p-4">
              <div className="md:flex md:flex-row justify-between items-center max-w-6xl h-full text-white mx-auto">


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
            </div>
          </section> */}

          {/*-------building the future----------- */}
          <section id="building_the_feature">
            <div className="bg-white section02BGmd:flex items-center relative">
              <div className="py-24">
                <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto">
                  {/* text-section */}
                  <div className="text-center space-y-4">
                    {/* <div className="w-full flex justify-between flex-wrap items-start">
                      <img src="newImg/section02Title.png" alt="" />
                      <h1 className="text-lg font-medium uppercase text-white bg-[#1e061e] px-6 py-2">What we do</h1>
                    </div> */}

                    <div className="w-full lg:px-28 px-0">
                      <div className="grid grid-cols-1 justify-items-center">
                        <h1 className="text-4xl font-bold tracking-wide capitalize text-black text-center pb-4">Building The future</h1>
                        <div className="bg-[rgb(250,126,39)] py-0.5 rounded-full w-72"></div>
                      </div>
                      <div className="pt-5">
                        <p className="text-center text-black text-xl font-light ">financial services institutions offered a variety of services under a single umbrella. The scope of
                          these services encompassed a broad range from traditional banking activities to mortgage and
                          trading services. </p>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 py-10">

                      <div className="w-full grid justify-items-center group hover:bg-gradient-to-b from-[rgb(185,68,67)] to-[rgb(250,128,39)] rounded-xl p-8  space-y-6 hover:scale-105  scale-100  cursor-pointer transition duration-250 border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500 ">
                        <div className="h-[105px] w-[105px] rounded-full bg-white p-5 ">
                          <img src="newImg/wifi-signal.png" alt="App Development Services" title="App Development Services" className="w-16 h-16" />
                        </div>
                        <div>
                          <h1 className="text-xl font-semibold text-center text-gray-800 group-hover:text-white">Broadest Asset Coverage</h1>
                        </div>
                        <div className="pb-4">
                          <p className="text-center text-sm  text-gray-800 group-hover:text-white">With support for 30+ assets and 15+ more coming soon, Staked delivers rewards across the broadest range of crypto assets.</p>
                        </div>
                      </div>

                      <div className="w-full grid justify-items-center bg-white group hover:bg-gradient-to-b from-[rgb(185,68,67)] to-[rgb(250,128,39)] rounded-xl p-8  space-y-6 hover:scale-105  scale-100 cursor-pointer transition duration-250 ring-1 ring-slate-500/20">
                        <div className="h-[105px] w-[105px] rounded-full bg-white p-5 ring-1 ring-slate-500/20">
                          <img src="/imge/Rectangle 92.png" alt="App Development Services" title="App Development Services" className="w-16 h-16" />
                        </div>
                        <div>
                          <h1 className="text-xl font-semibold text-center text-gray-800 group-hover:text-white">Broadest Asset Coverage</h1>
                        </div>
                        <div className="pb-4">
                          <p className="text-center text-sm text-gray-800 group-hover:text-white">With support for 30+ assets and 15+ more coming soon, Staked delivers rewards across the broadest range of crypto assets.</p>
                        </div>
                      </div>

                      <div className="w-full grid justify-items-center bg-white group hover:bg-gradient-to-b from-[rgb(185,68,67)] to-[rgb(250,128,39)] rounded-xl p-8  space-y-6 hover:scale-105  scale-100 cursor-pointer transition duration-250 ring-1 ring-slate-500/20">
                        <div className="h-[105px] w-[105px] rounded-full bg-white p-5 ring-1 ring-slate-500/20">
                          <img src="/imge/Rectangle_icons.png" alt="App Development Services" title="App Development Services" className="w-16 h-16" />
                        </div>
                        <div>
                          <h1 className="text-xl font-semibold text-center text-gray-800 group-hover:text-white">Broadest Asset Coverage</h1>
                        </div>
                        <div className="pb-4">
                          <p className="text-center text-sm text-gray-800 group-hover:text-white">With support for 30+ assets and 15+ more coming soon, Staked delivers rewards across the broadest range of crypto assets.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*.......feature of fincap section............ */}
          <section id="feature">
            <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto md:flex items-center md:space-x-10 md:space-y-0 space-y-10 bg-cover bg-top py-24">
              {/* img section */}
              <div className="w-full flex md:justify-start justify-center hover:-translate-y-6 cursor-pointer transition duration-150">
                <img className="rounded-md" src="newImg/Section03_Graphics.png" />
              </div>

              {/* text-section */}
              <div className="space-y-6 w-full md:text-left text-center rounded-xl p-10">
                <div className="">
                  <div>
                    {/* <img src="newImg/Section03Title.png" alt="" /> */}
                    <h1 className="text-4xl text-black font-semibold pt-6 pr-3 pb-2 tracking-wide">Feature of Efincap</h1>
                  </div>
                  <p className="text-black text-xl font-normal pt-6">EfinCap makes it easy to create, issue, and manage digital security on the blockchain creating a transparent and secure ecosystem for investors.</p>

                  <h1 className="text-black text-xl font-bold leading-10 pt-6">Open source</h1>
                  <p className="text-black text-xl font-normal">EfinCap is an open-source project founded by the EfinCap Foundation and open-source protocol built for everyone.</p>

                  <h1 className="text-black text-xl font-bold leading-10 pt-6">Purpose-built</h1>
                  <p className="text-black text-xl font-normal">With the EfinCap blockchain Initiative, we’re implementing and researching integrating blockchain built specifically for security tokens creating an ecosystem.</p>

                  <h1 className="text-black text-lg font-bold leading-10 pt-6">Compliant</h1>
                  <p className="text-black text-lg font-normal">Each Smart contracts mean it has programmably enforced jurisdictional regulations built into the security tokens.</p>
                </div>

              </div>
            </div>
          </section>
          {/* ....................about_us section............... */}
          <section id="aboutus">
            <div id="feature" className="bg-white bg-top py-24">
              <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto">
                <div className="grid grid-cols-1 justify-items-center">
                  <h1 className="text-4xl font-bold tracking-wide capitalize text-black text-center pb-4">About Us</h1>
                  <div className="bg-[rgb(250,126,39)] py-0.5 rounded-full w-72"></div>
                </div>
                <div className="pt-5">
                  <p className="text-center text-black text-xl font-light ">The Efincap team strives to inspire a significant proportion of investors to help make shree a bridge connecting the technology to sustainablity.</p>
                </div>
              </div>

              <section className="2xl:w-4/6 xl:w-5/6 w-11/12  mx-auto md:flex items-center md:space-x-10 md:space-y-0 space-y-10 ">

                {/* img section */}
                <div className="w-full flex md:justify-start justify-center hover:-translate-y-6 cursor-pointer transition duration-150">
                  <img className="rounded-md" src="/imge/Section02_Graphics.png" />
                </div>

                {/* text-section */}
                <div className="space-y-6 w-full md:text-left text-center rounded-xl  p-10">
                  <div className="">
                    <div>
                      {/* <img src="newImg/Section03Title.png" alt="" /> */}
                      <h1 className="text-4xl text-black font-medium pt-6 pr-3 pb-2 ">Cost Efective</h1>
                    </div>
                    <p className="text-black text-xl font-normal pt-6">The shree team strives to create a fast gaming paradigm for the modern technology.</p>

                    <p className="text-black text-xl font-normal pt-6">We provide early stage funding and mentoring to highly scalable green tech companies - while measuring and forecasting the positive environmental impact of a start-up as our central metric of success.</p>

                    <p className="text-black text-xl font-normal pt-6">Efincap aim to create a universe for all the creators through the Revolution in Blockchain Era, in a decentralized way. In the coming year, our team will develop a marketplace that will open doors for collaborations, exclusivity, and profits towards the community.</p>
                  </div>

                </div>
              </section>
            </div>
          </section>

          {/*................ Why us section...........  */}
          <section id="why us">
            <div className="bg-cover bg- bg-no-repeat bg-gradient-to-b from-[rgb(91,107,120)] to-[rgb(18,29,54)] lg:px-[50px] px-5 py-24">
              <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto">
                {/* <img src="newImg/section02Title.png" alt="" /> */}
                <div>
                  <h1 className="text-4xl font-bold tracking-wide capitalize text-white text-center">why us!</h1>
                </div>
                <div className="pt-5">
                  <p className="text-center text-white text-xl font-light ">As technological advancements propel us forward faster and faster, it becomes
                    important for not just the engineers and developers who make them possible to
                    understand them.</p>
                </div>
              </div>
              <div className=" ">
                <div className="py-20">
                  <div className="w-9/12 mx-auto">
                    {/* text-section */}
                    <div className="text-center space-y-4">
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16 gap-10 ">
                        <div className="cursor-pointer hover:scale-105 scale-100 transition duration-150">
                          <div>
                            <img height={80} width="100%" src="newImg/Image01.png" alt="Choose Us" title='Why Choose us' />
                          </div>
                          <div className="mt-10">
                            <h1 className="text-xl font-medium text-white">Marketing experts</h1>
                          </div>
                          <div className="mt-3">
                            <p className="ext-sm font-normal text-white">Our team of experts have more than +12 years of experience.</p>
                          </div>
                        </div>

                        <div className="cursor-pointer hover:scale-105 scale-100 transition duration-150">
                          <div>
                            <img height={80} width="100%" src="newImg/Image02.png" alt="Choose Us" title='Why Choose us' />
                          </div>
                          <div className="mt-10">
                            <h1 className="text-xl font-medium text-white">Marketing experts</h1>
                          </div>
                          <div className="mt-3">
                            <p className="text-sm font-normal text-white">Our team of experts have more than +12 years of experience.</p>
                          </div>
                        </div>

                        <div className="text-center cursor-pointer hover:scale-105 scale-100 transition duration-150">
                          <div>
                            <img height={80} width="100%" src="newImg/Image03.png" alt="Choose Us" title='Why Choose us' />
                          </div>
                          <div className="mt-10">
                            <h1 className="text-xl font-medium text-white">Marketing experts</h1>
                          </div>
                          <div className="mt-3">
                            <p className="ext-sm font-normal text-white">Our team of experts have more than +12 years of experience.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* .........Our services.................... */}
          <section id="service" >
            <div className="section02BGmd:flex items-center relative bg-white">
              <div className="py-24">
                <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto">
                  {/* text-section */}
                  <div className="text-center space-y-4">
                    {/* <div className="w-full flex justify-between flex-wrap items-start">
                      <img src="newImg/section02Title.png" alt="" />
                      <h1 className="text-lg font-medium uppercase text-white bg-[#1e061e] px-6 py-2">What we do</h1>
                    </div> */}
                    <div className="w-full lg:px-28 px-0">
                      <div className="grid grid-cols-1 justify-items-center">
                        <h1 className="text-4xl font-bold tracking-wide capitalize text-black text-center pb-4">Our Services</h1>
                        <div className="bg-[rgb(250,126,39)] py-0.5 rounded-full w-72"></div>
                      </div>
                      <div className="pt-5">
                        <p className="text-center text-black text-xl font-light ">The rapid development of Fintech is also helping to bring new opportunities
                          to increase transparency, reduce costs and also make information more
                          accessible. </p>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-10">
                      <div className="bg-white rounded-xl  space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150 border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500">
                        <div className="bg-white">
                          <img src="newImg/Financialmanagement.png" className="h-full w-full rounded-t-xl" alt="App Development Services" title="App Development Services" />
                        </div>
                        <div className="px-3 pt-3 pb-14">
                          <h1 className="text-xl font-semibold text-center text-black">Financial management</h1>

                          <p className="text-center text-sm text-black pt-4">With blockchain technology, users may automatically and manually share and securely store digital assets.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl  space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150 border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500">
                        <div className="bg-white">
                          <img src="newImg/Wealthinvestment.png" className="h-full w-full rounded-t-xl" alt="App Development Services" title="App Development Services" />
                        </div>
                        <div className="px-3 pt-3 pb-14">
                          <h1 className="text-xl font-semibold text-center text-black">Wealth investment</h1>

                          <p className="text-center text-sm text-black pt-4">With blockchain technology, users may automatically and manually share and securely store digital assets.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl  space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150 border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500">
                        <div className="bg-white">
                          <img src="newImg/Professionalapproach.png" className="h-full w-full rounded-t-xl" alt="App Development Services" title="App Development Services" />
                        </div>
                        <div className="px-3 pt-3 pb-14">
                          <h1 className="text-xl font-semibold text-center text-black">Profesional approach</h1>

                          <p className="text-center text-sm text-black pt-4">With blockchain technology, users may automatically and manually share and securely store digital assets.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl  space-y-6 hover:-translate-y-6 cursor-pointer transition duration-150 border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500">
                        <div className="bg-white">
                          <img src="newImg/Compatibleinstitute.png" className="h-full w-full rounded-t-xl" alt="App Development Services" title="App Development Services" />
                        </div>
                        <div className="px-3 pt-3 pb-14">
                          <h1 className="text-xl font-semibold text-center text-black">Compatible institute</h1>

                          <p className="text-center text-sm text-black pt-4">With blockchain technology, users may automatically and manually share and securely store digital assets.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modularity section */}
          <section id="modularity" >
            <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto py-16">
              <div>
                <h1 className="capitalize text-2xl text-center">Efincap Is A Modular And Security-As-A-Service Platform And Offers The Following Benefits</h1>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-10 lg:gap-7">
                <div className="bg-white rounded-md grid grid-cols-1 justify-items-center pt-6 pb-9 space-y-4">
                  <div className="bg-[rgb(254,233,213)] h-[76px] w-[76px] rounded-full p-3">
                    <img src="newImg/eth.png" className="h-[50px] w-[50px]" alt="App Development Services" title="App Development Services" />
                  </div>
                  <h1 className="capitalize text-base font-bold">ETH COMPATIBILITY</h1>
                </div>
                <div className="bg-white rounded-md grid grid-cols-1 justify-items-center pt-6 pb-9 space-y-4">
                  <div className="bg-[rgb(254,233,213)] h-[76px] w-[76px] rounded-full p-3">
                    <img src="newImg/Modularity.png" className="h-[50px] w-[50px]" alt="App Development Services" title="App Development Services" />
                  </div>
                  <div>
                    <h1 className="capitalize text-base font-bold">Modularity</h1>
                  </div>
                </div>
                <div className="bg-white rounded-md grid grid-cols-1 justify-items-center pt-6 pb-9 space-y-4">
                  <div className="bg-[rgb(254,233,213)] h-[76px] w-[76px] rounded-full p-3">
                    <img src="newImg/Interoperability.png" className="h-[50px] w-[50px]" alt="App Development Services" title="App Development Services" />
                  </div>
                  <h1 className="capitalize text-base font-bold">Interoperability</h1>
                </div>
                <div className="bg-white rounded-md grid grid-cols-1 justify-items-center pt-6 pb-9 space-y-4">
                  <div className="bg-[rgb(254,233,213)] h-[76px] w-[76px] rounded-full p-3">
                    <img src="newImg/Sovereignty.png" className="h-[50px] w-[50px]" alt="App Development Services" title="App Development Services" />
                  </div>
                  <h1 className="capitalize text-base font-bold">sovereignty</h1>
                </div>
              </div>
            </div>
          </section>

          {/*.........benifits of fincap section........ */}
          <section id="Benifits" >
            {/* <div id="Benifits" style={{ backgroundImage: `url("newImg/Section04BG.png")` }}> */}
            <div className="py-10 bg-white" >
              <div className="md:flex 2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto md:space-x-10 items-center md:space-y-0 space-y-10">
                <div className="w-full space-y-8">
                  {/* <img src="newImg/Section04Title.png" alt="" /> */}

                  <div>
                    <h1 className="text-4xl font-medium text-black">Benifits</h1>
                  </div>

                  <div className="mt-2 rounded-lg cursor-pointer ring-1 ring-slate-500/20" onClick={() => this.setCurrentCount(this.state.currentCount === 1 ? 0 : 1)}>
                    <div className="toggle_bg_col p-4 flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">Efincap is fast</span>
                      <span><img className="pt-2" src={this.state.currentCount === 1 ? "newImg/cross.png" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 1 ? <div className="p-4 text-sm bg-white text-black ">Achieve fast, low-latency transactions with guaranteed finality in seconds, not minutes or hours. EfinCap is an order of magnitude faster than blockchain alternatives.</div> : null}
                  </div>

                  <div className="mt-2 rounded-lg cursor-pointer ring-1 ring-slate-500/20" onClick={() => this.setCurrentCount(this.state.currentCount === 2 ? 0 : 2)}>
                    <div className="toggle_bg_col p-4 flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">FAIR</span>
                      <span><img className="pt-2" src={this.state.currentCount === 2 ? "newImg/cross.png" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 2 ? <div className="p-4 text-sm text-black">Count on fair access, timestamps, and transaction ordering that can't be manipulated by malicious nodes.</div> : null}
                  </div>

                  <div className="mt-2 rounded-lg cursor-pointer ring-1 ring-slate-500/20" onClick={() => this.setCurrentCount(this.state.currentCount === 3 ? 0 : 3)}>
                    <div className="toggle_bg_col p-4 flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">SECURE</span>
                      <span><img className="pt-2" src={this.state.currentCount === 3 ? "newImg/cross.png" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 3 ? <div className="p-4 text-sm text-black">Deploy on a network with proven, best-in-class Asynchronous Byzantine fault tolerant (ABFT) security that's resistant to DDoS and Sybil attacks.</div> : null}
                  </div>

                  <div className="mt-2 rounded-lg cursor-pointer ring-1 ring-slate-500/20" onClick={() => this.setCurrentCount(this.state.currentCount === 4 ? 0 : 4)}>
                    <div className="toggle_bg_col p-4 flex justify-between w-full md:text-lg text-base font-medium text-left text-white rounded-lg "  >
                      <span className="text-lg font-semibold">STABLE</span>
                      <span><img className="pt-2" src={this.state.currentCount === 4 ? "newImg/cross.png" : "newImg/plus.svg"} height={16} width="16" alt="home.png" /></span>
                    </div>
                    {this.state.currentCount === 4 ? <div className="p-4 text-sm text-black">Run on a reliable network governed by term-limited enterprises with no authorized forks, and the ability to meet global data regulations.</div> : null}
                  </div>

                </div>
                <div className="w-full md:text-left text-center">
                  <img src="newImg/Section04_Graphics.png" className="" alt="" />
                </div>
              </div>
            </div>
          </section>

          {/* ...........Contact Us.................... */}
          <section id="contact_us" className="bg-[rgb(10,20,47)]" >
            <div className="2xl:w-9/12 xl:w-10/12 md:w-11/12 md:px-0 px-4 mx-auto py-10   ">
              <div className="lg:flex items-center  lg:space-x-10 border-b border-white/20  space-y-10 pb-8">

                <div className=" w-full ">

                  <div className="space-y-6" >
                    <h1 className="uppercase text-base font-bold text-white/50">Upskill for a better future</h1>
                    <h1 className="capitalize text-4xl font-medium text-white">Efincap more Information</h1>
                    <p className="text-lg font-normal text-white/50">Efincap provides clients with the industry's broadest range of solutions to meet their investment objectives, continued investment in technology and our ambition is to give more people access to financial markets.</p>
                  </div>

                  <div class="mt-10 ">
                    <button onClick={() => this.onClickMenu('/signup')}
                      class="bg-[rgb(250,128,39)] text-white px-10 py-3 rounded-full text-lg font-medium">Sign Up Now
                    </button>
                  </div>
                  <div className="mt-10">
                    <p className="text-base font-normal text-white/50"> 	&#169; 2022 Efincap Media, LLC</p>
                  </div>
                </div>


                <form action="#" className=" w-full grid grid-cols-1 justify-items-center bg-white px-[30px] p-6 rounded-lg  space-y-6  ">
                  <div class="w-full mb-3">
                    <h1 class="text-xl font-semibold text-black/80">Contact Us</h1>
                  </div>
                  <div className="w-full">
                    <input type="text" id="name"
                      class="w-full px-4 py-2 rounded-md placeholder-[rgb(121,121,121)] text-[rgb(156,163,175)] focus:text-black text-base font-normal  border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500"
                      placeholder="Name" name="name"
                      value={this.state.fieldContact && this.state.fieldContact['name'] ? this.state.fieldContact['name'] : ''} onChange={this.inputChange} />
                      {this.state.errorsContact["name"] ?
                        <div className="invalid-feedback text-orange-500 ">
                          {this.state.errorsContact["name"]}
                        </div>
                        : null}
                  </div>
                  <div className="w-full">
                    <input type="email" id="email"
                      class="w-full px-4 py-2 rounded-md placeholder-[rgb(121,121,121)] text-[rgb(156,163,175)]  text-base font-normal border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500"
                      placeholder="example@gmail.com" 
                      name='email' value={this.state.fieldContact && this.state.fieldContact['email'] ? this.state.fieldContact['email'] : ''} onChange={this.inputChange} />
                         {this.state.errorsContact["email"] ?
                        <div className="invalid-feedback text-orange-500 ">
                          {this.state.errorsContact["email"]}
                        </div>
                        : null}
                  </div>

                  <div className="w-full">
                    <input type="text" id="s_amt"
                      class="w-full px-4 py-2 rounded-md placeholder-[rgb(121,121,121)] text-[rgb(156,163,175)]  text-base font-normal border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500"
                      placeholder="+91 1400 323 03200"
                      name='mobNo' value={this.state.fieldContact && this.state.fieldContact['mobNo'] ? this.state.fieldContact['mobNo'] : ''} onChange={this.inputChange} />
                       {this.state.errorsContact["mobNo"] ?
                        <div className="invalid-feedback text-orange-500 ">
                          {this.state.errorsContact["mobNo"]}
                        </div>
                        : null}
                  </div>
                  <div className="w-full">
                    <textarea id="msg" rows="4" type="text"
                      class="block p-4 w-full rounded-md placeholder-[rgb(121,121,121)] text-[rgb(156,163,175)]  text-base font-normal border border-gray-400/50  focus:outline-none focus:ring-1 ring-slate-500"
                      placeholder="Your messages..."
                      name='msg' value={this.state.fieldContact && this.state.fieldContact['msg'] ? this.state.fieldContact['msg'] : ''} onChange={this.inputChange}></textarea>
                        {this.state.errorsContact["msg"] ?
                        <div className="invalid-feedback text-orange-500 ">
                          {this.state.errorsContact["msg"]}
                        </div>
                        : null}
                  </div>
                  <div class="w-40 flex flex-col justify-items-center">
                    <button onClick={this.createNotificationSubmit}
                      class=" bg-[rgb(250,128,39)] text-white px-10 py-4 rounded-[4px] text-[16px] font-medium">Sign Up
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex md:flex-row flex-col justify-between items-center py-6 lg:space-y-0 space-y-10 mx-auto">

                <img src="newImg/Logo.png" className="w-36" />


                <div className="flex  text-base  md:space-x-10  space-x-4 md:space-y-0  md:p-0 p-6   text-center text-white/90 capitalize   ">
                  <a className=" cursor-pointer" onClick={() => this.onClickMenu('/')}>Home</a>
                  <a className=" cursor-pointer" onClick={() => this.onClickMenu('/aboutus')}>About</a>
                  <a className=" cursor-pointer" onClick={() => this.onClickMenu('/contactus')}>contact</a>
                </div>

                <div className="  flex space-x-6">
                  <a className="cursor-pointer" href='https://www.linkedin.com/in/efin-captial-384b47246/?original_referer=http%3A%2F%2F127.0.0.1%3A5555%2F' target="blank" ><div className="h-10 flex items-center justify-center w-10 rounded-full border border-white/50   "><GrLinkedinOption className="text-[1rem]  text-white" /></div></a>

                  <a className="cursor-pointer" href='https://www.facebook.com/Efin-Cap-101877035960050' target="blank" ><div className="h-10 flex items-center justify-center w-10 rounded-full border border-white/50"> <GrFacebookOption className="text-[1rem] text-white" /></div></a>

                  <a className="cursor-pointer" href='https://www.instagram.com/efincap_tech/' target="blank" ><div className="h-10 flex items-center justify-center w-10 rounded-full border border-white/50"><GrInstagram className="text-[1rem]  text-white" /></div></a>

                  <a className="cursor-pointer" href='https://www.youtube.com/channel/UCum_a5LW2IWHfJ8WMJ0fS5A' target="blank" >
                    <div className="h-10 flex items-center justify-center w-10 rounded-full border border-white/50"><GrYoutube className="text-[1rem]  text-white" /></div></a>
                </div>

              </div>
            </div>
          </section>

          {/*...........footer section.................  */}
          <section className="w-full   bg-cover" style={{ backgroundImage: `url("newImg/FOOTER.png")` }
          }>
            {/* <footer className="pt-20" >
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

            </footer> */}
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