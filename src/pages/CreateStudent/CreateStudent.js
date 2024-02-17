import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class Students extends Component {

  constructor(props) {
    super(props);
    this.studentSubmit = this.studentSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsStudent: {},
      errorsStudent: {},
      fieldsStudentUpdate: {},
      errorsStudentUpdate: {},
      updateShow: false
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getStudentList(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
    this.props.dispatch(dashboardActions.getStudentList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsStudentUpdate: {},
        errorsStudentUpdate: {},
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
    let fieldsStudent = this.state.fieldsStudent;
    let errorsStudent = this.state.errorsStudent;
    fieldsStudent[name] = value;
    errorsStudent[name] = "";
    console.log(name, value);
    this.setState({ fieldsStudent, errorsStudent });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let { fieldsStudentUpdate } = this.state;
    let { errorsStudentUpdate } = this.state;
    fieldsStudentUpdate[name] = value;
    errorsStudentUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsStudentUpdate, errorsStudentUpdate });
  }

  studentSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { rollNo, mName, lName, fatherName, motherName, prevInstName, prevInstAddr, prevQualification, admissionNo, academicYr, joinDate, course, batch, fName, dob, gender, nationality, religion, aadharNo, prmtAddr, presentAddr, city, pin, country, state, mobile, email, image, fatherMo, motherMo, stdWeight, stdHeight, stdBloodG
      } = this.state.fieldsStudent;
      this.props.dispatch(dashboardActions.createStudent({
        rollNo: rollNo,
        mName: mName,
        lName: lName,
        fatherName: fatherName,
        motherName: motherName,
        prevInstName: prevInstName,
        prevInstAddr: prevInstAddr,
        prevQualification: prevQualification,
        admissionNo: admissionNo,
        academicYr: academicYr,
        joinDate: joinDate,
        course: course,
        batch: batch,
        fName: fName,
        dob: dob,
        gender: gender,
        nationality: nationality,
        religion: religion,
        aadharNo: aadharNo,
        prmtAddr: prmtAddr,
        presentAddr: presentAddr,
        city: city,
        pin: pin,
        country: country,
        state: state,
        mobile: mobile,
        email: email,
        image: image,
        fatherMo: fatherMo,
        motherMo: motherMo,
        stdWeight: stdWeight,
        stdHeight: stdHeight,
        stdBloodG: stdBloodG,
      }, this.props));
    }
  }
  studentUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { id, rollNo, mName, lName, fatherName, motherName, prevInstName, prevInstAddr, prevQualification, admissionNo, academicYr, joinDate, course, batch, fName, dob, gender, nationality, religion, aadharNo, prmtAddr, presentAddr, city, pin, country, state, mobile, email, image, fatherMo, motherMo, stdWeight, stdHeight, stdBloodG
      } = this.state.fieldsStudentUpdate;
      this.props.dispatch(dashboardActions.updateStudent({
        id: id,
        rollNo: rollNo,
        mName: mName,
        lName: lName,
        fatherName: fatherName,
        motherName: motherName,
        prevInstName: prevInstName,
        prevInstAddr: prevInstAddr,
        prevQualification: prevQualification,
        admissionNo: admissionNo,
        academicYr: academicYr,
        joinDate: joinDate,
        course: course,
        batch: batch,
        fName: fName,
        dob: dob,
        gender: gender,
        nationality: nationality,
        religion: religion,
        aadharNo: aadharNo,
        prmtAddr: prmtAddr,
        presentAddr: presentAddr,
        city: city,
        pin: pin,
        country: country,
        state: state,
        mobile: mobile,
        email: email,
        image: image,
        fatherMo: fatherMo,
        motherMo: motherMo,
        stdWeight: stdWeight,
        stdHeight: stdHeight,
        stdBloodG: stdBloodG,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsStudent: {},
      errorsStudent: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsStudent = this.state.fieldsStudent;
    let errorsStudent = {};
    let formIsValid = true;
    if (!fieldsStudent["rollNo"]) {
      formIsValid = false;
      errorsStudent["rollNo"] = "Please enter rollNo";
    }
    if (!fieldsStudent["mName"]) {
      formIsValid = false;
      errorsStudent["mName"] = "Please enter mName";
    }
    if (!fieldsStudent["lName"]) {
      formIsValid = false;
      errorsStudent["lName"] = "Please enter lName";
    }
    if (!fieldsStudent["fatherName"]) {
      formIsValid = false;
      errorsStudent["fatherName"] = "Please enter fatherName";
    }
    if (!fieldsStudent["motherName"]) {
      formIsValid = false;
      errorsStudent["motherName"] = "Please enter motherName";
    }
    if (!fieldsStudent["prevInstName"]) {
      formIsValid = false;
      errorsStudent["prevInstName"] = "Please enter prevInstName";
    }
    if (!fieldsStudent["prevInstAddr"]) {
      formIsValid = false;
      errorsStudent["prevInstAddr"] = "Please enter prevInstAddr";
    }
    if (!fieldsStudent["prevQualification"]) {
      formIsValid = false;
      errorsStudent["prevQualification"] = "Please enter prevQualification";
    }
    if (!fieldsStudent["admissionNo"]) {
      formIsValid = false;
      errorsStudent["admissionNo"] = "Please enter admissionNo";
    }
    if (!fieldsStudent["academicYr"]) {
      formIsValid = false;
      errorsStudent["academicYr"] = "Please enter academicYr";
    }
    if (!fieldsStudent["joinDate"]) {
      formIsValid = false;
      errorsStudent["joinDate"] = "Please enter joinDate";
    }
    if (!fieldsStudent["course"]) {
      formIsValid = false;
      errorsStudent["course"] = "Please enter course";
    }
    if (!fieldsStudent["batch"]) {
      formIsValid = false;
      errorsStudent["batch"] = "Please enter batch";
    }
    if (!fieldsStudent["fName"]) {
      formIsValid = false;
      errorsStudent["fName"] = "Please enter fName";
    }
    if (!fieldsStudent["dob"]) {
      formIsValid = false;
      errorsStudent["dob"] = "Please enter dob";
    }
    if (!fieldsStudent["gender"]) {
      formIsValid = false;
      errorsStudent["gender"] = "Please enter gender";
    }
    if (!fieldsStudent["nationality"]) {
      formIsValid = false;
      errorsStudent["nationality"] = "Please enter nationality";
    }
    if (!fieldsStudent["religion"]) {
      formIsValid = false;
      errorsStudent["religion"] = "Please enter religion";
    }
    if (!fieldsStudent["aadharNo"]) {
      formIsValid = false;
      errorsStudent["aadharNo"] = "Please enter aadharNo";
    }
    if (!fieldsStudent["prmtAddr"]) {
      formIsValid = false;
      errorsStudent["prmtAddr"] = "Please enter prmtAddr";
    }
    if (!fieldsStudent["presentAddr"]) {
      formIsValid = false;
      errorsStudent["presentAddr"] = "Please enter presentAddr";
    }
    if (!fieldsStudent["city"]) {
      formIsValid = false;
      errorsStudent["city"] = "Please enter city";
    }
    if (!fieldsStudent["pin"]) {
      formIsValid = false;
      errorsStudent["pin"] = "Please enter pin";
    }
    if (!fieldsStudent["country"]) {
      formIsValid = false;
      errorsStudent["country"] = "Please enter country";
    }
    if (!fieldsStudent["state"]) {
      formIsValid = false;
      errorsStudent["state"] = "Please enter state";
    }
    if (!fieldsStudent["mobile"]) {
      formIsValid = false;
      errorsStudent["mobile"] = "Please enter mobile";
    }
    if (!fieldsStudent["email"]) {
      formIsValid = false;
      errorsStudent["email"] = "Please enter email";
    }
    if (!fieldsStudent["image"]) {
      formIsValid = false;
      errorsStudent["image"] = "Please enter image";
    }
    if (!fieldsStudent["fatherMo"]) {
      formIsValid = false;
      errorsStudent["fatherMo"] = "Please enter fatherMo";
    }
    if (!fieldsStudent["motherMo"]) {
      formIsValid = false;
      errorsStudent["motherMo"] = "Please enter motherMo";
    }
    if (!fieldsStudent["stdWeight"]) {
      formIsValid = false;
      errorsStudent["stdWeight"] = "Please enter stdWeight";
    }
    if (!fieldsStudent["stdHeight"]) {
      formIsValid = false;
      errorsStudent["stdHeight"] = "Please enter stdHeight";
    }
    if (!fieldsStudent["stdBloodG"]) {
      formIsValid = false;
      errorsStudent["stdBloodG"] = "Please enter stdBloodG";
    }
    console.log('errorsStudenterrorsStudenterrorsStudent', errorsStudent);
    this.setState({ errorsStudent: errorsStudent });
    return formIsValid;
  }


  handleValidationUpdateBatch = () => {
    let fieldsStudentUpdate = this.state.fieldsStudentUpdate;
    let errorsStudentUpdate = {};
    let formIsValid = true;
    if (!fieldsStudentUpdate["rollNo"]) {
      formIsValid = false;
      errorsStudentUpdate["rollNo"] = "Please enter rollNo";
    }
    if (!fieldsStudentUpdate["mName"]) {
      formIsValid = false;
      errorsStudentUpdate["mName"] = "Please enter mName";
    }
    if (!fieldsStudentUpdate["lName"]) {
      formIsValid = false;
      errorsStudentUpdate["lName"] = "Please enter lName";
    }
    if (!fieldsStudentUpdate["fatherName"]) {
      formIsValid = false;
      errorsStudentUpdate["fatherName"] = "Please enter fatherName";
    }
    if (!fieldsStudentUpdate["motherName"]) {
      formIsValid = false;
      errorsStudentUpdate["motherName"] = "Please enter motherName";
    }
    if (!fieldsStudentUpdate["prevInstName"]) {
      formIsValid = false;
      errorsStudentUpdate["prevInstName"] = "Please enter prevInstName";
    }
    if (!fieldsStudentUpdate["prevInstAddr"]) {
      formIsValid = false;
      errorsStudentUpdate["prevInstAddr"] = "Please enter prevInstAddr";
    }
    if (!fieldsStudentUpdate["prevQualification"]) {
      formIsValid = false;
      errorsStudentUpdate["prevQualification"] = "Please enter prevQualification";
    }
    if (!fieldsStudentUpdate["admissionNo"]) {
      formIsValid = false;
      errorsStudentUpdate["admissionNo"] = "Please enter admissionNo";
    }
    if (!fieldsStudentUpdate["academicYr"]) {
      formIsValid = false;
      errorsStudentUpdate["academicYr"] = "Please enter academicYr";
    }
    if (!fieldsStudentUpdate["joinDate"]) {
      formIsValid = false;
      errorsStudentUpdate["joinDate"] = "Please enter joinDate";
    }
    if (!fieldsStudentUpdate["course"]) {
      formIsValid = false;
      errorsStudentUpdate["course"] = "Please enter course";
    }
    if (!fieldsStudentUpdate["batch"]) {
      formIsValid = false;
      errorsStudentUpdate["batch"] = "Please enter batch";
    }
    if (!fieldsStudentUpdate["fName"]) {
      formIsValid = false;
      errorsStudentUpdate["fName"] = "Please enter fName";
    }
    if (!fieldsStudentUpdate["dob"]) {
      formIsValid = false;
      errorsStudentUpdate["dob"] = "Please enter dob";
    }
    if (!fieldsStudentUpdate["gender"]) {
      formIsValid = false;
      errorsStudentUpdate["gender"] = "Please enter gender";
    }
    if (!fieldsStudentUpdate["nationality"]) {
      formIsValid = false;
      errorsStudentUpdate["nationality"] = "Please enter nationality";
    }
    if (!fieldsStudentUpdate["religion"]) {
      formIsValid = false;
      errorsStudentUpdate["religion"] = "Please enter religion";
    }
    if (!fieldsStudentUpdate["aadharNo"]) {
      formIsValid = false;
      errorsStudentUpdate["aadharNo"] = "Please enter aadharNo";
    }
    if (!fieldsStudentUpdate["prmtAddr"]) {
      formIsValid = false;
      errorsStudentUpdate["prmtAddr"] = "Please enter prmtAddr";
    }
    if (!fieldsStudentUpdate["presentAddr"]) {
      formIsValid = false;
      errorsStudentUpdate["presentAddr"] = "Please enter presentAddr";
    }
    if (!fieldsStudentUpdate["city"]) {
      formIsValid = false;
      errorsStudentUpdate["city"] = "Please enter city";
    }
    if (!fieldsStudentUpdate["pin"]) {
      formIsValid = false;
      errorsStudentUpdate["pin"] = "Please enter pin";
    }
    if (!fieldsStudentUpdate["country"]) {
      formIsValid = false;
      errorsStudentUpdate["country"] = "Please enter country";
    }
    if (!fieldsStudentUpdate["state"]) {
      formIsValid = false;
      errorsStudentUpdate["state"] = "Please enter state";
    }
    if (!fieldsStudentUpdate["mobile"]) {
      formIsValid = false;
      errorsStudentUpdate["mobile"] = "Please enter mobile";
    }
    if (!fieldsStudentUpdate["email"]) {
      formIsValid = false;
      errorsStudentUpdate["email"] = "Please enter email";
    }
    if (!fieldsStudentUpdate["image"]) {
      formIsValid = false;
      errorsStudentUpdate["image"] = "Please enter image";
    }
    if (!fieldsStudentUpdate["fatherMo"]) {
      formIsValid = false;
      errorsStudentUpdate["fatherMo"] = "Please enter fatherMo";
    }
    if (!fieldsStudentUpdate["motherMo"]) {
      formIsValid = false;
      errorsStudentUpdate["motherMo"] = "Please enter motherMo";
    }
    if (!fieldsStudentUpdate["stdWeight"]) {
      formIsValid = false;
      errorsStudentUpdate["stdWeight"] = "Please enter stdWeight";
    }
    if (!fieldsStudentUpdate["stdHeight"]) {
      formIsValid = false;
      errorsStudentUpdate["stdHeight"] = "Please enter stdHeight";
    }
    if (!fieldsStudentUpdate["stdBloodG"]) {
      formIsValid = false;
      errorsStudentUpdate["stdBloodG"] = "Please enter stdBloodG";
    }
    console.log('errorsStudentUpdateerrorsStudentUpdateerrorsStudentUpdate', errorsStudentUpdate);
    this.setState({ errorsStudentUpdate: errorsStudentUpdate });
    return formIsValid;
  }

  handleUpadte = (data) => {
    this.setState({ fieldsStudentUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteStudent(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { loading, getAllCourse, getAllBatch, getStudentList } = dashboard;

    console.log("RENDER_____________getAllCourse___--:::::", getAllCourse);
    console.log("RENDER________________getAllBatch:::::", getAllBatch);


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

          <div className="overflow-auto max-w-full mt-6">
            <div className="inline-block min-w-full  ">
              <div className="overflow-hidden  ">
                <table className="min-w-full text-left divide-y border border-slate-300 border-collapse bg-white">
                  <thead className="">
                    <tr className="text-left border border-slate-300">
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Sl.N.</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Roll no.</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Unique ID</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Student Name</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Mobile No.</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Email Id</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Adm Date</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Course</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Batch</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Guardian Name</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Guardian Mobile</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Manage</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 ">Action</th>
                    </tr>
                  </thead>

                  <tbody className='divide-y' >
                    {
                      getStudentList && getStudentList.length > 0 ?
                        getStudentList.map((element, index) => (
                          <>
                            <tr className="border border-slate-300">
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{index}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.rollNo ? element.rollNo : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.admissionNo ? element.admissionNo : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white  capitalize">{element && element.fName ? element.fName : "-"}{element && element.mName ? element.mName : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize">{element && element.mobile ? element.mobile : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize">{element && element.email ? element.email : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize">{element && element.joinDate ? element.joinDate : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white ">{element && element.course ? element.course : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.batch ? element.batch : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase">{element && element.fatherName ? element.fatherName : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white">{element && element.fatherMo ? element.fatherMo : "-"}</td>
                              <td className="whitespace-nowrap text-left px-4 py-3 text-sm font-serif text-black bg-white">{element && element.gender ? element.gender : "-"}</td>
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
                        )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj"></td>
                    }

                  </tbody>

                </table>
              </div>
            </div>
          </div>


          {
            this.state.updateShow ?
              <>
                <section className='space-y-6 bg-white border border-slate-300'>
                  <div>
                    <div className='border-b border-slate-300 pl-5 py-4'>
                      <h1 className='text-xl text-gray-500'>Update Student Admission</h1>
                    </div>
                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest py-3 text-sm leading-normal font-semibold text-black/80 '>officail details:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Admission Number</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["admissionNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="admissionNo"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.admissionNo ? this.state.fieldsStudentUpdate.admissionNo : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Admission Number' type="text" />
                          {this.state.errorsStudentUpdate["admissionNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["admissionNo"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class='text-sm font-normal text-gray-600 pb-4'>Academic Year</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["academicYr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="academicYr"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.academicYr ? this.state.fieldsStudentUpdate.academicYr : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Academic Year' type="text" />
                          {this.state.errorsStudentUpdate["academicYr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["academicYr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Joining Date</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["joinDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="joinDate"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.joinDate ? this.state.fieldsStudentUpdate.joinDate : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Total Working Days' type="Date" />
                          {this.state.errorsStudentUpdate["joinDate"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["joinDate"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Course</label>
                          <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                            <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                              name="course">
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
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Batch Name</label>
                          <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                            <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChangeUpdate}
                              name="batch">
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
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Roll No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["rollNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="rollNo"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.rollNo ? this.state.fieldsStudentUpdate.rollNo : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Roll No.' type="text" />
                          {this.state.errorsStudentUpdate["rollNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["rollNo"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80'>personal details:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>First Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["fName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="fName"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.fName ? this.state.fieldsStudentUpdate.fName : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter First' type="text" />
                          {this.state.errorsStudentUpdate["fName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["fName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Middle Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["mName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="mName"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.mName ? this.state.fieldsStudentUpdate.mName : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter First Name' type="text" />
                          {this.state.errorsStudentUpdate["mName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["mName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Last Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["lName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="lName"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.lName ? this.state.fieldsStudentUpdate.lName : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter First Name' type="text" />
                          {this.state.errorsStudentUpdate["lName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["lName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Date of Birth</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["dob"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="dob"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.dob ? this.state.fieldsStudentUpdate.dob : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Date of Birth' type="date" />
                          {this.state.errorsStudentUpdate["dob"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["dob"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Gender</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["gender"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="gender"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.gender ? this.state.fieldsStudentUpdate.gender : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Gender' type="text" />
                          {this.state.errorsStudentUpdate["gender"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["gender"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Nationality</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["nationality"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="nationality"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.nationality ? this.state.fieldsStudentUpdate.nationality : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Nationality' type="text" />
                          {this.state.errorsStudentUpdate["nationality"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["nationality"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Religion</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["religion"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="religion"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.religion ? this.state.fieldsStudentUpdate.religion : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Religion' type="text" />
                          {this.state.errorsStudentUpdate["religion"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["religion"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Aadhar No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["aadharNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="aadharNo"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.aadharNo ? this.state.fieldsStudentUpdate.aadharNo : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Aadhar No.' type="text" />
                          {this.state.errorsStudentUpdate["aadharNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["aadharNo"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80 '>Contact details:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Permanent Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["prmtAddr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prmtAddr"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.prmtAddr ? this.state.fieldsStudentUpdate.prmtAddr : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Permanent Address' type="text" />
                          {this.state.errorsStudentUpdate["prmtAddr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["prmtAddr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Present Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["presentAddr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="presentAddr"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.presentAddr ? this.state.fieldsStudentUpdate.presentAddr : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Present Address' type="text" />
                          {this.state.errorsStudentUpdate["presentAddr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["presentAddr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>City</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["city"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="city"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.city ? this.state.fieldsStudentUpdate.city : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter City' type="text" />
                          {this.state.errorsStudentUpdate["city"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["city"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>State</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["state"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="state"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.state ? this.state.fieldsStudentUpdate.state : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter state' type="text" />
                          {this.state.errorsStudentUpdate["state"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["state"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Country</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["country"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="country"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.country ? this.state.fieldsStudentUpdate.country : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Country' type="text" />
                          {this.state.errorsStudentUpdate["country"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["country"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Pin</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["pin"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="pin"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.pin ? this.state.fieldsStudentUpdate.pin : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Pin' type="text" />
                          {this.state.errorsStudentUpdate["pin"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["pin"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Mobile No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["mobile"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="mobile"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.mobile ? this.state.fieldsStudentUpdate.mobile : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Mobile No.' type="text" />
                          {this.state.errorsStudentUpdate["mobile"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["mobile"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Email Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["email"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="email"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.email ? this.state.fieldsStudentUpdate.email : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Email Address' type="text" />
                          {this.state.errorsStudentUpdate["email"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["email"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Upload Photo</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["image"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="image"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.image ? this.state.fieldsStudentUpdate.image : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Upload Photo' type="text" />
                          {this.state.errorsStudentUpdate["image"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["image"]}
                            </div>
                            : null}
                        </div>

                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80 '>Guardian details:-</h1>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Father Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["fatherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="fatherName"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.fatherName ? this.state.fieldsStudentUpdate.fatherName : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Father Name' type="text" />
                          {this.state.errorsStudentUpdate["fatherName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["fatherName"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Mother Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["motherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="motherName"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.motherName ? this.state.fieldsStudentUpdate.motherName : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Mother Name' type="text" />
                          {this.state.errorsStudentUpdate["motherName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["motherName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Father Mobile No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["fatherMo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="fatherMo"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.fatherMo ? this.state.fieldsStudentUpdate.fatherMo : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Father Mobile No.' type="text" />
                          {this.state.errorsStudentUpdate["fatherMo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["fatherMo"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Mother Mobile No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["motherMo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="motherMo"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.motherMo ? this.state.fieldsStudentUpdate.motherMo : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Mother Mobile No.' type="text" />
                          {this.state.errorsStudentUpdate["motherMo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["motherMo"]}
                            </div>
                            : null}
                        </div>

                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80'>student health record:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Weight</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["stdWeight"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="stdWeight"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.stdWeight ? this.state.fieldsStudentUpdate.stdWeight : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudentUpdate["stdWeight"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["stdWeight"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Height</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["stdHeight"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="stdHeight"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.stdHeight ? this.state.fieldsStudentUpdate.stdHeight : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudentUpdate["stdHeight"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["stdHeight"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Blood Group</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["stdBloodG"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="stdBloodG"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.stdBloodG ? this.state.fieldsStudentUpdate.stdBloodG : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudentUpdate["stdBloodG"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["stdBloodG"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>
                    <div className='mx-4'>
                      <div><h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80'>Previous Qualification:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Previous School Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["prevInstName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prevInstName"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.prevInstName ? this.state.fieldsStudentUpdate.prevInstName : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudentUpdate["prevInstName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["prevInstName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Previous School Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["prevInstAddr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prevInstAddr"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.prevInstAddr ? this.state.fieldsStudentUpdate.prevInstAddr : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudentUpdate["prevInstAddr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["prevInstAddr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Previous School Qualification</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudentUpdate["prevQualification"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prevQualification"
                            value={this.state.fieldsStudentUpdate && this.state.fieldsStudentUpdate.prevQualification ? this.state.fieldsStudentUpdate.prevQualification : ""}
                            onChange={this.inputChangeUpdate} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudentUpdate["prevQualification"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudentUpdate["prevQualification"]}
                            </div>
                            : null}
                        </div>

                      </div>
                    </div>

                    <div className='mx-4 px-2 pb-4'>
                      <button className='text-white bg-sky-500 px-4 py-2' type='button' onClick={this.studentUpdateSubmit}>Save</button>
                    </div>
                  </div>
                </section>
              </>
              :
              <>
                <section className='space-y-6 bg-white border border-slate-300'>
                  <div>
                    <div className='border-b border-slate-300 pl-5 py-4'>
                      <h1 className='text-xl text-gray-500'>Add Student Admission</h1>
                    </div>
                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest py-3 text-sm leading-normal font-semibold text-black/80'>officail details:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Admission Number</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["admissionNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="admissionNo"
                            value={this.state.fieldsStudent["admissionNo"] ? this.state.fieldsStudent["admissionNo"] : ''}
                            onChange={this.inputChange} placeholder='Enter Admission Number' type="text" />
                          {this.state.errorsStudent["admissionNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["admissionNo"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class='text-sm font-normal text-gray-600 pb-4'>Academic Year</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["academicYr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="academicYr"
                            value={this.state.fieldsStudent["academicYr"] ? this.state.fieldsStudent["academicYr"] : ''}
                            onChange={this.inputChange} placeholder='Enter Academic Year' type="text" />
                          {this.state.errorsStudent["academicYr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["academicYr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Joining Date</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["joinDate"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="joinDate"
                            value={this.state.fieldsStudent["joinDate"] ? this.state.fieldsStudent["joinDate"] : ''}
                            onChange={this.inputChange} placeholder='Enter Total Working Days' type="Date" />
                          {this.state.errorsStudent["joinDate"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["joinDate"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Course</label>
                          <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                            <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                              name="course">
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
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Batch Name</label>
                          <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                            <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none text-gray-700" onChange={this.inputChange}
                              name="batch">
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
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Roll No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["rollNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="rollNo"
                            value={this.state.fieldsStudent["rollNo"] ? this.state.fieldsStudent["rollNo"] : ''}
                            onChange={this.inputChange} placeholder='Enter Roll No.' type="text" />
                          {this.state.errorsStudent["rollNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["rollNo"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80'>personal details:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>First Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["fName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="fName"
                            value={this.state.fieldsStudent["fName"] ? this.state.fieldsStudent["fName"] : ''}
                            onChange={this.inputChange} placeholder='Enter First' type="text" />
                          {this.state.errorsStudent["fName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["fName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Middle Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["mName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="mName"
                            value={this.state.fieldsStudent["mName"] ? this.state.fieldsStudent["mName"] : ''}
                            onChange={this.inputChange} placeholder='Enter First Name' type="text" />
                          {this.state.errorsStudent["mName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["mName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Last Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["lName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="lName"
                            value={this.state.fieldsStudent["lName"] ? this.state.fieldsStudent["lName"] : ''}
                            onChange={this.inputChange} placeholder='Enter First Name' type="text" />
                          {this.state.errorsStudent["lName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["lName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Date of Birth</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["dob"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="dob"
                            value={this.state.fieldsStudent["dob"] ? this.state.fieldsStudent["dob"] : ''}
                            onChange={this.inputChange} placeholder='Enter Date of Birth' type="date" />
                          {this.state.errorsStudent["dob"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["dob"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Gender</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["gender"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="gender"
                            value={this.state.fieldsStudent["gender"] ? this.state.fieldsStudent["gender"] : ''}
                            onChange={this.inputChange} placeholder='Enter Gender' type="text" />
                          {this.state.errorsStudent["gender"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["gender"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Nationality</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["nationality"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="nationality"
                            value={this.state.fieldsStudent["nationality"] ? this.state.fieldsStudent["nationality"] : ''}
                            onChange={this.inputChange} placeholder='Enter Nationality' type="text" />
                          {this.state.errorsStudent["nationality"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["nationality"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Religion</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["religion"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="religion"
                            value={this.state.fieldsStudent["religion"] ? this.state.fieldsStudent["religion"] : ''}
                            onChange={this.inputChange} placeholder='Enter Religion' type="text" />
                          {this.state.errorsStudent["religion"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["religion"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Aadhar No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["aadharNo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="aadharNo"
                            value={this.state.fieldsStudent["aadharNo"] ? this.state.fieldsStudent["aadharNo"] : ''}
                            onChange={this.inputChange} placeholder='Enter Aadhar No.' type="text" />
                          {this.state.errorsStudent["aadharNo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["aadharNo"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80 '>Contact details:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Permanent Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["prmtAddr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prmtAddr"
                            value={this.state.fieldsStudent["prmtAddr"] ? this.state.fieldsStudent["prmtAddr"] : ''}
                            onChange={this.inputChange} placeholder='Enter Permanent Address' type="text" />
                          {this.state.errorsStudent["prmtAddr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["prmtAddr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Present Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["presentAddr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="presentAddr"
                            value={this.state.fieldsStudent["presentAddr"] ? this.state.fieldsStudent["presentAddr"] : ''}
                            onChange={this.inputChange} placeholder='Enter Present Address' type="text" />
                          {this.state.errorsStudent["presentAddr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["presentAddr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>City</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["city"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="city"
                            value={this.state.fieldsStudent["city"] ? this.state.fieldsStudent["city"] : ''}
                            onChange={this.inputChange} placeholder='Enter City' type="text" />
                          {this.state.errorsStudent["city"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["city"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>State</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["state"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="state"
                            value={this.state.fieldsStudent["state"] ? this.state.fieldsStudent["state"] : ''}
                            onChange={this.inputChange} placeholder='Enter state' type="text" />
                          {this.state.errorsStudent["state"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["state"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Country</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["country"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="country"
                            value={this.state.fieldsStudent["country"] ? this.state.fieldsStudent["country"] : ''}
                            onChange={this.inputChange} placeholder='Enter Country' type="text" />
                          {this.state.errorsStudent["country"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["country"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Pin</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["pin"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="pin"
                            value={this.state.fieldsStudent["pin"] ? this.state.fieldsStudent["pin"] : ''}
                            onChange={this.inputChange} placeholder='Enter Pin' type="text" />
                          {this.state.errorsStudent["pin"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["pin"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Mobile No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["mobile"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="mobile"
                            value={this.state.fieldsStudent["mobile"] ? this.state.fieldsStudent["mobile"] : ''}
                            onChange={this.inputChange} placeholder='Enter Mobile No.' type="text" />
                          {this.state.errorsStudent["mobile"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["mobile"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Email Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["email"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="email"
                            value={this.state.fieldsStudent["email"] ? this.state.fieldsStudent["email"] : ''}
                            onChange={this.inputChange} placeholder='Enter Email Address' type="text" />
                          {this.state.errorsStudent["email"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["email"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Upload Photo</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["image"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="image"
                            value={this.state.fieldsStudent["image"] ? this.state.fieldsStudent["image"] : ''}
                            onChange={this.inputChange} placeholder='Enter Upload Photo' type="text" />
                          {this.state.errorsStudent["image"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["image"]}
                            </div>
                            : null}
                        </div>

                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80 '>Guardian details:-</h1>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Father Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["fatherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="fatherName"
                            value={this.state.fieldsStudent["fatherName"] ? this.state.fieldsStudent["fatherName"] : ''}
                            onChange={this.inputChange} placeholder='Enter Father Name' type="text" />
                          {this.state.errorsStudent["fatherName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["fatherName"]}
                            </div>
                            : null}
                        </div>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Mother Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["motherName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="motherName"
                            value={this.state.fieldsStudent["motherName"] ? this.state.fieldsStudent["motherName"] : ''}
                            onChange={this.inputChange} placeholder='Enter Mother Name' type="text" />
                          {this.state.errorsStudent["motherName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["motherName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Father Mobile No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["fatherMo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="fatherMo"
                            value={this.state.fieldsStudent["fatherMo"] ? this.state.fieldsStudent["fatherMo"] : ''}
                            onChange={this.inputChange} placeholder='Enter Father Mobile No.' type="text" />
                          {this.state.errorsStudent["fatherMo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["fatherMo"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Mother Mobile No.</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["motherMo"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="motherMo"
                            value={this.state.fieldsStudent["motherMo"] ? this.state.fieldsStudent["motherMo"] : ''}
                            onChange={this.inputChange} placeholder='Enter Mother Mobile No.' type="text" />
                          {this.state.errorsStudent["motherMo"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["motherMo"]}
                            </div>
                            : null}
                        </div>

                      </div>
                    </div>

                    <div className='mx-4'>
                      <div>
                        <h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80'>student health record:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>
                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Weight</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["stdWeight"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="stdWeight"
                            value={this.state.fieldsStudent["stdWeight"] ? this.state.fieldsStudent["stdWeight"] : ''}
                            onChange={this.inputChange} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudent["stdWeight"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["stdWeight"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Height</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["stdHeight"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="stdHeight"
                            value={this.state.fieldsStudent["stdHeight"] ? this.state.fieldsStudent["stdHeight"] : ''}
                            onChange={this.inputChange} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudent["stdHeight"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["stdHeight"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Blood Group</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["stdBloodG"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="stdBloodG"
                            value={this.state.fieldsStudent["stdBloodG"] ? this.state.fieldsStudent["stdBloodG"] : ''}
                            onChange={this.inputChange} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudent["stdBloodG"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["stdBloodG"]}
                            </div>
                            : null}
                        </div>
                      </div>
                    </div>
                    <div className='mx-4'>
                      <div><h1 className='uppercase tracking-widest pb-5 text-sm leading-normal font-semibold text-black/80'>Previous Qualification:-</h1>
                      </div>
                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-purple-400 py-5 px-2'>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Previous School Name</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["prevInstName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prevInstName"
                            value={this.state.fieldsStudent["prevInstName"] ? this.state.fieldsStudent["prevInstName"] : ''}
                            onChange={this.inputChange} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudent["prevInstName"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["prevInstName"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Previous School Address</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["prevInstAddr"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prevInstAddr"
                            value={this.state.fieldsStudent["prevInstAddr"] ? this.state.fieldsStudent["prevInstAddr"] : ''}
                            onChange={this.inputChange} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudent["prevInstAddr"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["prevInstAddr"]}
                            </div>
                            : null}
                        </div>

                        <div>
                          <label class=' text-sm font-normal text-gray-600 pb-2'>Previous School Qualification</label>
                          <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsStudent["prevQualification"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                            name="prevQualification"
                            value={this.state.fieldsStudent["prevQualification"] ? this.state.fieldsStudent["prevQualification"] : ''}
                            onChange={this.inputChange} placeholder='Enter Weight Kg' type="text" />
                          {this.state.errorsStudent["prevQualification"] ?
                            <div className="invalid-feedback  text-yellow-600">
                              {this.state.errorsStudent["prevQualification"]}
                            </div>
                            : null}
                        </div>

                      </div>
                    </div>

                    <div className='mx-4 px-2 pb-4'>
                      <button className='text-white bg-sky-500 px-4 py-2' type='button' onClick={this.studentSubmit}>Save</button>
                    </div>
                  </div>
                </section>
              </>
          }





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