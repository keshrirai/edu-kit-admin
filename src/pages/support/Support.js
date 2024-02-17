import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import ReactPaginate from 'react-paginate';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { isMobile } from "react-device-detect";
import {MdOutlineDownload} from "react-icons/md"
import {FiEdit} from "react-icons/fi";
// import { CSVLink } from "react-csv";
// import Header from '../../components/Header/Header';

class Support extends Component {
  constructor(props) {
    super(props);
    this.ticketSubmit = this.ticketSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      page: 1,
      errorsticket: {},
      fieldsticket: {},
      people: [
        { name: "Keanu Reeves", profession: "Actor" },
        { name: "Lionel Messi", profession: "Football Player" },
        { name: "Cristiano Ronaldo", profession: "Football Player" },
        { name: "Jack Nicklaus", profession: "Golf Player" },
      ]
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.users.isTicketCreated) {
      return {
        ...nextProps,
        fieldsticket: {},
        errorsticket: {},
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
    let fieldsticket = this.state.fieldsticket;
    let errorsticket = this.state.errorsticket;
    fieldsticket[name] = value;
    errorsticket[name] = "";
    this.setState({ fieldsticket, errorsticket });
  }

  ticketSubmit(e) {
    e.preventDefault();
    if (this.handleValidationTicket()) {
      let { title, msg, email, mobNo, comment } = this.state;
      this.props.dispatch(userActions.createTicket({
        title: title,
        msg: msg,
        email: email,
        mobNo: mobNo,
        comment: comment,
      }, this.props));
    }
  }


  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsticket: {},
      errorsticket: {},
    })
    this.hideErrorcomment();
  }

  handleValidationTicket = () => {
    let fieldsticket = this.state.fieldsticket;
    let errorsticket = {};
    let formIsValid = true;

    //title
    // if (!fieldsticket["title"]) {
    //   formIsValid = false;
    //   errorsticket["title"] = "Please enter Title!";
    // }

    //title
    if (!fieldsticket["title"].match(`^(?![\\s.]+$)[a-zA-Z\\s.]*$`)) {
      formIsValid = false;
      errorsticket["title"] = "Please enter Title!";
    }

    //msg
    // if (!fieldsticket["msg"]) {
    //   formIsValid = false;
    //   errorsticket["msg"] = "Please select Message!";
    // }

    //msg
    if (!fieldsticket["msg"].match("^(?![\\s.]+$)[a-zA-Z\\s.]*$")) {
      formIsValid = false;
      errorsticket["msg"] = "Please select Message!";
    }

    //email
    if (!fieldsticket["email"]) {
      formIsValid = false;
      errorsticket["email"] = "Please enter Email!";
    }
    if (typeof fieldsticket["email"] !== "undefined" && fieldsticket["email"] !== "") {
      let lastAtPos = fieldsticket["email"].lastIndexOf('@');
      let lastDotPos = fieldsticket["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldsticket["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldsticket["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorsticket["email"] = "Enter valid email!";
      }
    }

    // if (typeof fieldsticket["mobNo"] !== "undefined") {
    //   var pattern = new RegExp(/^[0-9\b]+$/);
    //   if (!pattern.test(fieldsticket["mobNo"])) {
    //     formIsValid = false;
    //     errorsticket["mobNo"] = "Please enter only number.";
    //   } else if (fieldsticket["mobNo"].length != 10) {
    //     formIsValid = false;
    //     errorsticket["mobNo"] = "Please enter valid mobNo number.";
    //   }
    // }

    //mobNo
    // if (!fieldsticket["mobNo"]) {
    //   formIsValid = false;
    //   errorsticket["mobNo"] = "Please enter WhatsApp Number!";
    // }

    //mobNo
    // if (!fieldsticket["mobNo"]) {
    //   formIsValid = false;
    //   errorsticket["mobNo"] = "Please enter your mobNo number.";
    // }

    // if (typeof fieldsticket["mobNo"] !== "undefined") {
    //   var pattern = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    //   if (!pattern.test(fieldsticket["mobNo"])) {
    //     formIsValid = false;
    //     errorsticket["mobNo"] = "Please enter only number.";
    //   } else if (fieldsticket["mobNo"].length != 10) {
    //     formIsValid = false;
    //     errorsticket["mobNo"] = "Please enter valid mobNo number.";
    //   }
    // }


    //mobNo
    if (!fieldsticket["mobNo"].match("^[0-9]{10}$")) {
      formIsValid = false;
      errorsticket["mobNo"] = "Please provide valid phone number!";
    }





    //comment

    // if (!fieldsticket["comment"]) {
    //   formIsValid = false;
    //   errorsticket["comment"] = "Please enter Comment!";
    // }

    //comment

    if (!fieldsticket["comment"].match("^(?![\\s.]+$)[a-zA-Z\\s.]*$")) {
      formIsValid = false;
      errorsticket["comment"] = "Please enter Comment!";
    }

    // console.log("errorsticket_errorsticket_errorsticket", errorsticket);

    this.setState({ errorsticket: errorsticket });
    return formIsValid;
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  componentDidMount() {
    let temp = {
      "keyWord": "",
      "pageNo": this.state.pageNo,
      "size": this.state.size
    }
    this.props.dispatch(userActions.getTicketList(temp));
    // this.props.dispatch(userActions.getUserDetails());
    // this.props.dispatch(userActions.getTx(temp));
    window.scrollTo(0, 0)
  }



  inputChangeAmount = (event) => {
    event.preventDefault();
    let { users } = this.props;
    let { overview } = users;
    let { setting } = overview;
    let { txFee } = setting;
    if (event.target.value >= 0) {
      const { fieldslogin, errorslogin } = this.state;
      fieldslogin[event.target.name] = event.target.value;
      fieldslogin['amount'] = event.target.value;
      fieldslogin['fees'] = txFee;
      fieldslogin['recievingAmount'] = parseFloat(event.target.value - txFee).toFixed(8);
      errorslogin['amount'] = "";
      this.setState({ fieldslogin, errorslogin });
    } else {
      const { errorslogin } = this.state;
      errorslogin['amount'] = "Amount should be positive number.";
      this.setState({ errorslogin });
    }
  }

  handlePageChange = (offset, page) => {
  }

  handlePageClick = (data) => {
    let offset = Math.ceil(data.selected * this.state.size);
    this.setState({ offset: offset, page: data.selected });
    let datatemp = {
      "keyWord": this.state.keyWord,
      "pageNo": data.selected + 1,
      "size": this.state.size
    }
    this.props.dispatch(userActions.getTicketList(datatemp));
  }
  exportPDF = () => {
    let { users } = this.props;

    let { ticketList } = users;
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Ticket Report";
    const headers = [["TITLE", "email", "MOBILE", "MESSAGE", "COMMENT"]];
    const data = ticketList.map(elt => [elt.title, elt.email, elt.mobNo, elt.msg, elt.comment]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save(Date.now() + "_ticket_report.pdf")
  }

  render() {

    // const headers = [
    //   { label: "Id", key: "id" },
    //   { label: "Amount", key: "amount" },
    //   { label: "Date", key: "date" },
    //   { label: "Transaction Type", key: "txType" },
    //   { label: "Coin", key: "coin" },

    // ];
    let { users } = this.props;
    let { ticketList, loading, ticketTotal } = users;
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


        {/* Main Content */}
        <main className="bg-gray-100 flex-1 relative z-0 overflow-y-auto p-6" tabIndex={0}>


          <div className="space-y-4">
            <h1 className='text-xl font-semibold text-black ' >Support and Tickets</h1> 

            <section className="grid xl:grid-cols-3 grid-cols-1 gap-6">

              <div className="bg-white border rounded p-4 py-6">
                <h3 className="text-xl text-black font-medium">Create Ticket</h3>

                <form autoComplete="off" className=" mt-4 grid xl:grid-cols-1  md:grid-cols-2 grid-cols-1 w-full gap-4">

                  <div className="w-full">
                    <div className="rounded-md  flex flex-col space-y-1">
                      <label className=" text-sm  text-gray-600 font-medium">Enter Title</label>
                      <input className={`bg-white border p-2 px-4 focus:outline-none  rounded-md placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorsticket["title"] ? "'border-opacity-20 " : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                        name="title"
                        value={this.state.fieldsticket["title"] ? this.state.fieldsticket["title"] : ''}
                        onChange={this.inputChange} placeholder="Title" type="text" />
                      {this.state.errorsticket["title"] ?
                         <div className="invalid-feedback text-red-500 mt-1">
                          {this.state.errorsticket["title"]}
                        </div>
                        : null}
                    </div>
                  </div>

                  <div className="w-full ">
                    <div className=" rounded-md  flex flex-col space-y-1">
                      <label className=" text-sm  text-gray-600 font-medium">Comment</label>
                      {/* <label className="block w-full text-gray-500 mb-1 pl-4">Comment</label> */}
                      <input className={`bg-white border p-2 px-4 focus:outline-none  rounded-md placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorsticket["comment"] ? "'border-opacity-20 " : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                        name="comment"
                        value={this.state.fieldsticket["comment"] ? this.state.fieldsticket["comment"] : ''}
                        onChange={this.inputChange} placeholder="Comment" type="amount" />
                      {this.state.errorsticket["comment"] ?
                         <div className="invalid-feedback text-red-500 mt-1">
                          {this.state.errorsticket["comment"]}
                        </div>
                        : null}
                    </div>
                  </div>

                  <div className=" ">
                    <div className=" rounded-md  relative flex flex-col space-y-1">

                      <label className=" text-sm  text-gray-600 font-medium">Email</label>
                      <input className={`bg-white border p-2 px-4 focus:outline-none  rounded-md placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorsticket["email"] ? "'border-opacity-20 " : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                        name="email"
                        value={this.state.fieldsticket["email"] ? this.state.fieldsticket["email"] : ''}
                        onChange={this.inputChange} placeholder="Email" type="email" />
                      {this.state.errorsticket["email"] ?
                         <div className="invalid-feedback text-red-500 mt-1">
                          {this.state.errorsticket["email"]}
                        </div>
                        : null}
                    </div>
                  </div>

                  <div className=" ">
                    <div className=" rounded-md  relative flex flex-col space-y-1">
                      {/* <label className="block w-full text-gray-500 mb-1 pl-4">Mobile No.</label> */}
                      <label className=" text-sm  text-gray-600 font-medium">WhatsApp Number</label>
                      <input className={`bg-white border p-2 px-4 focus:outline-none  rounded-md placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorsticket["mobNo"] ? "'border-opacity-20 " : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                        name="mobNo" type="number"
                        value={this.state.fieldsticket["mobNo"] ? this.state.fieldsticket["mobNo"] : ''}
                        onChange={this.inputChange} placeholder="WhatsApp Number" />
                      {this.state.errorsticket["mobNo"] ?
                         <div className="invalid-feedback text-red-500 mt-1">
                          {this.state.errorsticket["mobNo"]}
                        </div>
                        : null}
                    </div>
                  </div>

                  <div className="xl:col-span-1 md:col-span-2 col-span-1">
                    <div className=" rounded-md  relative flex flex-col space-y-1">
                      {/* <label className="block w-full text-gray-500 mb-1 pl-4">Message</label> */}
                      <label className=" text-sm  text-gray-600 font-medium">Message</label>
                      <textarea cols="10" rows="6" className={`bg-white border p-2 px-4 focus:outline-none  rounded-md placeholder:font-normal font-medium text-black placeholder-gray-500 ${!this.state.errorsticket["msg"] ? "'border-opacity-20 " : "border-opacity-100 border-none ring-2 ring-red-300"}`}
                        name="msg"
                        value={this.state.fieldsticket["msg"] ? this.state.fieldsticket["msg"] : ''}
                        onChange={this.inputChange} placeholder="Message" type="amount" />
                      {this.state.errorsticket["msg"] ?
                      <div className="invalid-feedback text-red-500 mt-1">
                          {this.state.errorsticket["msg"]}
                        </div>
                        : null}
                    </div>
                  </div>


                  <div className="xl:col-span-1 md:col-span-2 col-span-1   pt-4">
                    <span className="block w-full rounded-md ">
                      <button className=" w-full mx-auto flex justify-center p-2 font-medium  text-base font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90" type="button" onClick={this.ticketSubmit} data-config-id="01_primary-action">Create Ticket</button>
                    </span>
                  </div>

                </form>
              </div>


              <div className="bg-white border rounded xl:col-span-2 p-4 py-6">
                <div className="w-full flex justify-between   ">
                <h3 className="text-xl text-black font-medium">Tickets History</h3>
                  <button onClick={() => this.exportPDF()} className="flex items-center p-2 px-4 font-medium  text-md font-meduim rounded-md text-white bg-[#FF8008] focus:outline-none transition duration-150 ease-in-out hover:bg-opacity-90"><MdOutlineDownload className='text-[1.3rem] mr-1' /> PDF</button>
                </div>
                <div className=" rounded-lg overflow-hidden pb-2 mt-4 ">
                  <div className="overflow-x-auto max-w-full ">
                    <div className="inline-block min-w-full  ">
                      <div className="overflow-x-auto">

                        <table className="min-w-full divide-y  border-b ">
                          <thead className=" ">
                            <tr className=" ">
                              <th scope="col" className="whitespace-nowrap px-6 py-2 text-left text-sm font-medium text-gray-600 ">S.n</th>
                              <th scope="col" className="whitespace-nowrap px-6 py-2 text-left text-sm font-medium text-gray-600 ">Title</th>
                              {/* <th scope="col" className="whitespace-nowrap px-6 py-2 text-left text-sm font-medium text-gray-600 ">Comment</th> */}
                              <th scope="col" className="whitespace-nowrap px-6 py-2 text-left text-sm font-medium text-gray-600 ">Email</th>
                              <th scope="col" className="whitespace-nowrap px-6 py-2 text-left text-sm font-medium text-gray-600 ">WhatsApp Number</th>
                              {/* <th scope="col" className="whitespace-nowrap px-6 py-2 text-left text-sm font-medium text-gray-600 ">Message</th> */}
                              <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-sm font-medium text-gray-600 ">Status</th>
                              <th scope="col" className="whitespace-nowrap px-6 py-2 text-center text-sm font-medium text-gray-600 ">Action</th>
                            </tr>
                          </thead>

                          <tbody className='divide-y' >
                            {
                              ticketList && ticketList.length > 0 ?
                                ticketList.map((element, index) => (<React.Fragment key={element.id}>
                                  <tr className="hover:bg-[#FF8008]/10 cursor-pointer" key={element.id}>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-black font-medium">{this.state.offset + index + 1}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-black font-medium">{element.title}</td>
                                    {/* <td className="px-6 py-3 whitespace-nowrap text-sm text-black font-medium">{element.comment}</td> */}
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-black font-medium">{element.email}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-sm text-black font-medium">+91 {element.mobNo}</td>
                                    {/* <td className="px-6 py-3 whitespace-nowrap text-sm text-black font-medium">{element.msg}</td> */}
                                    <td className="px-6 py-3    flex justify-center items-center">
                                    <div className='text-xs font-medium bg-red-500/10 px-3 text-red-500 py-1 rounded-full' >{element.reply ? element.reply : "Pending"}</div>
                                    </td>
                                    <td className="px-6 py-3 ">
                                  <div className='flex justify-center items-center' >
                                  <FiEdit className='text-gray-500 text-[1.1rem]' /> 
                                  </div>
                                    </td>
                                  </tr>
                                </React.Fragment>))
                                : (
                                  <tr>
                                    <td colspan="6" className="text-center">No Record Found</td>
                                  </tr>)
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {
                    isMobile ?
                      <nav className="relative  z-0 flex justify-center mt-5 w-76">
                        {
                          ticketTotal && ticketTotal > 10 ?
                            <ReactPaginate
                              previousLabel={'Prev'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={ticketTotal / this.state.size}
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
                          ticketTotal && ticketTotal > 10 ?
                            <ReactPaginate
                              previousLabel={'Previous'}
                              nextLabel={'Next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={ticketTotal / this.state.size}
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

        </main>


      </>
    );
  }
}
function mapStateToProps(state) {
  const { users, authentication } = state;
  return {
    users,
    authentication
  };
}
export default connect(mapStateToProps)(Support);
