import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Batch extends Component {

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
      errorsBatch: {},
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
    this.props.dispatch(dashboardActions.getBatchList(data));
    this.props.dispatch(dashboardActions.getAllCourse());
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

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsBatchUpdate = this.state.fieldsBatchUpdate;
    let errorBatchUpdate = this.state.errorBatchUpdate;
    fieldsBatchUpdate[name] = value;
    errorBatchUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsBatchUpdate, errorBatchUpdate });
  }
  batchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { courseId, batchName, startDate, endDate, maxStudent } = this.state.fieldsBatch;
      this.props.dispatch(dashboardActions.createBatch({
        courseId: courseId,
        batchName: batchName,
        startDate: startDate,
        endDate: endDate,
        maxStudent: maxStudent,
      }, this.props));
    }
  }

  batchUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { courseId, batchName, startDate, endDate, maxStudent, id } = this.state.fieldsBatchUpdate;
      this.props.dispatch(dashboardActions.updateBatch({
        id: id,
        courseId: courseId,
        batchName: batchName,
        startDate: startDate,
        endDate: endDate,
        maxStudent: maxStudent,
      }, this.props));
    }
  }
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
    if (!fieldsBatch["batchName"]) {
      formIsValid = false;
      errorsBatch["batchName"] = "Please enter Batch Name!";
    }
    //startDate
    if (!fieldsBatch["startDate"]) {
      formIsValid = false;
      errorsBatch["startDate"] = "Please select StartDate!";
    }
    //endDate
    if (!fieldsBatch["endDate"]) {
      formIsValid = false;
      errorsBatch["endDate"] = "Please select EndDate!";
    }
    //maxStudent
    if (!fieldsBatch["maxStudent"]) {
      formIsValid = false;
      errorsBatch["maxStudent"] = "Please enter maxStudent!";
    }
    this.setState({ errorsBatch: errorsBatch });
    return formIsValid;
  }
  handleValidationUpdateBatch = () => {
    let fieldsBatchUpdate = this.state.fieldsBatchUpdate;
    let errorBatchUpdate = {};
    let formIsValid = true;

    //subject
    if (!fieldsBatchUpdate["batchName"]) {
      formIsValid = false;
      errorBatchUpdate["batchName"] = "Please enter Batch Name!";
    }
    //startDate
    if (!fieldsBatchUpdate["startDate"]) {
      formIsValid = false;
      errorBatchUpdate["startDate"] = "Please select StartDate!";
    }
    //endDate
    if (!fieldsBatchUpdate["endDate"]) {
      formIsValid = false;
      errorBatchUpdate["endDate"] = "Please select EndDate!";
    }
    //maxStudent
    if (!fieldsBatchUpdate["maxStudent"]) {
      formIsValid = false;
      errorBatchUpdate["maxStudent"] = "Please enter maxStudent!";
    }
    console.log('errorBatchUpdateerrorBatchUpdateerrorBatchUpdate', errorBatchUpdate);
    this.setState({ errorBatchUpdate: errorBatchUpdate });
    return formIsValid;
  }

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
    let { getBatchList, getAllCourse } = dashboard;

    console.log("RENDER_____________this.state.updateShow111111:::", this.state.updateShow);
    console.log('this.state.fieldsBatchUpdatethis.state.fieldsBatchUpdate', this.state.fieldsBatchUpdate);

    return (

      <>

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>


              {
                this.state.updateShow ?
                  <>

                    <div className='bg-white border border-slate-300'>
                      <div className='p-4 border-b border-slate-300'>
                        <h1 className='text-xl font-normal'>Update Batch</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                            <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                              <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                                name="courseId">
                                {
                                  getAllCourse && getAllCourse.length > 0 ?
                                    getAllCourse.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                                      </React.Fragment>
                                    )) : null
                                }
                              </select>
                              <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Batch Name</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatchUpdate["batchName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="batchName"
                              value={this.state.fieldsBatchUpdate && this.state.fieldsBatchUpdate.batchName ? this.state.fieldsBatchUpdate.batchName : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="text" />
                            {this.state.errorBatchUpdate["batchName"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorBatchUpdate["batchName"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Start Date</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatchUpdate["startDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="startDate"
                              value={this.state.fieldsBatchUpdate && this.state.fieldsBatchUpdate.startDate ? this.state.fieldsBatchUpdate.startDate : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="date" />
                            {this.state.errorBatchUpdate["startDate"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorBatchUpdate["startDate"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>End Date</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatchUpdate["endDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="endDate"
                              value={this.state.fieldsBatchUpdate && this.state.fieldsBatchUpdate.endDate ? this.state.fieldsBatchUpdate.endDate : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="date" />
                            {this.state.errorBatchUpdate["endDate"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorBatchUpdate["endDate"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Maximum No. Of Students</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorBatchUpdate["maxStudent"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="maxStudent"
                              value={this.state.fieldsBatchUpdate && this.state.fieldsBatchUpdate.maxStudent ? this.state.fieldsBatchUpdate.maxStudent : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="number" />
                            {this.state.errorBatchUpdate["maxStudent"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorBatchUpdate["maxStudent"]}
                              </div>
                              : null}
                          </div>

                          <div className='w-full px-5 pb-4'>
                            <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchUpdateSubmit} data-config-id="01_primary-action">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </> :

                  <>
                    <div className='bg-white border border-slate-300'>
                      <div className='p-4 border-b border-slate-300'>
                        <h1 className='text-xl font-normal'>Add Batch</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                            <div className='relative flex items-center w-full py-2 text-gray-800 bg-white border rounded-sm appearance-none cursor-pointer md:w-auto'>
                              <select className="w-full px-4 text-sm font-normal bg-white appearance-none focus:outline-none" onChange={this.inputChange}
                                name="courseId">
                                {
                                  getAllCourse && getAllCourse.length > 0 ?
                                    getAllCourse.map((element, index) => (
                                      <React.Fragment>
                                        <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                                      </React.Fragment>
                                    )) : null
                                }
                              </select>
                              <div className="absolute top-0 bottom-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Batch Name</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsBatch["batchName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="batchName"
                              value={this.state.fieldsBatch["batchName"] ? this.state.fieldsBatch["batchName"] : ''}
                              onChange={this.inputChange} placeholder='Enter batch name' type="text" />
                            {this.state.errorsBatch["batchName"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorsBatch["batchName"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Start Date</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsBatch["startDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="startDate"
                              value={this.state.fieldsBatch["startDate"] ? this.state.fieldsBatch["startDate"] : ''}
                              onChange={this.inputChange} placeholder='Enter batch name' type="date" />
                            {this.state.errorsBatch["startDate"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorsBatch["startDate"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>End Date</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsBatch["endDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="endDate"
                              value={this.state.fieldsBatch["endDate"] ? this.state.fieldsBatch["endDate"] : ''}
                              onChange={this.inputChange} placeholder='Enter batch name' type="date" />
                            {this.state.errorsBatch["endDate"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorsBatch["endDate"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Maximum No. Of Students</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsBatch["maxStudent"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="maxStudent"
                              value={this.state.fieldsBatch["maxStudent"] ? this.state.fieldsBatch["maxStudent"] : ''}
                              onChange={this.inputChange} placeholder='Enter batch name' type="number" />
                            {this.state.errorsBatch["maxStudent"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorsBatch["maxStudent"]}
                              </div>
                              : null}
                          </div>

                          <div className='w-full px-5 pb-4'>
                            <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchSubmit} data-config-id="01_primary-action">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
              }



              <div className="max-w-full overflow-auto ">
                <div className="inline-block min-w-full ">
                  <div className="overflow-hidden ">
                    <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Max No. of Students</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Start Date</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">End Date</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >

                        {
                          getBatchList && getBatchList.length > 0 ?
                            getBatchList.map((element, index) => (
                              <>

                                <tr className="border border-slate-300">
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">1</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.courseId ? element.courseId : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.batchName ? element.batchName : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.maxStudent ? element.maxStudent : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black capitalize bg-white whitespace-nowrap">{element && element.startDate ? element.startDate : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black bg-white whitespace-nowrap">{element && element.endDate ? element.endDate : "-"}</td>
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
                        }

                      </tbody>
                    </table>
                  </div>
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
export default connect(mapStateToProps)(Batch);