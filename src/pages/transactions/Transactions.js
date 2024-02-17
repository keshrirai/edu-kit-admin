import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
import moment from 'moment';
import "jspdf-autotable";
import ReactPaginate from 'react-paginate';
import { isMobile } from "react-device-detect";
import LoadingOverlay from 'react-loading-overlay';
import './styles.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {MdFilterList} from 'react-icons/md';


class Transaction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      formField: {},
      errorField: {},
      dateDetails: {
        txType: null,
        from: Date.now(),
        to: Date.now(),
      },
    }
  }

  componentDidMount() {

    let data = {
      // "txType": "SEND_RECEIVED",
      "keyWord": "",
      "pageNo": 1,
      "size": 10,

    }

    this.props.dispatch(userActions.getTx(data));
  }

  transactionSearchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      let reqData = {
        "txType": this.state.txType,
        "keyWord": "",
        "pageNo": 1,
        "size": 10,
        "from": this.state.formField.from,
        "to": this.state.formField.to,
      }
      // console.log('this.state.dateDetails******', this.state.reqData);
      this.props.dispatch(userActions.getTx(reqData, this.props));
    }
  }
  inputTypeChange = (e) => {
    e.preventDefault();
    let { value } = e.target;
    let data3 = {
      txType: value === "ALL" ? null : value,
      "keyWord": "",
      "pageNo": 1,
      "size": this.state.size,
      "from": this.state.formField.from,
      "to": this.state.formField.to,
    }
    // console.log("___________data3", data3)
    this.props.dispatch(userActions.getTx(data3));
    if (value === "ALL") {
      this.setState({ txType: null })
    } else {
      this.setState({ txType: value })
    }
  }

  getTx = (e) => {
    e.preventDefault();
    // if (this.handleValidation()) {
    let reqData = {
      "txType": this.state.txType,
      "keyWord": "",
      "pageNo": 1,
      "size": 10,
      "from": (this.state.dateDetails.from),
      "to": (this.state.dateDetails.to),
    }

    // console.log("getTx_______________:", reqData);

    this.props.dispatch(userActions.getTx(reqData, this.props));
    // }
  }


  getDate = (e) => {
    e.preventDefault();
    // console.log("1111111111111111111111")
    let { name, value } = e.target;
    // console.log("222222222222222", name, value)
    let dateDetails = this.state.dateDetails;
    dateDetails[name] = value;
    // console.log(name, value);
    this.setState({ dateDetails });
  }

  inputChange = (event) => {
    // console.log(event.target.name, event.target.value);
    // event.preventDefault();
    const { formField, errorField } = this.state;
    formField[event.target.name] = event.target.value;
    errorField[event.target.name] = "";
    // console.log(event.target.name, event.target.value);
    this.setState({ formField, errorField });
  }



  handlePageClick = (data) => {
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      txType: this.state.txType ? this.state.txType : null,
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size,
    }
    this.props.dispatch(userActions.getTx(datatemp));
  }

  handleValidation = () => {
    // let formField = this.state.formField;
    let errorField = {};
    let formIsValid = true;

    // console.log('errorsIndex_errorsIndex_:::::', errorField);
    this.setState({ errorField: errorField });
    return formIsValid;
  }

  handleFromDate = (event) => {
    // console.log(event.target.name, event.target.value);
    // event.preventDefault();
    const { dateDetails } = this.state;
    dateDetails["from"] = event.target.value;

    this.setState({ dateDetails });
  }
  handleToDateMultiDate = (event) => {
    // console.log("eventevent  ", event);
    event.preventDefault();
    // console.log(" event.target  ", event.target);
    // // console.log(event.target.name, event.target.value);
    // // event.preventDefault();
    // const { dateDetails } = this.state;
    // dateDetails["to"] = event.target.value;

    // this.setState({ dateDetails });
  }

  handleToDate = (event) => {
    // console.log(event.target.name, event.target.value);
    // event.preventDefault();
    const { dateDetails } = this.state;
    dateDetails["to"] = event.target.value;

    this.setState({ dateDetails });
  }
  render() {


    // const selectionRange = {
    //   startDate: new Date(),
    //   endDate: new Date(),
    //   key: 'selection',
    // }


    let { users } = this.props;
    let { txList, loading, txTotal } = users;
    // console.log("RENDER_txTotaltxTotal:::::", txTotal);
    // console.log("RENDER_____________txList__:::::", txList);
    // // console.log("RENDER_formField:::::", this.state.formField);


    return (

      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>

        <div className="p-6 bg-gray-100 space-y-4 ">
        <h1 className='text-xl font-semibold text-black ' >Transaction History</h1> 

          <section>
          
              <div className=' bg-white border rounded p-4 space-y-6'>
             

                <div className='md:flex justify-between items-center md:space-x-4 md:space-y-0 space-y-4 w-full '>

                  <div className="relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-md cursor-pointer appearance-none">
                
                    <label for="frm-whatever" className="sr-only">My field</label>
                    <div className='px-4' >  <MdFilterList className='text-[1.5rem] text-black' /></div>
                    <select className="appearance-none w-full p-2 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                      id="txType"
                      name="txType">
                      <option value="ALL">Please choose&hellip;</option>
                      <option value="SEND">SEND</option>
                      <option value="RECEIVED">RECEIVED</option>
                      <option value="BUY">BUY</option>
                      <option value="REF">REF</option>
                      <option value="RECEIVED_FROM_ADMIN">RECEIVED_FROM_ADMIN</option>
                      <option value="WITHDRAW">WITHDRAW</option>
                      <option value="MINING">MINING</option>
                      <option value="WELCOME">WELCOME</option>
                      <option value="ADMIN_DEPOSIT">ADMIN_DEPOSIT</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {/* <div className="relative  w-full mt-4 border  shadow-lg appearance-none grid-col-2 "></div> */}
                   <div className="flex md:flex-row  items-center space-x-4 ">
                    <div className=" w-full">
                      {/* <label  style={{ color: "#6D6997" }} className="text-gray-400 text-xs font-bold">From Date</label><br/> */}
                      <input
                        onChange={this.inputChange}
                        name="from"
                        value={this.state.formField["from"] ? this.state.formField["from"] : ''}
                        
                        type="date" className="bg-gray-200 cursor-pointer outline-none lg:py-1.5 p-2 md:w-40 w-full	text-black/50 focus:text-black rounded-md " />
                    </div>
                    <span className='text-gray-800 font-semibold' >To</span>
                    <div className="w-full ">
                      {/* <label style={{ color: "#6D6997" }} className="text-white/50 text-xs font-bold">To Date</label><br/> */}
                      <input
                        onChange={this.inputChange}
                        name="to"
                        value={this.state.formField["to"] ? this.state.formField["to"] : ''}
                        // value={this.state.formField.to}
                        type="date" className="bg-gray-200 cursor-pointer outline-none lg:py-1.5 p-2 md:w-40 w-full text-black/50 focus:text-black	rounded-md" />
                    </div>
                  

                    <button onClick={this.transactionSearchSubmit} className="md:flex hidden items-center p-2 px-4 font-medium  text-md font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90">  Search</button>

                    {/* <Calendar
                      ranges={[selectionRange]}
                      // onChange={this.handleSelect}
                    /> */}
                    {/* <DateRangePicker
                      // hoverRange="week"
                      // ranges={[]}
                      onSelect={this.handleToDateMultiDate}
                    /> */}
                    {/* <label for="frm-whatever" className="sr-only">My field</label>
                    <select className="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
                      <option value="">Please choose&hellip;</option>
                      <option value="1">Item 1</option>
                      <option value="2">Item 2</option>
                      <option value="3">Item 3</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div> */}
                  </div> 

                  <button onClick={this.transactionSearchSubmit} className="md:hidden  md:w-auto w-full justify-center flex items-center p-2 px-4 font-medium  text-md font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90">  Search</button>


                  {/* <div className="relative w-full mt-4 border border-gray-300 text-gray-800 bg-white shadow-lg appearance-none">
                    <label for="frm-whatever" className="sr-only text-white">My field</label>
                    <select className="appearance-none w-full py-1 px-2 bg-white text-sm font-normal" name="whatever" id="frm-whatever">
                      <option value="">Please choose&hellip;</option>
                      <option value="1">SEND</option>
                      <option value="2">RECEIVED</option>
                      <option value="2">BUY</option>
                      <option value="3">RECEIVED_FROM_ADMIN</option>
                      <option value="3">WITHDRAW</option>
                      <option value="3">MINING</option>
                      <option value="3">WELCOME</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div> */}

                </div>

                <div className="overflow-hidden pb-2 ">
                  <div className="overflow-auto max-w-full ">
                    <div className="inline-block min-w-full  ">
                      <div className="overflow-hidden  ">

                        <table className="min-w-full text-center divide-y border-b">
                          <thead className="">
                            <tr className="   text-center">
                              <th className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">S.No.</th>
                              {/* <th className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">name</th>
                              <th className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">price</th> */}
                              <th className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">Transaction Type</th>
                              <th className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">amount</th>
                              <th className="whitespace-nowrap px-6 py-2 text-center text-md capitalize font-medium text-gray-600 ">date</th>
                            </tr>
                          </thead>
                          <tbody className='divide-y' >

                            {
                              txList && txList.length > 0 ?
                                txList.map((element, index) => (
                                  
                                    <tr className="hover:bg-[#FF8008]/10 cursor-pointer">
                                      <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{this.state.offset + index + 1}</td>
                                      {/* <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.coinId && element.coinId.name ? element.coinId.name : "-"}</td>
                                      <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.coinId && element.coinId.price ? element.coinId.price : "-"} </td> */}
                                      <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.txType ? element.txType : "-"}</td>
                                      <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{element && element.amount ? element.amount : "-"}</td>
                                      <td className="whitespace-nowrap  text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase ">{moment(new Date(parseInt(element && element.createdAt ? element.createdAt : "-"))).utcOffset("+05:30").format("DD-MM-YYYY HH:mm")}</td>
                                    </tr>
                               
                                )) : null
                            }

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {
                    isMobile ?
                      <nav className="relative z-0 flex justify-center mt-5 w-76">
                        {
                          txTotal && txTotal > 10 ?
                            <ReactPaginate
                              previousLabel={'Prev'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={txTotal / this.state.size}
                              marginPagesDisplayed={0}
                              pageRangeDisplayed={2}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              pageClassName={'page-cls'}
                              activeClassName={'active'}
                            />
                            : null}
                      </nav> : <nav className="relative z-0 flex justify-center mt-5 w-76">
                        {
                          txTotal && txTotal > 10 ?
                            <ReactPaginate
                              previousLabel={'Previous'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={txTotal / this.state.size}
                              marginPagesDisplayed={3}
                              pageRangeDisplayed={3}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              pageClassName={'page-cls'}
                              activeClassName={'active'}
                            />
                            : null}
                      </nav>
                  }
                </div>
              </div>
 
          </section>
        </div>
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    setting
  };
}
export default connect(mapStateToProps)(Transaction);
