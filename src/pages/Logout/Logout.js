import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LoadingOverlay from 'react-loading-overlay';
import ReactPaginate from 'react-paginate';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { isMobile } from "react-device-detect";
import { CSVLink } from "react-csv";

class Logout extends Component {
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
    if (!fieldsticket["title"]) {
      formIsValid = false;
      errorsticket["title"] = "Please enter Title!";
    }
    //msg
    if (!fieldsticket["msg"]) {
      formIsValid = false;
      errorsticket["msg"] = "Please select Message!";
    }

    //email
    if (!fieldsticket["email"]) {
      formIsValid = false;
      errorsticket["email"] = "Please enter Email!";
    }

    //mobNo
    if (!fieldsticket["mobNo"]) {
      formIsValid = false;
      errorsticket["mobNo"] = "Please enter Mobile No.!";
    }
    //comment
    if (!fieldsticket["comment"]) {
      formIsValid = false;
      errorsticket["comment"] = "Please enter Comment!";
    }

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

    const headers = [
      { label: "Id", key: "id" },
      { label: "Amount", key: "amount" },
      { label: "Date", key: "date" },
      { label: "Transaction Type", key: "txType" },
      { label: "Coin", key: "coin" },

    ];
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
        <main className=" bg-slate-700 flex-1 relative z-0 overflow-y-auto focus:outline-none" tabIndex={0}>
          <div className=" relative" id="wave">

            <div className="2xl:p-10 p-5">
              <div className="max-w-screen-3xl mx-auto">
                {/* Wallet Section */}
                <section className="grid grid-cols-12 gap-5">
                  <div className="bg-dark 2xl:col-span-4 xl:col-span-5 lg:col-span-6 col-span-12 2xl:py-7 py-5 2xl:px-10 px-5 flex-col rounded-md">
                    <h3 className="pb-2 md:text-2xl text-lg leading-9 font-semibold uppercase text-white text-opacity-70 tracking-widest">Create Ticket</h3>
                    <p className="pb-2 md:text-md  leading-9 font-semibold text-white text-opacity-70 racking-widest">Refer friends and earn MAAEXCH Coin</p>

                    <form autoComplete="off" className="space-y-8 mt-2">

                      <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <div className=" rounded-md shadow-sm relative">
                          <label className="block w-full text-gray-500 mb-1 pl-4">Title</label>
                          <input className={`text-input-ks bg-slate-700 ${!this.state.errorsticket["title"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="title"
                            value={this.state.fieldsticket["title"] ? this.state.fieldsticket["title"] : ''}
                            onChange={this.inputChange} placeholder="Title" type="text" />
                          {this.state.errorsticket["title"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsticket["title"]}
                            </div>
                            : null}
                        </div>
                      </div>

                      <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <div className=" rounded-md shadow-sm relative">
                          <label className="block w-full text-gray-500 mb-1 pl-4">Comment</label>
                          <input className={`text-input-ks bg-slate-700 ${!this.state.errorsticket["comment"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="comment"
                            value={this.state.fieldsticket["comment"] ? this.state.fieldsticket["comment"] : ''}
                            onChange={this.inputChange} placeholder="Comment" type="amount" />
                          {this.state.errorsticket["comment"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsticket["comment"]}
                            </div>
                            : null}
                        </div>
                      </div>

                      <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <div className=" rounded-md shadow-sm relative">
                          <label className="block w-full text-gray-500 mb-1 pl-4">Email</label>
                          <input className={`text-input-ks bg-slate-700 ${!this.state.errorsticket["email"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="email"
                            value={this.state.fieldsticket["email"] ? this.state.fieldsticket["email"] : ''}
                            onChange={this.inputChange} placeholder="Email" type="amount" />
                          {this.state.errorsticket["email"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsticket["email"]}
                            </div>
                            : null}
                        </div>
                      </div>

                      <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <div className=" rounded-md shadow-sm relative">
                          <label className="block w-full text-gray-500 mb-1 pl-4">Mobile No.</label>
                          <input className={`text-input-ks bg-slate-700 ${!this.state.errorsticket["mobNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="mobNo"
                            value={this.state.fieldsticket["mobNo"] ? this.state.fieldsticket["mobNo"] : ''}
                            onChange={this.inputChange} placeholder="Mobile No." type="amount" />
                          {this.state.errorsticket["mobNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsticket["mobNo"]}
                            </div>
                            : null}
                        </div>
                      </div>

                      <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <div className=" rounded-md shadow-sm relative">
                          <label className="block w-full text-gray-500 mb-1 pl-4">Message</label>
                          <textarea className={`text-input-ks bg-slate-700 ${!this.state.errorsticket["msg"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="msg"
                            value={this.state.fieldsticket["msg"] ? this.state.fieldsticket["msg"] : ''}
                            onChange={this.inputChange} placeholder="Message" type="amount" />
                          {this.state.errorsticket["msg"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsticket["msg"]}
                            </div>
                            : null}
                        </div>
                      </div>
                      <div className=" grid lg:grid-cols-1 grid-cols-1 gap-6">
                        <span className="block w-full rounded-md shadow-sm">
                          <button className="w-full mx-auto  flex justify-center py-2 uppercase px-3 border border-transparent text-xl font-meduim rounded-md text-white  bg-blue-400 hover:from-shine-400 hover:to-shine focus:outline-none transition duration-150 ease-in-out" type="button" onClick={this.ticketSubmit} data-config-id="01_primary-action">Success</button>
                        </span>
                      </div>
                    </form>
                  </div>

                  <div className="bg-dark 2xl:col-span-8 xl:col-span-7 lg:col-span-6 col-span-12 2xl:py-7 py-5 2xl:px-10 px-5 flex-col rounded-md ">
                    <div className="w-full flex flex-wrap  ">
                      <div className="w-full flex justify-between">
                        <h3 className="pb-4 md:text-2xl text-lg leading-6 md:leading-9 text-center font-semibold uppercase text-white text-opacity-70 tracking-widest">Ticket History</h3>
                        <div className="flex flex-wrap md:flex-nowrap space-x-3">
                          <button onClick={() => this.exportPDF()} className="cursor-pointer bg-slate-800 rounded-md text-sm py-1 px-3 sm:px-5 text-white hover:bg-shine-400 focus:outline-none">PDF</button>
                          <CSVLink className="cursor-pointer bg-slate-800 rounded-md text-sm py-1 px-3 sm:px-5 pt-2 text-white hover:bg-shine-400" data={ticketList ? ticketList : []} headers={headers}>Excel</CSVLink>
                        </div>
                      </div>
                    </div>
                    <div className=" rounded-lg overflow-hidden pb-2 mt-4 shadow-md">
                      <div className="overflow-x-auto max-w-full ">
                        <div className="inline-block min-w-full  ">
                          <div className="overflow-x-auto">

                            <table className="min-w-full divide-y divide-gray-800 border-0 ">
                              <thead className=" bg-slate-800 rounded-t">
                                <tr className=" ">
                                  <th scope="col" className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                  <th scope="col" className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                  <th scope="col" className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                                  <th scope="col" className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                  <th scope="col" className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No.</th>
                                  <th scope="col" className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                </tr>
                              </thead>

                              <tbody>
                                {
                                  ticketList && ticketList.length > 0 ?
                                    ticketList.map((element, index) => (<React.Fragment key={element.id}>
                                      <tr className="bg-white bg-opacity-5 " key={element.id}>
                                        <td className="px-6 py-3 whitespace-nowrap font-medium text-sm text-gray-600">{this.state.offset + index + 1}</td>
                                        <td className="px-6 py-3 whitespace-nowrap font-medium text-sm text-gray-600">{element.title}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{element.comment}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{element.email}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{element.mobNo}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">{element.msg}</td>
                                      </tr>
                                    </React.Fragment>))
                                    : (<tr className="bg-white bg-opacity-5 " >
                                      <td className="col-span-3 px-6 py-3 whitespace-nowrap font-medium text-sm text-gray-500">Not found</td>
                                    </tr>)
                                }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {
                        isMobile ?
                          <nav className="relative z-0 flex justify-end mt-5 w-76">
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
                          </nav> : <nav className="relative z-0 flex justify-end mt-5 w-76">
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
            </div>
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
export default connect(mapStateToProps)(Logout
);
