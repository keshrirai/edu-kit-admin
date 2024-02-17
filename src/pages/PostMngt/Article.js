import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
// import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Article extends Component {

  constructor(props) {
    super(props);
    this.batchSubmit = this.batchSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsBatch: {},
      errorBatch: {},
      fieldsBatchUpdate: {},
      errorBatchUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getAllStudent(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsBatchUpdate: {},
        errorBatchUpdate: {},
        updateShow: false
      }
    } else {
      return {
        ...nextProps
      }
    }
  }

  inputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsBatch = this.state.fieldsBatch;
    let errorsBatch = this.state.errorsBatch;
    fieldsBatch[name] = value;
    errorsBatch[name] = "";
    console.log(name, value);
    this.setState({ fieldsBatch, errorsBatch });
  }

  // inputChangeUpdate = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let fieldsBatchUpdate = this.state.fieldsBatchUpdate;
  //   let errorBatchUpdate = this.state.errorBatchUpdate;
  //   fieldsBatchUpdate[name] = value;
  //   errorBatchUpdate[name] = "";
  //   console.log(name, value);
  //   this.setState({ fieldsBatchUpdate, errorBatchUpdate });
  // }

  batchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { studentId, courseId, batchId, sessionYear, amount } = this.state.fieldsBatch;
      this.props.dispatch(dashboardActions.acceptFee({
        studentId: studentId,
        courseId: courseId,
        batchId: batchId,
        sessionYear: sessionYear,
        amount: amount,
      }, this.props));
    }
  }

  // batchUpdateSubmit = (e) => {
  //   e.preventDefault();
  //   if (this.handleValidationUpdateBatch()) {
  //     let { studentId, courseId, batchId, sessionYear, amount, id } = this.state.fieldsBatchUpdate;
  //     this.props.dispatch(dashboardActions.updateBatch({
  //       id: id,
  //       studentId: studentId,
  //       courseId: courseId,
  //       batchId: batchId,
  //       sessionYear: sessionYear,
  //       amount: amount,
  //     }, this.props));
  //   }
  // }
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsBatch: {},
      errorsBatch: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsBatch = this.state.fieldsBatch;
    let errorsBatch = {};
    let formIsValid = true;

    //subject
    if (!fieldsBatch["courseId"]) {
      formIsValid = false;
      errorsBatch["courseId"] = "Please enter Batch Name!";
    }
    //batchId
    if (!fieldsBatch["batchId"]) {
      formIsValid = false;
      errorsBatch["batchId"] = "Please select batchId!";
    }
    //sessionYear
    if (!fieldsBatch["sessionYear"]) {
      formIsValid = false;
      errorsBatch["sessionYear"] = "Please select sessionYear!";
    }
    //amount
    if (!fieldsBatch["amount"]) {
      formIsValid = false;
      errorsBatch["amount"] = "Please enter amount!";
    }
    this.setState({ errorsBatch: errorsBatch });
    return formIsValid;
  }
  // handleValidationUpdateBatch = () => {
  //   let fieldsBatchUpdate = this.state.fieldsBatchUpdate;
  //   let errorBatchUpdate = {};
  //   let formIsValid = true;

  //   //subject
  //   if (!fieldsBatchUpdate["courseId"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["courseId"] = "Please enter Batch Name!";
  //   }
  //   //batchId
  //   if (!fieldsBatchUpdate["batchId"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["batchId"] = "Please select batchId!";
  //   }
  //   //sessionYear
  //   if (!fieldsBatchUpdate["sessionYear"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["sessionYear"] = "Please select sessionYear!";
  //   }
  //   //amount
  //   if (!fieldsBatchUpdate["amount"]) {
  //     formIsValid = false;
  //     errorBatchUpdate["amount"] = "Please enter amount!";
  //   }
  //   console.log('errorBatchUpdateerrorBatchUpdateerrorBatchUpdate', errorBatchUpdate);
  //   this.setState({ errorBatchUpdate: errorBatchUpdate });
  //   return formIsValid;
  // }

  handleUpadte = (data) => {
    this.setState({ fieldsBatchUpdate: data, updateShow: true });
  }

  deleteUser = (data) => {
    let datatemp = {
      "id": data.id,
    }
    confirmAlert({
      title: 'Confirm to Delete?',
      message: `Are you sure to delete ${data.email} email?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch(dashboardActions.deleteBatch(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { getBatchList, getAllCourse, getAllStudent, getAllBatch } = dashboard;

    // console.log('getAllStudent3333333333', getAllStudent);
    // console.log('getAllCoursegetAllCoursegetAllCourse2222222222', getAllCourse);
    // console.log('getAllBatchgetAllBatchgetAllBatchgetAllBatchgetAllBatch1111111', getAllBatch);
    // console.log("RENDER_____________this.state.updateShow111111:::", this.state.updateShow);
    // console.log('this.state.fieldsBatchUpdatethis.state.fieldsBatchUpdate', this.state.fieldsBatchUpdate);

    return (

      <>

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>


            <div className='bg-white border border-slate-300'>
              <div className='p-4 border-b border-slate-300'>
                <h1 className='text-xl font-normal'>Add New Article</h1>
              </div>
              <div className='space-y-6'>
                <div className='grid grid-cols-1 gap-6 p-8 lg:grid-cols-4 md:grid-cols-2'>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Article Type</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatch["amount"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="amount"
                      value={this.state.fieldsBatch && this.state.fieldsBatch["amount"] ? this.state.fieldsBatch["amount"] : ""}
                      onChange={this.inputChange} placeholder='Enter Number' type="number" />
                    {this.state.errorBatch["amount"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorBatch["amount"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Title</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatch["amount"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="amount"
                      value={this.state.fieldsBatch && this.state.fieldsBatch["amount"] ? this.state.fieldsBatch["amount"] : ""}
                      onChange={this.inputChange} placeholder='Enter Title' type="text" />
                    {this.state.errorBatch["amount"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorBatch["amount"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Date of Article</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatch["amount"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="amount"
                      value={this.state.fieldsBatch && this.state.fieldsBatch["amount"] ? this.state.fieldsBatch["amount"] : ""}
                      onChange={this.inputChange} placeholder='Enter Date of Article' type="text" />
                    {this.state.errorBatch["amount"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorBatch["amount"]}
                      </div>
                      : null}
                  </div>

                </div>
              </div>
              <div className='flex justify-end w-full px-5 pb-4'>
                <button className='px-6 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchSubmit} data-config-id="01_primary-action">Save</button>
              </div>
            </div>


            <div className="max-w-full mt-6 overflow-auto">
              <div className="inline-block min-w-full ">
                <div className="overflow-hidden ">
                  <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                    <thead className="">
                      <tr className="text-left border border-slate-300">
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Class</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Class Section</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Student Name</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Start Date</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">End Date</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Amount</th>
                        {/* <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Manage</th> */}
                      </tr>
                    </thead>
                    <tbody className='divide-y' >

                      {/* {
                          getBatchList && getBatchList.length > 0 ?
                            getBatchList.map((element, index) => (
                              <>

                                <tr className="border border-slate-300">
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">1</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.studentId ? element.studentId : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.courseId ? element.courseId : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.amount ? element.amount : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.batchId ? element.batchId : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black bg-white whitespace-nowrap">{element && element.sessionYear ? element.sessionYear : "-"}</td>
                                  <td className='flex space-x-1'>
                                    <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                      <MdOutlineEdit className='w-5 h-5 text-blue-500' onClick={() => this.handleUpadte(element)} />
                                    </span>
                                    <span className='hover:bg-[#FF8008] cursor-pointer'>
                                      <MdOutlineClose className='w-6 h-6 text-blue-500' onClick={() => this.deleteUser(element)} />
                                    </span>
                                  </td>
                                </tr>

                              </>
                            )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj"></td>
                        } */}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div >

      </>

    );
  }
}

function mapStateToProps(state) {
  const { users, dashboard } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    dashboard,
    setting
  };
}
export default connect(mapStateToProps)(Article);