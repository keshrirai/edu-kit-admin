import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineEdit, MdOutlineClose } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.teacherSubmit = this.teacherSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsTeacher: {},
      errorsTeacher: {},
      fieldsTeacherUpdate: {},
      errorsTeacherUpdate: {},
      updateShow: false,
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getAllDepartment(data));
    this.props.dispatch(dashboardActions.getEmployeeList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsinstitueUpdate: {},
        errorinstitueUpdate: {},
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
    let fieldsTeacher = this.state.fieldsTeacher;
    let errorsTeacher = this.state.errorsTeacher;
    fieldsTeacher[name] = value;
    errorsTeacher[name] = "";
    console.log(name, value);
    this.setState({ fieldsTeacher, errorsTeacher });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let { fieldsTeacherUpdate } = this.state;
    let { errorsTeacherUpdate } = this.state;
    fieldsTeacherUpdate[name] = value;
    errorsTeacherUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsTeacherUpdate, errorsTeacherUpdate });
  }

  teacherSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { code, fname, mName, lname, gender, dob, mobile, fatherName, motherName, department, Designation, joinDate } = this.state.fieldsTeacher;
      this.props.dispatch(dashboardActions.createEmployee({
        code: code,
        fname: fname,
        mName: mName,
        lname: lname,
        gender: gender,
        dob: dob,
        mobile: mobile,
        fatherName: fatherName,
        motherName: motherName,
        department: department,
        Designation: Designation,
        joinDate: joinDate,
      }, this.props));
    }
  }

  teacherUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { id, code, fname, mName, lname, gender, dob, mobile, fatherName, motherName, department, Designation, joinDate } = this.state.fieldsTeacher;
      this.props.dispatch(dashboardActions.createEmployee({
        id: id,
        code: code,
        fname: fname,
        mName: mName,
        lname: lname,
        gender: gender,
        dob: dob,
        mobile: mobile,
        fatherName: fatherName,
        motherName: motherName,
        department: department,
        Designation: Designation,
        joinDate: joinDate,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsTeacher: {},
      errorsTeacher: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsTeacher = this.state.fieldsTeacher;
    let errorsTeacher = {};
    let formIsValid = true;
    //deprtId
    if (!fieldsTeacher["code"]) {
      formIsValid = false;
      errorsTeacher["code"] = "Please enter code!";
    }
    //cCode
    if (!fieldsTeacher["fname"]) {
      formIsValid = false;
      errorsTeacher["fname"] = "Please enter fname!";
    }
    //cName
    if (!fieldsTeacher["mName"]) {
      formIsValid = false;
      errorsTeacher["mName"] = "Please select mName!";
    }
    //desc
    if (!fieldsTeacher["lname"]) {
      formIsValid = false;
      errorsTeacher["lname"] = "Please enter lname!";
    }
    //gender
    if (!fieldsTeacher["gender"]) {
      formIsValid = false;
      errorsTeacher["gender"] = "Please enter gender!";
    }
    //dob
    if (!fieldsTeacher["dob"]) {
      formIsValid = false;
      errorsTeacher["dob"] = "Please enter dob!";
    }
    //mobile
    if (!fieldsTeacher["mobile"]) {
      formIsValid = false;
      errorsTeacher["mobile"] = "Please enter mobile!";
    }
    //fatherName
    if (!fieldsTeacher["fatherName"]) {
      formIsValid = false;
      errorsTeacher["fatherName"] = "Please enter fatherName!";
    }
    //motherName
    if (!fieldsTeacher["motherName"]) {
      formIsValid = false;
      errorsTeacher["motherName"] = "Please enter motherName!";
    }
    //department
    if (!fieldsTeacher["department"]) {
      formIsValid = false;
      errorsTeacher["department"] = "Please enter department!";
    }
    // //Designation
    // if (!errorsTeacher["Designation"]) {
    //   formIsValid = false;
    //   errorsTeacher["Designation"] = "Please enter Designation!";
    // }
    //joinDate
    if (!fieldsTeacher["joinDate"]) {
      formIsValid = false;
      errorsTeacher["joinDate"] = "Please enter joinDate!";
    }

    console.log('fieldsTeacherfieldsTeacherfieldsTeacherfieldsTeacher', fieldsTeacher);
    this.setState({ errorsTeacher: errorsTeacher });
    return formIsValid;
  }

  handleValidationUpdateBatch = () => {
    let fieldsTeacherUpdate = this.state.fieldsTeacherUpdate;
    let errorsTeacherUpdate = {};
    let formIsValid = true;
    //deprtId
    if (!fieldsTeacherUpdate["code"]) {
      formIsValid = false;
      errorsTeacherUpdate["code"] = "Please enter code!";
    }
    //cCode
    if (!fieldsTeacherUpdate["fname"]) {
      formIsValid = false;
      errorsTeacherUpdate["fname"] = "Please enter fname!";
    }
    //cName
    if (!fieldsTeacherUpdate["mName"]) {
      formIsValid = false;
      errorsTeacherUpdate["mName"] = "Please select mName!";
    }
    //desc
    if (!fieldsTeacherUpdate["lname"]) {
      formIsValid = false;
      errorsTeacherUpdate["lname"] = "Please enter lname!";
    }
    //gender
    if (!fieldsTeacherUpdate["gender"]) {
      formIsValid = false;
      errorsTeacherUpdate["gender"] = "Please enter gender!";
    }
    //dob
    if (!fieldsTeacherUpdate["dob"]) {
      formIsValid = false;
      errorsTeacherUpdate["dob"] = "Please enter dob!";
    }
    //mobile
    if (!fieldsTeacherUpdate["mobile"]) {
      formIsValid = false;
      errorsTeacherUpdate["mobile"] = "Please enter mobile!";
    }
    //fatherName
    if (!fieldsTeacherUpdate["fatherName"]) {
      formIsValid = false;
      errorsTeacherUpdate["fatherName"] = "Please enter fatherName!";
    }
    //motherName
    if (!fieldsTeacherUpdate["motherName"]) {
      formIsValid = false;
      errorsTeacherUpdate["motherName"] = "Please enter motherName!";
    }
    //department
    if (!fieldsTeacherUpdate["department"]) {
      formIsValid = false;
      errorsTeacherUpdate["department"] = "Please enter department!";
    }
    // //Designation
    // if (!errorsTeacherUpdate["Designation"]) {
    //   formIsValid = false;
    //   errorsTeacherUpdate["Designation"] = "Please enter Designation!";
    // }
    //joinDate
    if (!fieldsTeacherUpdate["joinDate"]) {
      formIsValid = false;
      errorsTeacherUpdate["joinDate"] = "Please enter joinDate!";
    }

    console.log('fieldsTeacherUpdatefieldsTeacherUpdatefieldsTeacherUpdatefieldsTeacherUpdate', fieldsTeacherUpdate);
    this.setState({ errorsTeacherUpdate: errorsTeacherUpdate });
    return formIsValid;
  }


  handleUpadte = (data) => {
    this.setState({ fieldsTeacherUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteEmployee(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {



    let { dashboard } = this.props;
    let { getAllDepartment, getEmployeeList } = dashboard;


    return (

      <>

        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">


          {
            this.state.updateShow ?
              <>
                <section className='space-y-6 bg-white border border-slate-300 pb-4'>
                  <div className='border-b border-slate-300 pl-5 py-4'>
                    <h1 className='text-xl text-gray-900'>Employee Registration</h1>
                  </div>
                  <div className='mx-5 border border-slate-300 rounded-sm'>
                    <div className='border-b border-slate-300 p-4'>
                      <h1 className='text-xl leading-normal  text-gray-900'>Update Employee Details</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-5'>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Code</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["code"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="code"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.code ? this.state.fieldsTeacherUpdate.code : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Code' type="text" />
                        {this.state.errorsTeacherUpdate["code"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["code"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee First Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["fname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="fname"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.fname ? this.state.fieldsTeacherUpdate.fname : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee First Name' type="text" />
                        {this.state.errorsTeacherUpdate["fname"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["fname"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Middle Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["mName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="mName"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.mName ? this.state.fieldsTeacherUpdate.mName : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Middle Name' type="text" />
                        {this.state.errorsTeacherUpdate["mName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["mName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Last Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["lname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="lname"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.lname ? this.state.fieldsTeacherUpdate.lname : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Last Name' type="text" />
                        {this.state.errorsTeacherUpdate["lname"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["lname"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Gender</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["gender"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="gender"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.gender ? this.state.fieldsTeacherUpdate.gender : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Last Name' type="text" />
                        {this.state.errorsTeacherUpdate["gender"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["gender"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Date of Birth</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["dob"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="dob"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.dob ? this.state.fieldsTeacherUpdate.dob : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Date of Birth' type="date" />
                        {this.state.errorsTeacherUpdate["dob"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["dob"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Mobile No.</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["mobile"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="mobile"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.mobile ? this.state.fieldsTeacherUpdate.mobile : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Date of Birth' type="text" />
                        {this.state.errorsTeacherUpdate["mobile"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["mobile"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Father Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["fatherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="fatherName"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.fatherName ? this.state.fieldsTeacherUpdate.fatherName : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Father Name' type="text" />
                        {this.state.errorsTeacherUpdate["fatherName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["fatherName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Mother Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["motherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="motherName"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.motherName ? this.state.fieldsTeacherUpdate.motherName : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Mother Name' type="text" />
                        {this.state.errorsTeacherUpdate["motherName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["motherName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-4'>Employee Department Name</label>
                        <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                          <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                            name="department">
                            {
                              getAllDepartment && getAllDepartment.length > 0 ?
                                getAllDepartment.map((element, index) => (
                                  <React.Fragment>
                                    <option value={element && element.id ? element.id : null}>{element && element.deprtName ? element.deprtName : null}</option>
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
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Designation Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["Designation"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="Designation"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.Designation ? this.state.fieldsTeacherUpdate.Designation : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Employee Designation Name' type="text" />
                        {this.state.errorsTeacherUpdate["Designation"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["Designation"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Join Date</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacherUpdate["joinDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="joinDate"
                          value={this.state.fieldsTeacherUpdate && this.state.fieldsTeacherUpdate.joinDate ? this.state.fieldsTeacherUpdate.joinDate : ""}
                          onChange={this.inputChangeUpdate} placeholder='Enter Join Date' type="text" />
                        {this.state.errorsTeacherUpdate["joinDate"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacherUpdate["joinDate"]}
                          </div>
                          : null}
                      </div>

                      <div className='w-full px-5 pb-4'>
                        <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.teacherUpdateSubmit} data-config-id="01_primary-action">Save</button>
                      </div>

                    </div>
                  </div>

                </section>
              </>
              :
              <>
                <section className='space-y-6 bg-white border border-slate-300 pb-4'>
                  <div className='border-b border-slate-300 pl-5 py-4'>
                    <h1 className='text-xl text-gray-900'>Employee Registration</h1>
                  </div>
                  <div className='mx-5 border border-slate-300 rounded-sm'>
                    <div className='border-b border-slate-300 p-4'>
                      <h1 className='text-xl leading-normal  text-gray-900'>Employee Details</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  p-5'>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Code</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["code"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="code"
                          value={this.state.fieldsTeacher["code"] ? this.state.fieldsTeacher["code"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Code' type="text" />
                        {this.state.errorsTeacher["code"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["code"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee First Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["fname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="fname"
                          value={this.state.fieldsTeacher["fname"] ? this.state.fieldsTeacher["fname"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee First Name' type="text" />
                        {this.state.errorsTeacher["fname"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["fname"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Middle Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["mName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="mName"
                          value={this.state.fieldsTeacher["mName"] ? this.state.fieldsTeacher["mName"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Middle Name' type="text" />
                        {this.state.errorsTeacher["mName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["mName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Last Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["lname"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="lname"
                          value={this.state.fieldsTeacher["lname"] ? this.state.fieldsTeacher["lname"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Last Name' type="text" />
                        {this.state.errorsTeacher["lname"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["lname"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Gender</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["gender"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="gender"
                          value={this.state.fieldsTeacher["gender"] ? this.state.fieldsTeacher["gender"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Last Name' type="text" />
                        {this.state.errorsTeacher["gender"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["gender"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Date of Birth</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["dob"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="dob"
                          value={this.state.fieldsTeacher["dob"] ? this.state.fieldsTeacher["dob"] : ''}
                          onChange={this.inputChange} placeholder='Enter Date of Birth' type="date" />
                        {this.state.errorsTeacher["dob"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["dob"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Mobile No.</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["mobile"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="mobile"
                          value={this.state.fieldsTeacher["mobile"] ? this.state.fieldsTeacher["mobile"] : ''}
                          onChange={this.inputChange} placeholder='Enter Date of Birth' type="text" />
                        {this.state.errorsTeacher["mobile"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["mobile"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Father Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["fatherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="fatherName"
                          value={this.state.fieldsTeacher["fatherName"] ? this.state.fieldsTeacher["fatherName"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Father Name' type="text" />
                        {this.state.errorsTeacher["fatherName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["fatherName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Mother Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["motherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="motherName"
                          value={this.state.fieldsTeacher["motherName"] ? this.state.fieldsTeacher["motherName"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Mother Name' type="text" />
                        {this.state.errorsTeacher["motherName"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["motherName"]}
                          </div>
                          : null}
                      </div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-4'>Employee Department Name</label>
                        <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                          <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                            name="department">
                            {
                              getAllDepartment && getAllDepartment.length > 0 ?
                                getAllDepartment.map((element, index) => (
                                  <React.Fragment>
                                    <option value={element && element.id ? element.id : null}>{element && element.deprtName ? element.deprtName : null}</option>
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
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Designation Name</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["Designation"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="Designation"
                          value={this.state.fieldsTeacher["Designation"] ? this.state.fieldsTeacher["Designation"] : ''}
                          onChange={this.inputChange} placeholder='Enter Employee Designation Name' type="text" />
                        {this.state.errorsTeacher["Designation"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["Designation"]}
                          </div>
                          : null}
                      </div>

                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Join Date</label>
                        <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsTeacher["joinDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                          name="joinDate"
                          value={this.state.fieldsTeacher["joinDate"] ? this.state.fieldsTeacher["joinDate"] : ''}
                          onChange={this.inputChange} placeholder='Enter Join Date' type="text" />
                        {this.state.errorsTeacher["joinDate"] ?
                          <div className="invalid-feedback  text-yellow-600">
                            {this.state.errorsTeacher["joinDate"]}
                          </div>
                          : null}
                      </div>

                      <div className='w-full px-5 pb-4'>
                        <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.teacherSubmit} data-config-id="01_primary-action">Save</button>
                      </div>

                    </div>
                  </div>

                </section>
              </>
          }



          <div className="max-w-full overflow-auto mt-6">
            <div className="inline-block min-w-full">
              <div className="overflow-x-hidden">
                <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                  <thead className="">
                    <tr className="text-left border border-slate-300">
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">S.No.</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Code</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Name</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Qualification</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Designation</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Mobile</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Email</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Present/Absent</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      getEmployeeList && getEmployeeList.length > 0 ?
                        getEmployeeList.map((element, index) => (
                          <>
                            <tr className="border border-slate-300">
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{index}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.code ? element.code : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.fname ? element.fname : "-"}{element && element.lname ? element.lname : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.fname ? element.fname : "-"}{element && element.lname ? element.lname : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.department ? element.department : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.Designation ? element.Designation : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.mobile ? element.mobile : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">{element && element.rollNo ? element.rollNo : "-"}</td>
                              <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap"><button className='bg-red-600 text-white rounded-sm py-0.5 px-2 text-sm'>Absent</button></td>
                              <td className='flex space-x-1'>
                                <span className='hover:bg-[#FF7F50] text-blue-500 hover:text-white cursor-pointer border border-none rounded-full px-1.5 py-1'>
                                  <MdOutlineEdit className='h-5 w-5' onClick={() => this.handleUpadte(element)} />
                                </span>
                                <span className='hover:bg-[#FF7F50] text-blue-500 hover:text-white cursor-pointer border border-none rounded-full p-1'>
                                  <MdOutlineClose className='h-6 w-6' onClick={() => this.deleteUser(element)} />
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
export default connect(mapStateToProps)(CreateEmployee);