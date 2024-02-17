import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class Students extends Component {

  constructor(props) {
    super(props);
    this.subjectSubmit = this.subjectSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldssubject: {},
      errorssubject: {},
      fieldssubjectUpdate: {},
      errorssubjectUpdate: {},
      updateShow: false,
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
    this.props.dispatch(dashboardActions.getSubjectList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldssubjectUpdate: {},
        errorssubjectUpdate: {},
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
    // this.setState({ [name]: value });
    let fieldssubject = this.state.fieldssubject;
    let errorssubject = this.state.errorssubject;
    fieldssubject[name] = value;
    errorssubject[name] = "";
    this.setState({ fieldssubject, errorssubject });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    console.log('name, value  ', name, value);
    // this.setState({ [name]: value });
    let { fieldssubjectUpdate } = this.state;
    let { errorssubjectUpdate } = this.state;
    fieldssubjectUpdate[name] = value;
    errorssubjectUpdate[name] = "";
    this.setState({ fieldssubjectUpdate, errorssubjectUpdate });
  }

  subjectSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationSubject()) {
      let { subName, subCode, desc } = this.state.fieldssubject;
      this.props.dispatch(dashboardActions.createSubject({
        subName: subName,
        subCode: subCode,
        desc: desc,
      }, this.props));
    }
  }
  subjectSubmitUpdate = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateSubject()) {
      let { subName, subCode, desc, id } = this.state.fieldssubjectUpdate;
      this.props.dispatch(dashboardActions.updateSubject({
        id: id,
        subName: subName,
        subCode: subCode,
        desc: desc,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldssubject: {},
      errorssubject: {},
    })
    this.hideErrorcomment();
  }

  handleValidationSubject = () => {
    let fieldssubject = this.state.fieldssubject;
    let errorssubject = {};
    let formIsValid = true;

    //subject
    if (!fieldssubject["subName"]) {
      formIsValid = false;
      errorssubject["subName"] = "Please enter subName!";
    }
    //subCode
    if (!fieldssubject["subCode"]) {
      formIsValid = false;
      errorssubject["subCode"] = "Please select subCode!";
    }
    //desc
    if (!fieldssubject["desc"]) {
      formIsValid = false;
      errorssubject["desc"] = "Please enter Description!";
    }
    this.setState({ errorssubject: errorssubject });
    return formIsValid;
  }

  handleValidationUpdateSubject = () => {
    let fieldssubjectUpdate = this.state.fieldssubjectUpdate;
    let errorssubjectUpdate = {};
    let formIsValid = true;

    //subject
    if (!fieldssubjectUpdate["subName"]) {
      formIsValid = false;
      errorssubjectUpdate["subName"] = "Please enter subName!";
    }
    //subCode
    if (!fieldssubjectUpdate["subCode"]) {
      formIsValid = false;
      errorssubjectUpdate["subCode"] = "Please select subCode!";
    }
    //desc
    if (!fieldssubjectUpdate["desc"]) {
      formIsValid = false;
      errorssubjectUpdate["desc"] = "Please enter Description!";
    }

    console.log("errorssubjectUpdateerrorssubjectUpdate_______:::", errorssubjectUpdate);
    this.setState({ errorssubjectUpdate: errorssubjectUpdate });
    return formIsValid;
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
  }

  handleUpadte = (data) => {
    this.setState({ fieldssubjectUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteSubject(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { loading, getSubjectList, } = dashboard;

    console.log("RENDER_____________this.state.updateShow:::", this.state.updateShow);

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
                          <h1 className='text-xl font-normal'>Update Subject</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Subject Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssubjectUpdate["subName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="subName"
                                value={this.state.fieldssubjectUpdate && this.state.fieldssubjectUpdate.subName ? this.state.fieldssubjectUpdate.subName : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter subject name" type="text" />
                              {this.state.errorssubjectUpdate["subName"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorssubjectUpdate["subName"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Subject Code</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssubjectUpdate["subCode"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="subCode"
                                value={this.state.fieldssubjectUpdate && this.state.fieldssubjectUpdate.subCode ? this.state.fieldssubjectUpdate.subCode : ""}
                                onChange={this.inputChangeUpdate} placeholder="Enter Code" type="text" />
                              {this.state.errorssubjectUpdate["subCode"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorssubjectUpdate["subCode"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class=' text-sm font-normal text-gray-600 pb-4'>Description</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssubjectUpdate["desc"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="desc"
                                value={this.state.fieldssubjectUpdate && this.state.fieldssubjectUpdate.desc ? this.state.fieldssubjectUpdate.desc : ""}
                                onChange={this.inputChangeUpdate} placeholder="Description" type="text" />
                              {this.state.errorssubjectUpdate["desc"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorssubjectUpdate["desc"]}
                                </div>
                                : null}
                              {/* <textarea type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Description' /> */}
                            </div>
                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.subjectSubmitUpdate} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>
                  </>
                  :
                  <>
                    <div className='border border-slate-300 bg-white'>
                      <form autoComplete="off">
                        <div className='border-b border-slate-300 p-4'>
                          <h1 className='text-xl font-normal'>Add Subject</h1>
                        </div>
                        <div className='p-8'>
                          <div className='space-y-6'>
                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Subject Name</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssubject["subName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="subName"
                                value={this.state.fieldssubject["subName"] ? this.state.fieldssubject["subName"] : ''}
                                onChange={this.inputChange} placeholder="Enter subject name" type="text" />
                              {this.state.errorssubject["subName"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorssubject["subName"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class='text-sm font-normal text-gray-600 pb-4'>Subject Code</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssubject["subCode"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="subCode"
                                value={this.state.fieldssubject["subCode"] ? this.state.fieldssubject["subCode"] : ''}
                                onChange={this.inputChange} placeholder="Enter Code" type="text" />
                              {this.state.errorssubject["subCode"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorssubject["subCode"]}
                                </div>
                                : null}
                            </div>

                            <div>
                              <label class=' text-sm font-normal text-gray-600 pb-4'>Description</label>
                              <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorssubject["desc"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                                name="desc"
                                value={this.state.fieldssubject["desc"] ? this.state.fieldssubject["desc"] : ''}
                                onChange={this.inputChange} placeholder="Description" type="text" />
                              {this.state.errorssubject["desc"] ?
                                <div className="invalid-feedback  text-yellow-600">
                                  {this.state.errorssubject["desc"]}
                                </div>
                                : null}
                              {/* <textarea type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Description' /> */}
                            </div>
                          </div>
                        </div>


                        <div className='w-full px-5 pb-4'>
                          <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.subjectSubmit} data-config-id="01_primary-action">Save</button>
                        </div>

                      </form>
                    </div>
                  </>
              }




              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Subject Code</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Subject Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody>

                        {
                          getSubjectList && getSubjectList.length > 0 ?
                            getSubjectList.map((element, index) => (
                              <>

                                <tr className="border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{index}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.subCode ? element.subCode : "-"}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">{element && element.subName ? element.subName : "-"}</td>
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
            {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='border border-slate-300 bg-white'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl font-normal'>Subject Allocation</h1>
                </div>
                <div className='p-8'>
                  <div className='space-y-6'>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Department</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select Department&hellip;</option>
                          <option value="daily">Software</option>
                          <option value="subjec_wise">Designing</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Employee Name</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select Employee&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Batch</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Subject</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full px-5 pb-4'>
                  <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Save</button>
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Subject</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Class Teacher</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Anitha Paslam</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">UKG</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">A</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Science SC-1010</td>
                          <td>
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-5 w-5' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='border border-slate-300 bg-white'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl font-normal'>Assign Subject</h1>
                </div>
                <div className='p-8'>
                  <div className='space-y-6'>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Batch</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Subject</label>
                      <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please select&hellip;</option>
                          <option value="daily">Daily</option>
                          <option value="subjec_wise">Subject Wise</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full px-5 pb-4'>
                  <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Save</button>
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Subject</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Class Teacher</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Anitha Paslam</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">UKG</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">A</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white Capitalize whitespace-nowrap">Science SC-1010</td>
                          <td>
                            <span><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> */}
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
export default connect(mapStateToProps)(Students);