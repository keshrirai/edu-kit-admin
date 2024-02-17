import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Section extends Component {

  constructor(props) {
    super(props);
    this.sectionSubmit = this.sectionSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldssection: {},
      errorssection: {},
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
    this.props.dispatch(dashboardActions.getSectionList(data));
    this.props.dispatch(dashboardActions.getAllClass(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
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
    let fieldssection = this.state.fieldssection;
    let errorssection = this.state.errorssection;
    fieldssection[name] = value;
    errorssection[name] = "";
    this.setState({ fieldssection, errorssection });
  }

  sectionSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationSubject()) {
      let { courseId, batchId, classId, sectionName, roomNo } = this.state.fieldssection;
      this.props.dispatch(dashboardActions.createSection({
        courseId: courseId,
        batchId: batchId,
        classId: classId,
        sectionName: sectionName,
        roomNo: roomNo,
      }, this.props));
    }
  }


  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldssection: {},
      errorssection: {},
    })
    this.hideErrorcomment();
  }

  handleValidationSubject = () => {
    let fieldssection = this.state.fieldssection;
    let errorssection = {};
    let formIsValid = true;

    //courseId
    if (!fieldssection["courseId"]) {
      formIsValid = false;
      errorssection["courseId"] = "Please enter courseId!";
    }
    //batchId
    if (!fieldssection["batchId"]) {
      formIsValid = false;
      errorssection["batchId"] = "Please select batchId!";
    }
    //classId
    if (!fieldssection["classId"]) {
      formIsValid = false;
      errorssection["classId"] = "Please select classId!";
    }
    //sectionName
    if (!fieldssection["sectionName"]) {
      formIsValid = false;
      errorssection["sectionName"] = "Please select sectionName!";
    }
    //roomNo
    if (!fieldssection["roomNo"]) {
      formIsValid = false;
      errorssection["roomNo"] = "Please select roomNo!";
    }

    console.log('errorssectionerrorssectionerrorssectionerrorssectionerrorssection', errorssection);
    this.setState({ errorssection: errorssection });
    return formIsValid;
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
    let { loading, getAllClass, getAllCourse, getAllBatch, getSectionList } = dashboard;

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

              <div className='border border-slate-300 bg-white'>
                <form autoComplete="off">
                  <div className='border-b border-slate-300 p-4'>
                    <h1 className='text-xl font-normal'>Add Section</h1>
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
                        <label class=' text-sm font-normal text-gray-600 pb-4'>Batch Name</label>
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
                        <label class=' text-sm font-normal text-gray-600 pb-4'>Class Name</label>
                        <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                          <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                            name="classId">
                            {
                              getAllClass && getAllClass.length > 0 ?
                                getAllClass.map((element, index) => (
                                  <React.Fragment>
                                    <option value={element && element.id ? element.id : null}>{element && element.className ? element.className : null}</option>
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
                        <label class='text-sm font-normal text-gray-600 pb-4'>Section Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssection["sectionName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="sectionName"
                          value={this.state.fieldssection && this.state.fieldssection["sectionName"] ? this.state.fieldssection["sectionName"] : ""}
                          onChange={this.inputChange} placeholder="Enter Section name" type="text" />
                        {this.state.errorssection["sectionName"] ?
                          <div sectionName="invalid-feedback  text-yellow-600">
                            {this.state.errorssection["sectionName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class='text-sm font-normal text-gray-600 pb-4'>Section No.</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssection["roomNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="roomNo"
                          value={this.state.fieldssection && this.state.fieldssection["roomNo"] ? this.state.fieldssection["roomNo"] : ""}
                          onChange={this.inputChange} placeholder="Enter Section No" type="text" />
                        {this.state.errorssection["roomNo"] ?
                          <div roomNo="invalid-feedback  text-yellow-600">
                            {this.state.errorssection["roomNo"]}
                          </div>
                          : null}
                      </div>
                    </div>
                  </div>


                  <div className='w-full px-5 pb-4'>
                    <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.sectionSubmit} data-config-id="01_primary-action">Save</button>
                  </div>

                </form>
              </div>


              <div className="overflow-auto max-w-full ">
                <div className="inline-block min-w-full  ">
                  <div className="overflow-hidden  ">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Section No.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Section Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >

                        {
                          getSectionList && getSectionList.length > 0 ?
                            getSectionList.map((element, index) => (
                              <>

                                <tr className=" border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{index}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.roomNo ? element.roomNo : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.sectionName ? element.sectionName : "-"}</td>
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
export default connect(mapStateToProps)(Section);