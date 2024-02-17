import React, { Component } from 'react';
import { dashboardActions, userActions, alertActions } from '../../_actions';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import { FaCalendarAlt } from 'react-icons/fa'
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

    // this.props.dispatch(dashboardActions.getAppSetting());
    // this.props.dispatch(userActions.getUserDetails(data));
    // this.props.dispatch(userActions.getCmcCoinByTickerName());
    // this.props.dispatch(userActions.getProfileDataPi());
    // this.props.dispatch(userActions.getTx(temp));
    // this.props.dispatch(dashboardActions.getCoinList(dataCmc));
    // this.props.dispatch(dashboardActions.getCmcHistoryDftcList(dataCmc));
    // this.props.dispatch(dashboardActions.getLoginhistory(data2));
    // this.props.dispatch(dashboardActions.getTxAllMultiTeam(mining));
    // this.props.dispatch(dashboardActions.getAllCoinCard());
    // this.props.dispatch(dashboardActions.getMiningPftShareList(data));
    // this.props.dispatch(dashboardActions.getWelcomeBonusList(data));
    // this.props.dispatch(dashboardActions.getLTArchiveRewardList(data));
    // this.props.dispatch(dashboardActions.getFastrackBonusList(data));
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

        <main className="flex-1 bg-gray-100 z-0 overflow-y-auto focus:outline-none p-6 "  >
          <div className='w-full space-y-6'>

            <h1 className='text-xl font-semibold text-black'>Dashboard</h1>
            <div className='w-full space-y-6 '>
              <div className='space-y-5'>

                <div className="w-full  ">
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                                
                      <div className='bg-white border border-gray-200 rounded-md lg:px-10 px-6 lg:py-10 py-6'>
                        <div className='flex justify-between'>
                          <div className='text-start'>
                            <img src="/imge/graduated.png" className='h-12 w-12' alt='students' />
                          </div>
                          <div className='text-center font-medium'>
                            <h1 className='uppercase text-lg'>Total Student</h1>
                            <h1 className='text-2xl'>85</h1>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white border border-gray-200 rounded-md lg:px-10 px-6 lg:py-10 py-6'>
                        <div className='flex justify-between'>
                          <div className='text-start'>
                            <img src="/imge/graduated.png" className='h-12 w-12' alt='students' />
                          </div>
                          <div className='text-center font-medium'>
                            <h1 className='uppercase text-lg'>Total Employee</h1>
                            <h1 className='text-2xl'>85</h1>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white border border-gray-200 rounded-md lg:px-10 px-6 lg:py-10 py-6'>
                        <div className='flex justify-between'>
                          <div className='text-start'>
                            <img src="/imge/graduated.png" className='h-12 w-12' alt='students' />
                          </div>
                          <div className='text-center font-medium'>
                            <h1 className='uppercase text-lg'>Total Course</h1>
                            <h1 className='text-2xl'>85</h1>
                          </div>
                        </div>
                      </div>
                      <div className='bg-white border border-gray-200 rounded-md lg:px-10 px-6 lg:py-10 py-6'>
                        <div className='flex justify-between'>
                          <div className='text-start'>
                            <img src="/imge/graduated.png" className='h-12 w-12' alt='students' />
                          </div>
                          <div className='text-center font-medium'>
                            <h1 className='uppercase text-lg'>Total Batch</h1>
                            <h1 className='text-2xl'>85</h1>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>

                <div className='lg:flex lg:space-x-5 space-y-5 lg:space-y-0 w-full'>
                  <div className='w-full bg-white border rounded-md  p-4'>
                    <h3 className="text-xl text-black font-medium">Graph </h3>
                    <div>
                      <img src="/imge/graph2.png" className='h-full w-full' alt='graph' />
                    </div>
                  </div>
                  <div className='w-full space-y-5'>
                    <div className='w-full rounded-md bg-white border-2 border-gray-200'>
                      <div className='bg-purple-700 py-3 rounded-t-md'>
                        <h1 className='uppercase text-white text-center text-sm'>News Feeds</h1>
                      </div>
                      <div className='overflow-y-auto'>
                        <table>
                          <tr>
                            <td>
                              <div className='h-10 w-10 rounded-full'>
                                <img src="/imge/user.png" className='h-10 w-10' alt='students' />
                              </div>
                            </td>
                            <td><h1 className='uppercase text-sky-500 text-sm'>Republic Day</h1>
                              <p className='text-sm text-black'>allalslldlalj</p></td>
                            <td>
                              <div className='flex'>
                                <FaCalendarAlt className='text-black' />
                                <h1 className='text-black text-sm'>14-05-2022</h1>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='h-10 w-10 rounded-full'>
                                <img src="/imge/user.png" className='h-10 w-10' alt='students' />
                              </div>
                            </td>
                            <td><h1 className='uppercase text-sky-500 text-sm'>Republic Day</h1>
                              <p className='text-sm text-black'>allalslldlalj</p></td>
                            <td>
                              <div className='flex'>
                                <FaCalendarAlt className='text-black' />
                                <h1 className='text-black text-sm'>14-05-2022</h1>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='h-10 w-10 rounded-full'>
                                <img src="/imge/user.png" className='h-10 w-10' alt='students' />
                              </div>
                            </td>
                            <td><h1 className='uppercase text-sky-500 text-sm'>Republic Day</h1>
                              <p className='text-sm text-black'>allalslldlalj</p></td>
                            <td>
                              <div className='flex'>
                                <FaCalendarAlt className='text-black' />
                                <h1 className='text-black text-sm'>14-05-2022</h1>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='h-10 w-10 rounded-full'>
                                <img src="/imge/user.png" className='h-10 w-10' alt='students' />
                              </div>
                            </td>
                            <td><h1 className='uppercase text-sky-500 text-sm'>Republic Day</h1>
                              <p className='text-sm text-black'>allalslldlalj</p></td>
                            <td>
                              <div className='flex'>
                                <FaCalendarAlt className='text-black' />
                                <h1 className='text-black text-sm'>14-05-2022</h1>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='h-10 w-10 rounded-full'>
                                <img src="/imge/user.png" className='h-10 w-10' alt='students' />
                              </div>
                            </td>
                            <td><h1 className='uppercase text-sky-500 text-sm'>Republic Day</h1>
                              <p className='text-sm text-black'>allalslldlalj</p></td>
                            <td>
                              <div className='flex'>
                                <FaCalendarAlt className='text-black' />
                                <h1 className='text-black text-sm'>14-05-2022</h1>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div className='w-full rounded-md bg-white px-4 border-2 border-gray-200'>
                      <div className='w-full border-b-2 border-gray-300 py-5'><h1 className='text-sm text-center'>Birthday Notification</h1></div>
                      <div className='flex justify-between p-5'>
                        <div className='flex w-full items-center'>
                          <div className='items-center'>
                            <img src="/imge/graduating-student.png" className='h-10 w-10 ml-2' alt='graduating-student' />
                            <h1 className='text-sm font-bold leading-normal text-center'>0</h1>
                            <h1 className='text-sm leading-normal'>Students</h1>
                          </div>
                          <div className='px-4 flex justify-center items-center w-full'>
                            <img src="/imge/cake.png" className='h-10 w-10' alt='cake' />
                          </div>
                        </div>
                        <div className='flex items-end'>
                          <div>
                            <img src="/imge/employee.png" className='h-10 w-10 ml-3' alt='employee' />
                            <h1 className='text-sm font-bold leading-normal text-center'>0</h1>
                            <h1 className='text-sm leading-normal'>Employees</h1>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className='py-6 space-y-6'>
              <h2 className='text-xl text-left text-black font-medium'>Last 5 Login Details</h2>

              <div className='bg-white border rounded-md  md:p-6 '>
                <div className="overflow-hidden">
                  <div className="overflow-auto max-w-full ">
                    <div className="inline-block min-w-full  ">
                      <div className="overflow-hidden  ">
                        <table className="min-w-full  divide-y  border-b text-center">
                          <thead className=" ">
                            <tr className=" text-center">
                              <th scope="col" className="whitespace-nowrap  text-center md:px-6 px-4  py-3 md:text-lg text-sm font-semibold text-gray-500  ">Date and Time</th>
                              <th scope="col" className="whitespace-nowrap  text-center md:px-6 px-4  py-3 md:text-lg text-sm font-semibold text-gray-500  ">Login IP Address</th>
                              {/* <th scope="col" className="whitespace-nowrap border border-white text-center px-6 py-1 text-xs font-semibold text-black/80 capitalize">MAC Address</th> */}
                            </tr>
                          </thead>
                          <tbody className='divide-y' >

                            {
                              loginHistoryItems && loginHistoryItems.length > 0 ?
                                loginHistoryItems.map((element, index) => (
                                  <React.Fragment key={index}>
                                    <tr className="hover:bg-[#FF8008]/10 cursor-pointer" >
                                      <td className="md:px-6 px-4 p-2 whitespace-nowrap  text-black text-center md:text-base text-sm">{moment(new Date(parseInt(element.createdAt))).utcOffset("+05:30")
                                        .format("YYYY-MMM-DD-HH:mm A")}</td>
                                      <td className="md:px-6 px-4 p-2 whitespace-nowrap  text-black text-center md:text-base text-sm">{element && element.ipAddress ? element.ipAddress : "-"}</td>
                                      {/* <td className="px-6 py-1 whitespace-nowrap border border-white text-black/80 text-center text-xs">AA:00:3A:12:ANBP</td> */}
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