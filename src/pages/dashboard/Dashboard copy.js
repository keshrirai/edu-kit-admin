import React, { Component } from 'react';
import { dashboardActions, userActions, alertActions } from '../../_actions';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import moment from 'moment';
import jsPDF from "jspdf";
import "jspdf-autotable";
import ReactECharts from 'echarts-for-react';


// import Chart from 'react-apexcharts'
import Marquee from 'react-fast-marquee';
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      pageNo: 1,
      size: 10,
      priceTempData: {
        BPC: 1,
        btcPrice: 0,
        dollerPrice: 0,
      },
      fieldslogin: {},
      errorslogin: {},
      option: {},

    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    let dataCmc = {
      "keyWord": "",
      "pageNo": 1,
      "size": 12
    }
    let data2 = {
      "keyWord": "",
      "pageNo": 1,
      "size": 5
    }
    // let mining = {
    //   "txType": ["MINING"],
    //   "keyWord": "",
    //   "pageNo": 1,
    //   "size": this.state.size
    // }
    this.props.dispatch(dashboardActions.getAppSetting());
    this.props.dispatch(userActions.getUserDetails(data));
    this.props.dispatch(userActions.getCmcCoinByTickerName());
    this.props.dispatch(userActions.getProfileDataPi());
    // this.props.dispatch(userActions.getTx(temp));
    this.props.dispatch(dashboardActions.getCoinList(dataCmc));
    this.props.dispatch(dashboardActions.getCmcHistoryDftcList(dataCmc));
    this.props.dispatch(dashboardActions.getLoginhistory(data2));
    // this.props.dispatch(dashboardActions.getTxAllMultiTeam(mining));
    this.props.dispatch(dashboardActions.getAllCoinCard());
    this.props.dispatch(dashboardActions.getMiningPftShareList(data));
    this.props.dispatch(dashboardActions.getWelcomeBonusList(data));
    this.props.dispatch(dashboardActions.getLTArchiveRewardList(data));
    this.props.dispatch(dashboardActions.getFastrackBonusList(data));
    window.scrollTo(0, 0)
    // this.interval = setInterval(() => this.loadData(), 2000);

  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.users.sendCoinSuccess) {
      return {
        ...nextProps,
        fieldslogin: {},
        errorslogin: {}
      }
    } else {
      return {
        ...nextProps
      }
    }
  }

  sendCoin = (e) => {
    e.preventDefault();
    if (this.handleValidationSendCoin()) {

      let { coinType, toAddress, recievingAmount, password } = this.state.fieldslogin;
      this.props.dispatch(userActions.sendCoin({
        password: password,
        coinType: coinType,
        amount: Number(recievingAmount),
        to: toAddress,
      }, this.props));
    }
  }
  handleValidationSendCoin = () => {
    let fieldslogin = this.state.fieldslogin;
    let errorslogin = {};
    let formIsValid = true;

    //coinType
    if (!fieldslogin["coinType"]) {
      formIsValid = false;
      errorslogin["coinType"] = "Please select Coin Type!";
    }
    //toAddress
    if (!fieldslogin["toAddress"]) {
      formIsValid = false;
      errorslogin["toAddress"] = "Please Enter To Address";
    }
    //amount
    if (!fieldslogin["amount"]) {
      formIsValid = false;
      errorslogin["amount"] = "Please enter Amount!";
    }
    //fees
    if (!fieldslogin["fees"]) {
      formIsValid = false;
      errorslogin["fees"] = "Please enter Fees!";
    }
    //password
    if (!fieldslogin["password"]) {
      formIsValid = false;
      errorslogin["password"] = "Please enter Password!";
    }
    //recievingAmount
    if (!fieldslogin["recievingAmount"]) {
      formIsValid = false;
      errorslogin["recievingAmount"] = "Please enter RecievingAmount!";
    }

    this.setState({ errorslogin: errorslogin });
    return formIsValid;
  }

  inputChange = (event) => {
    event.preventDefault();
    const { fieldslogin, errorslogin } = this.state;
    fieldslogin[event.target.name] = event.target.value;
    errorslogin[event.target.name] = "";
    this.setState({ fieldslogin, errorslogin });
  }

  inputChangeAmount = (event) => {
    event.preventDefault();
    let { users } = this.props;
    let { overview } = users;
    let { setting } = overview;
    let { txFee } = setting ? setting : {};
    // console.log("event.target.value  ", event.target.value);
    if (event.target.value >= 0) {
      const { fieldslogin, errorslogin } = this.state;
      fieldslogin[event.target.name] = event.target.value;
      fieldslogin['amount'] = event.target.value;
      fieldslogin['fees'] = txFee ? txFee : 0.0001;
      fieldslogin['recievingAmount'] = parseFloat(event.target.value - (txFee ? txFee : 0.0001)).toFixed(8);
      errorslogin['amount'] = "";
      this.setState({ fieldslogin, errorslogin });
    } else {
      const { errorslogin } = this.state;
      errorslogin['amount'] = "Amount should be positive number.";
      this.setState({ errorslogin });
    }
  }

  copyCodeToClipboard = (data) => {
    navigator.clipboard.writeText(data)
    this.props.dispatch(alertActions.success("Copied!"));
  }

  handlePageChange = (offset, page) => {
    // console.log(offset, page)
  }

  inputChangePrice = (event) => {
    let { users } = this.props;
    let { priceDeta } = users;
    let { btcPrice, dollerPrice } = priceDeta ? priceDeta : {}
    event.preventDefault();
    const { priceTempData } = this.state;
    priceTempData[event.target.name] = event.target.value;
    priceTempData['dollerPrice'] = parseFloat(event.target.value * dollerPrice).toFixed(8);
    priceTempData['btcPrice'] = parseFloat(event.target.value * btcPrice).toFixed(8);
    this.setState({ priceTempData });
    // BPC: 1,
    //     btcPrice: 0,
    //     dollerPrice: 0,
  }


  handlePageClick = (data) => {
    // console.log("data  ", data);
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      "txType": "SEND_RECEIVED",
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size
    }
    this.props.dispatch(userActions.getTx(datatemp));
  }

  handleSearch = (event) => {
    event.preventDefault();
    let { value } = event.target;
    this.setState({ keyWord: value, offset: 0 });
    let data = {
      "txType": "SEND_RECEIVED",
      "keyWord": value,
      "pageNo": 1,
      "size": this.state.size
    }
    this.props.dispatch(userActions.getTx(data));
  }

  exportPDF = () => {
    let { users } = this.props;

    let { txList } = users;
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Send and Received Report";
    const headers = [["DATE", "TRANSACTION TYPE", "AMOUNT", "COIN", "TRANSACTION STATUS"]];
    const data = txList.map(elt => [moment(new Date(parseInt(elt.createdAt))).utcOffset("+05:30").format("YYYY-MM-DD HH:mm"), elt.txType, elt.amount, elt.coin, elt.status ? "SUCESS" : "PENDING"]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(Date.now() + "_send_received_report.pdf")
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  render() {

    let { users, user, dashboard } = this.props;
    let { loading, overview } = users;
    let { coinItems, loginHistoryItems, cmcCoinHistoryItemsG, maintenance, maintenancemessage } = dashboard;

    console.log("RENDER_________maintenance::", maintenance);
    console.log("RENDER_________maintenancemessage::", maintenancemessage);

    return (
      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>


        {
          maintenance && maintenance.value && maintenance.value == "YES" ?


            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg_page"  >

              <>

                <div class="container">
                  <div class="box">
                    <div class="animation">
                      <div class="one spin-one"></div>
                      <div class="two spin-two"></div>
                      <div class="three spin-one"></div>
                    </div>
                    <p>Under maintenance</p>
                    <p>Shortly our services will start. We are on final security integration.</p>
                    <p>Back To <span onClick={() => this.onClickMenu('/')}> Home Page</span></p>
                  </div>
                </div>


              </>

            </main>
            :
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg_page"  >

              <div className='w-full py-3'>



                <section>
                  <div className='w-full px-4 mt-8'>
                    <div className='w-full bg-[#465161] py-4 rounded-md'>

                      <div className=''>
                        <Marquee behavior="scroll" scrollamount="3" className="text-white  text-xs">
                          <ul className='flex items-center space-x-4'>

                            {/* {
                          coinItems && coinItems.length > 0 ?
                            coinItems.map((element, index) => (
                              <React.Fragment key={index}> */}
                            <li className='flex items-center space-x-4'>
                              {/* <img className='text-yellow-400' src={element && element.imageLinkUrl ? element.imageLinkUrl : "-"} width="15" height="15" alt="not found img" /> */}
                              <h2 className='text-sm'><span className='text-yellow-400'>Your Will Distribution share wednesday Morning</span></h2>
                            </li>
                            {/* </React.Fragment>

                            )) : null

                        } */}
                          </ul>
                        </Marquee>
                      </div>
                    </div>
                  </div>
                </section>



                <h2 className='px-4 py-3 text-2xl text-white'>Dashboard</h2>

                <div className='w-full px-4'>
                  <div className='grid 2xl:grid-cols-2 gap-4 space-y-4 2xl:space-y-0'>

                    <div className="w-full bg-slate-700 py-2">
                      <div className='w-full space-y-4'>
                        <div className="shadow-xl">
                          <h1 className='pb-2 text-white text-xl text-medium pl-4'>Overview</h1>
                          <div className='grid md:grid-cols-3 gap-4 px-2 rounded-b-md'>

                            <React.Fragment >
                              <div className='bg-slate-900 w-full p-4 rounded-md'>
                                <div className=' '>
                                  <div className='space-y-2 text-center text-white h-36'>
                                    <h2 className='text-center text-white/60 pt-2 text-sm capitalize'>Welcome Back,<b className='text-yellow-500' > {user && user.userName ? user.userName : "-"}</b></h2>

                                    <div className='h-20 flex flex-col items-center justify-center' >
                                      <h2 className='text-center text-white/50 text-sm  '>Portfolio</h2>

                                      <h2 className='text-center text-xl text-white tracking-wider font-bold'>{overview && overview.packageSum ? overview.packageSum : "0"}</h2>

                                    </div>
                                  </div>
                                  <center><button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl '
                                  // onClick={() => this.onClickMenu('/app/ltaReward')}
                                  >View</button></center>
                                </div>
                              </div>
                            </React.Fragment>

                            <React.Fragment >
                              <div className='bg-slate-900 w-full p-4 rounded-md'>
                                <div className=''>
                                  <div className='space-y-2 break-all h-36'>
                                    <h2 className='text-center text-white/60 pt-2 text-sm '>Promotional Package</h2>

                                    <div className='h-20 flex justify-center items-center' >
                                      <h2 className='text-center text-xl text-white tracking-wider font-bold'>{overview && overview.packagePromoSum ? overview.packagePromoSum : "0"}</h2>
                                    </div>

                                  </div>
                                  <center><button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl ' onClick={() => this.onClickMenu('/app/promoPackage')}>View</button>
                                  </center>
                                </div>
                              </div>
                            </React.Fragment>

                            <React.Fragment >
                              <div className='bg-slate-900 w-full p-4 rounded-md'>
                                <div className=''>
                                  <div className='space-y-2 break-all h-36 '>
                                    <h2 className='text-center text-white/60 pt-2 text-sm '>Level Status</h2>
                                    <div className='flex items-center justify-center h-20' >
                                      <h2 className='text-center text-lg text-white   font-bold'>Mining Advisor</h2>
                                    </div>
                                  </div>
                                  <center><button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl'
                                  // onClick={() => this.onClickMenu('/app/ltaReward')}
                                  >View</button></center>
                                </div>
                              </div>
                            </React.Fragment>
                          </div>
                        </div>
                      </div>



                    </div>

                    <div className='px-2 bg-slate-700 py-2 mt-4 shadow-xl'>
                      <h1 className='pb-4 text-white text-xl text-medium pl-4'>Accumulated Bonus</h1>
                      <div className='grid md:grid-cols-3 gap-4 px-2'>

                        <div className='w-full' >
                          <div className=' w-full bg-slate-900  rounded-md p-4 z-20'>

                            {/* <h2 className="text-center text-white border-b border-gray-400 mx-4 pb-2 text-sm">PROFIT</h2> */}
                            <div className=''>
                              <div className=' text-white space-y-2 h-32 '>
                                <h2 className='text-center text-white/60 pt-2 text-sm '>Mining Profits</h2>
                                <div className='h-20 flex justify-center items-center' >
                                  <h1 className='text-center text-xl font-semibold'>{overview && overview.wallet && overview.wallet.miningP ? overview.wallet.miningP.toFixed(2) : "0"}</h1>
                                </div>
                              </div>
                              <center className="" onClick={() => this.onClickMenu('/app/MiningProfitsTransaction')}>
                                <button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl w-32 mt-4'>View</button>
                              </center>
                            </div>
                          </div>
                        </div>

                        <div className='w-full' >
                          <div className=' w-full bg-slate-900  rounded-md p-4 z-20'>

                            {/* <h2 className="text-center text-white border-b border-gray-400 mx-4 pb-2 text-sm">PROFIT</h2> */}
                            <div className=''>
                              <div className=' text-white space-y-2 h-32'>
                                <h2 className='text-center text-white/60 pt-2 text-sm '>Team Mining Profits</h2>

                                <div className='h-20 flex justify-center items-center'>
                                  <h2 className='text-center text-xl font-semibold'>{overview && overview.wallet && overview.wallet.teamMiningP ? overview.wallet.teamMiningP.toFixed(2) : "0"}</h2>
                                </div>

                              </div>
                              <center className="" onClick={() => this.onClickMenu('/app/teamMiningProfitsTransaction')}>
                                <button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl w-32 mt-4'>View</button>
                              </center>
                            </div>
                          </div>
                        </div>

                        <div className='w-full' >
                          <div className=' w-full bg-slate-900  rounded-md p-4 z-20'>

                            {/* <h2 className="text-center text-white border-b border-gray-400 mx-4 pb-2 text-sm">PROFIT</h2> */}
                            <div className=' '>
                              <div className=' text-white space-y-2 h-32'>
                                <h2 className='text-center text-white/60 pt-2 text-sm '>Team Welcome Bonus</h2>

                                <div className='h-20 flex justify-center items-center' >
                                  <h2 className='text-center text-xl font-semibold'>{overview && overview.wallet && overview.wallet.teamWB ? overview.wallet.teamWB.toFixed(2) : "0"}</h2>
                                </div>

                              </div>
                              <center className="" onClick={() => this.onClickMenu('/app/teamWelcomeBonus')}>
                                <button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl w-32 mt-4'>View</button>
                              </center>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className='grid 2xl:grid-cols-2 gap-4 items-center mt-4 px-4'>
                {/* <div className="w-full rounded-md bg-slate-900">
              <div className='w-full p-10'>
                <div className='flex justify-center'>
                  <div className='space-y-4'>
                    <h2 className='text-2xl text-white font-normal tracking-wider capitalize'>FASTRACK BONUS</h2>
                    <h2 className='text-center text-white tracking-wider font-bold'>7 DAYS</h2>
                    <h2 className='text-center text-white tracking-wider font-bold'>SPORTS BIKE FUND</h2>
                    <h2 className='text-center text-green-700 tracking-wider font-bold'>REMANING 5 DAYS</h2>
                    <center><button className='text-center w-36 bg-red-700 text-white px-7 py-2 rounded-full mt-3' onClick={() => this.onClickMenu('/app/fastrackBonus')} >View</button></center>
                  </div>
                </div>
              </div>
            </div> */}

                <div className='w-full space-y-6'>
                  <div className="bg-[#2A3441] shadow-xl">
                    <h1 className='py-4 text-white text-xl text-medium pl-4'>Reward And Ranking</h1>
                    <div className='grid md:grid-cols-3 gap-4 px-2 py-2 rounded-b-md'>

                      <div className='bg-black p-6 rounded-md relative my-2'>
                        <div className='rounded-xl overflow-hidden -mt-10 ' >
                          <div className='bg-yellow-500'>
                            <h2 className='text-center xl:text-md text-sm py-2 '>Reward</h2>
                          </div>
                          {/* <div className='w-14 bg-yellow-500 rounded-b-full mx-auto'>
                        <h2 className='text-center text-lg font-semibold p-0.5'></h2>
                      </div> */}
                          <h2 className='text-white text-center text-3xl font-semibold h-32 flex items-center justify-center'>0</h2>
                          {/* <h2 className='text-white text-center font-semibold h-20 flex items-center justify-center'>Level</h2> */}
                          <center className=""
                          // onClick={() => this.onClickMenu('/app/teamWelcomeBonus')}
                          >
                            <button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl w-32'>Claim</button>
                          </center>

                          {/* <div className='mx-auto h-8 bg-yellow-500'>
                      </div> */}
                        </div>
                      </div>
                      <div className='bg-black p-6 rounded-md relative my-2'>
                        <div className='rounded-xl overflow-hidden -mt-10 ' >
                          <div className='bg-yellow-500'>
                            <h2 className='text-center xl:text-md text-sm py-2 '>Fastrack</h2>
                          </div>
                          {/* <div className='w-14 bg-yellow-500 rounded-b-full mx-auto'>
                        <h2 className='text-center text-lg font-semibold p-0.5'></h2>
                      </div> */}
                          <h2 className='text-white text-center text-3xl font-semibold h-32 flex items-center justify-center'>0</h2>
                          {/* <h2 className='text-white text-center font-semibold h-20 flex items-center justify-center'>Level</h2> */}
                          <center className=""
                          // onClick={() => this.onClickMenu('/app/teamWelcomeBonus')}
                          >
                            <button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl w-32'>Claim</button>
                          </center>
                          {/* <div className='mx-auto h-8 bg-yellow-500'>
                      </div> */}
                        </div>
                      </div>
                      <div className='bg-black p-6 rounded-md relative my-2'>
                        <div className='rounded-xl overflow-hidden -mt-10 ' >
                          <div className='bg-yellow-500'>
                            <h2 className='text-center xl:text-md text-sm py-2 '>Total Income</h2>
                          </div>
                          {/* <div className='w-14 bg-yellow-500 rounded-b-full mx-auto'>
                        <h2 className='text-center text-lg font-semibold p-0.5'></h2>
                      </div> */}
                          <h2 className='text-white text-center text-3xl font-semibold h-32 flex items-center justify-center'>0</h2>
                          {/* <h2 className='text-white text-center font-semibold h-20 flex items-center justify-center'>Level</h2> */}
                          <center className=""
                          // onClick={() => this.onClickMenu('/app/teamWelcomeBonus')}
                          >
                            <button className='bg-[#DC2626] text-white px-6 py-1 rounded-2xl w-32'>View</button>
                          </center>

                          {/* <div className='mx-auto h-8 bg-yellow-500'>
                      </div> */}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* <div className='w-full space-y-6'>
              <div className="bg-[#2A3441] shadow-xl">
                <h1 className='py-4 text-white text-xl text-medium pl-4'>Team welcome bonus</h1>
                <div className='grid md:grid-cols-3 gap-4 px-2 py-2 rounded-b-md'>
                  {
                    welcomeBonusList && welcomeBonusList.length > 0 ?
                      welcomeBonusList.map((element, index) => (
                        <React.Fragment key={index}>
                          <div className='bg-black p-6 rounded-md relative my-2'>
                            <div className='rounded-xl overflow-hidden -mt-10 ' >
                              <div className='bg-yellow-500'>
                                <h2 className='text-center xl:text-md text-sm py-2 '>Percentage Distribution</h2>
                              </div>
                              <div className='w-14 bg-yellow-500 rounded-b-full mx-auto'>
                                <h2 className='text-center text-lg font-semibold p-0.5'>{element && element.percentDist ? element.percentDist : "-"}%</h2>
                              </div>
                              {
                                (element && element.from) === (element && element.to) ?
                                  <>
                                    <h2 className='text-white text-center font-semibold h-24 flex items-center justify-center'>Level {element && element.from ? element.from : "-"} </h2>
                                  </> :
                                  <>
                                    <h2 className='text-white text-center font-semibold h-24 flex items-center justify-center'>Level {element && element.from ? element.from : "-"}- {element && element.to ? element.to : "-"}</h2>
                                  </>
                              }

                              <div className=' mx-auto h-8 bg-yellow-500'>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      )) : null
                  }
                </div>
              </div>
            </div> */}
              </div>


              <section>
                <div className='w-full px-4 mt-8'>
                  <div className='w-full bg-[#465161] py-4 rounded-md'>

                    <div className=''>
                      <Marquee behavior="scroll" scrollamount="3" className="text-white  text-xs">
                        <ul className='flex items-center space-x-4'>

                          {
                            coinItems && coinItems.length > 0 ?
                              coinItems.map((element, index) => (
                                <React.Fragment key={index}>
                                  <li className='flex items-center space-x-4'>
                                    <img className='text-yellow-400' src={element && element.imageLinkUrl ? element.imageLinkUrl : "-"} width="15" height="15" alt="not found img" />
                                    <h2 className='text-sm text-white'>{element && element.ticker ? element.ticker : "-"}<span className='text-yellow-400'>${element && element.price ? element.price.toFixed(6) : 0}</span></h2>
                                  </li>
                                </React.Fragment>

                              )) : null

                          }
                        </ul>
                      </Marquee>
                    </div>
                  </div>
                </div>
              </section>

              {/* <div>{piItem ? <ReactECharts option={piItem} /> : null}</div> */}
              <div className='w-full px-4 mt-8 grid-col-2'>

                <div>{cmcCoinHistoryItemsG ? <ReactECharts option={cmcCoinHistoryItemsG} /> : null}</div>
              </div>
              {/* <section>
            <div className=' 2xl:flex flex-cols 2xl:space-x-4 px-4 2xl:p-4 space-y-4 2xl:space-y-0 mt-4'>
              <div className='2xl:w-[35rem] w-full flex justify-between bg-[#111827] px-2 rounded-md'></div>
              <div className='w-full gap-4 px-2 py-2 rounded-md space-x-4 bg-[#111827]'>
                <div className='py-2 w-full overflow-hidden'>
                  {optionsMixedChart && seriesMixedChart ? <Chart options={optionsMixedChart} series={seriesMixedChart} type="line" width="100%" height={360} /> : null}
                </div>

              </div>

            </div>
          </section> */}


              <section>
                <div className='p-6'>
                  <div className='w-full flex justify-center py-6 '>
                    <h2 className='text-2xl text-center text-white'>Last 5 Login Details</h2>
                  </div>
                  <div className='bg-slate-900 p-6'>
                    <div className="overflow-hidden">
                      <div className="overflow-auto max-w-full ">
                        <div className="inline-block min-w-full  ">
                          <div className="overflow-hidden  ">
                            <table className="min-w-full border border-black  text-center">
                              <thead className="border border-black">
                                <tr className="border border-black text-center">
                                  <th scope="col" className="whitespace-nowrap border border-white text-center px-6 py-1 text-xs font-semibold text-white uppercase">Date and Time</th>
                                  <th scope="col" className="whitespace-nowrap border border-white text-center px-6 py-1 text-xs font-semibold text-white capitalize">Login IP Address</th>
                                  {/* <th scope="col" className="whitespace-nowrap border border-white text-center px-6 py-1 text-xs font-semibold text-white capitalize">MAC Address</th> */}
                                </tr>
                              </thead>
                              <tbody>

                                {
                                  loginHistoryItems && loginHistoryItems.length > 0 ?
                                    loginHistoryItems.map((element, index) => (
                                      <React.Fragment key={index}>
                                        <tr>
                                          <td className="px-6 py-1 whitespace-nowrap border border-white text-white text-center text-sm">{moment(new Date(parseInt(element.createdAt))).utcOffset("+05:30")
                                            .format("YYYY-MMM-DD-HH:mm A")}</td>
                                          <td className="px-6 py-1 whitespace-nowrap border border-white text-white text-center text-xs">{element && element.ipAddress ? element.ipAddress : "-"}</td>
                                          {/* <td className="px-6 py-1 whitespace-nowrap border border-white text-white text-center text-xs">AA:00:3A:12:ANBP</td> */}
                                        </tr>
                                      </React.Fragment>

                                    )) : null
                                }

                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

            </main>

        }





      </>
    );
  }

}

function mapStateToProps(state) {
  const { users, dashboard } = state;
  const { overview } = users ? users : {};
  const { setting, user, wallet } = overview ? overview : {};
  // console.log("mapStateToProps______________dashboard::", dashboard);
  return {
    users,
    setting,
    user,
    dashboard,
    wallet
  };
}
export default connect(mapStateToProps)(Dashboard);