import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Class extends Component {

  constructor(props) {
    super(props);
    this.classSubmit = this.classSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsclass: {},
      errorsclass: {},
      fieldsClassUpdate: {},
      errorClassUpdate: {},
      dateDetails: {
        from_date: new Date(),
        to_date: new Date(),
      },
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getAllCourse(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
    this.props.dispatch(dashboardActions.getClassList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsClassUpdate: {},
        errorClassUpdate: {},
        updateShow: false
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
    let fieldsclass = this.state.fieldsclass;
    let errorsclass = this.state.errorsclass;
    fieldsclass[name] = value;
    errorsclass[name] = "";
    this.setState({ fieldsclass, errorsclass });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
    let fieldsClassUpdate = this.state.fieldsClassUpdate;
    let errorClassUpdate = this.state.errorClassUpdate;
    fieldsClassUpdate[name] = value;
    errorClassUpdate[name] = "";
    this.setState({ fieldsClassUpdate, errorClassUpdate });
  }

  classSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationSubject()) {
      let { className, courseId,batchId } = this.state.fieldsclass;
      this.props.dispatch(dashboardActions.createClass({
        className: className,
        courseId: courseId,
        batchId: batchId,
      }, this.props));
    }
  }

  classUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateSubject()) {
      let { className, courseId,batchId, id } = this.state.fieldsClassUpdate;
      this.props.dispatch(dashboardActions.updateClass({
        id: id,
        className: className,
        courseId: courseId,
        batchId: batchId,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsclass: {},
      errorsclass: {},
    })
    this.hideErrorcomment();
  }

  handleValidationSubject = () => {
    let fieldsclass = this.state.fieldsclass;
    let errorsclass = {};
    let formIsValid = true;

    //subject
    if (!fieldsclass["className"]) {
      formIsValid = false;
      errorsclass["className"] = "Please enter className!";
    }
    // courseId
    if (!fieldsclass["courseId"]) {
      formIsValid = false;
      errorsclass["courseId"] = "Please select courseId!";
    }
    // batchId
    if (!fieldsclass["batchId"]) {
      formIsValid = false;
      errorsclass["batchId"] = "Please enter batchId!";
    }
    console.log('errorClassUpdateerrorClassUpdateerrorClassUpdate11111', errorsclass);
    this.setState({ errorsclass: errorsclass });
    return formIsValid;
  }

  handleValidationUpdateSubject = () => {
    let fieldsClassUpdate = this.state.fieldsClassUpdate;
    let errorClassUpdate = {};
    let formIsValid = true;

    //subject
    if (!fieldsClassUpdate["className"]) {
      formIsValid = false;
      errorClassUpdate["className"] = "Please enter className!";
    }
    // courseId
    if (!fieldsClassUpdate["courseId"]) {
      formIsValid = false;
      errorClassUpdate["courseId"] = "Please select courseId!";
    }
    // batchId
    if (!fieldsClassUpdate["batchId"]) {
      formIsValid = false;
      errorClassUpdate["batchId"] = "Please enter classNoription!";
    }
    console.log('errorClassUpdateerrorClassUpdateerrorClassUpdate11111', errorClassUpdate);
    this.setState({ errorClassUpdate: errorClassUpdate });
    return formIsValid;
  }


  handleUpadte = (data) => {
    this.setState({ fieldsClassUpdate: data, updateShow: true });
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
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
          onClick: () => this.props.dispatch(dashboardActions.deleteClass(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {



    let { dashboard } = this.props;
    let { loading, getClassList, getAllCourse, getAllBatch } = dashboard;

    console.log('getClassListgetClassListgetClassList1111111111', getClassList);




    console.log('getClassListgetClassListgetClassList2222222222', getAllBatch);

    return (

      <>

        {/* <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}
        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

              {
                this.state.updateShow ?
                  <>

                    <div className='border border-slate-300 bg-white'>
                      <form autoComplete="off">
                        <div className='border-b border-slate-300 p-4'>
                          <h1 className='text-xl font-normal'>Update Class</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>
                            <div>
                              <label class=' text-sm font-normal text-gray-600 pb-4'>Course Name</label>
                              <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                                <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
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
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label class=' text-sm font-normal text-gray-600 pb-4'>Course Name</label>
                              <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                                <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                                  name="batchId">
                                  {
                                    getAllBatch && getAllBatch.length > 0 ?
                                      getAllBatch.map((element, index) => (
                                        <React.Fragment>
                                          <option value={element && element.id ? element.id : null}>{element && element.cName ? element.cName : null}</option>
                                        </React.Fragment>
                                      )) : null
                                  }
                                </select>
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Class Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorClassUpdate["className"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="className"
                                value={this.state.fieldsClassUpdate && this.state.fieldsClassUpdate.className ? this.state.fieldsClassUpdate.className : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter class name" type="text" />
                              {this.state.errorClassUpdate["className"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorClassUpdate["className"]}
                                </div>
                                : null}
                            </div>

                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.classUpdateSubmit} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>


                  </>
                  :
                  <>
                    <div className='border border-slate-300 bg-white'>
                      <form autoComplete="off">
                        <div className='border-b border-slate-300 p-4'>
                          <h1 className='text-xl font-normal'>Add Class</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>

                            <div>
                              <label class=' text-sm font-normal text-gray-600 pb-4'>Course Name</label>
                              <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                                <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
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
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label class=' text-sm font-normal text-gray-600 pb-4'>Course Name</label>
                              <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                                <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                                  name="batchId">
                                  {
                                    getAllBatch && getAllBatch.length > 0 ?
                                      getAllBatch.map((element, index) => (
                                        <React.Fragment>
                                          <option value={element && element.id ? element.id : null}>{element && element.batchName ? element.batchName : null}</option>
                                        </React.Fragment>
                                      )) : null
                                  }
                                </select>
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Class Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsclass["className"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="className"
                                value={this.state.fieldsclass["className"] ? this.state.fieldsclass["className"] : ''}
                                onChange={this.inputChange} placeholder="Enter class name" type="text" />
                              {this.state.errorsclass["className"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorsclass["className"]}
                                </div>
                                : null}
                            </div>

                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.classSubmit} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>
                  </>
              }


              <div className="overflow-auto max-w-full ">
                <div className="inline-block min-w-full  ">
                  <div className="overflow-hidden  ">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Class No.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Class Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Class Section</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >

                        {
                          getClassList && getClassList.length > 0 ?
                            getClassList.map((element, index) => (
                              <>

                                <tr className=" border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">1</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.batchId ? element.batchId : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.className ? element.className : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.classSection ? element.classSection : "-"}</td>
                                  <td className='flex space-x-1'>
                                    <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                      <MdOutlineEdit className='text-blue-500 h-5 w-5' onClick={() => this.handleUpadte(element)} />
                                    </span>
                                    <span className='hover:bg-[#FF8008] cursor-pointer'>
                                      <MdOutlineClose className='text-blue-500 h-6 w-6' onClick={() => this.deleteUser(element)} />
                                    </span>
                                  </td>
                                </tr>

                              </>
                            )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">Data Not Found</td>
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
export default connect(mapStateToProps)(Class);