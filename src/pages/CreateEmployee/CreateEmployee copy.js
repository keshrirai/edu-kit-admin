import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineEdit, MdOutlineClose } from 'react-icons/md';
import { ImEye } from 'react-icons/im';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.courseSubmit = this.courseSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      fieldsCourse: {},
      errorsCourse: {},
    }
  }

  componentDidMount() {
    let data = {
      "txType": "WITHDRAW",
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    // this.props.dispatch(dashboardActions.getTx(data));
  }

  inputChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsCourse = this.state.fieldsCourse;
    let errorsCourse = this.state.errorsCourse;
    fieldsCourse[name] = value;
    errorsCourse[name] = "";
    console.log(name, value);
    this.setState({ fieldsCourse, errorsCourse });
  }

  courseSubmit(e) {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { deprtId, cCode, cName, desc, tWDays, syllabusName, minAttendPer, attendtype } = this.state.fieldsCourse;
      this.props.dispatch(dashboardActions.createCourse({
        deprtId: deprtId,
        cCode: cCode,
        cName: cName,
        desc: desc,
        tWDays: tWDays,
        syllabusName: syllabusName,
        minAttendPer: minAttendPer,
        attendtype: attendtype,
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsCourse: {},
      errorsCourse: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsCourse = this.state.fieldsCourse;
    let errorsCourse = {};
    let formIsValid = true;
    //deprtId
    if (!fieldsCourse["deprtId"]) {
      formIsValid = false;
      errorsCourse["deprtId"] = "Please enter Batch Name!";
    }
    //cCode
    if (!fieldsCourse["cCode"]) {
      formIsValid = false;
      errorsCourse["cCode"] = "Please select cCode!";
    }
    //cName
    if (!fieldsCourse["cName"]) {
      formIsValid = false;
      errorsCourse["cName"] = "Please select cName!";
    }
    //desc
    if (!fieldsCourse["desc"]) {
      formIsValid = false;
      errorsCourse["desc"] = "Please enter desc!";
    }
    //tWDays
    if (!fieldsCourse["tWDays"]) {
      formIsValid = false;
      errorsCourse["tWDays"] = "Please enter tWDays!";
    }
    //syllabusName
    if (!fieldsCourse["syllabusName"]) {
      formIsValid = false;
      errorsCourse["syllabusName"] = "Please enter syllabusName!";
    }
    //minAttendPer
    if (!fieldsCourse["minAttendPer"]) {
      formIsValid = false;
      errorsCourse["minAttendPer"] = "Please enter minAttendPer!";
    }
    //attendtype
    if (!fieldsCourse["attendtype"]) {
      formIsValid = false;
      errorsCourse["attendtype"] = "Please enter attendtype!";
    }
    this.setState({ errorsCourse: errorsCourse });
    return formIsValid;
  }





  render() {



    let { dashboard } = this.props;
    let { userPromoPackage, } = dashboard;


    return (

      <>

        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section className='space-y-6 bg-white border border-slate-300' >
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
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee First Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Middle Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Last Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Date of Birth</label>
                  <input type='date' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>

                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Mobile No.</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Father Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Mother Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Department Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Employee Department Name</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Join Date</label>
                  <input type='date' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Designation</label>
                  <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                    <select className="appearance-none w-full  pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                      id="txType"
                      name="txType">
                      <option value="ALL">Please Select&hellip;</option>
                      <option value="2018-2019">2018-2019</option>
                      <option value="2019-2020">2019-2020</option>
                      <option value="2020-2021">2020-2021</option>
                      <option value="2021-2022">2021-2022</option>
                      <option value="2022-2023">2022-2023</option>
                    </select>
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Qualification</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>Total Experience</label>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                </div>
                <div>
                  <label class=' text-sm font-normal text-gray-600 pb-2'>User Type</label>
                  <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                    <select className="appearance-none w-full  pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                      id="txType"
                      name="txType">
                      <option value="ALL">Select option&hellip;</option>
                      <option value="2018-2019">2018-2019</option>
                      <option value="2019-2020">2019-2020</option>
                      <option value="2020-2021">2020-2021</option>
                      <option value="2021-2022">2021-2022</option>
                      <option value="2022-2023">2022-2023</option>
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
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='mx-5 border border-slate-300 rounded-sm'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl leading-normal  text-gray-900'>Personal Details</h1>
                </div>
                <div className='p-5'>
                  <div className='space-y-6'>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>First Name</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='First Name' />
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Middle Name</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Middle Name' />
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Last Name</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Last Name' />
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Date of Birth</label>
                      <input type='date' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Gender</label>

                      <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Please Select&hellip;</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Aadhar No.</label>
                      <input type='number' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='0000 0000 0000 0000' />
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>PAN Number</label>
                      <input type='number' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-2'>PF Number</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-2'>ESI</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mx-5 border border-slate-300 rounded-sm'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl leading-normal  text-gray-900'>Contact Details</h1>
                </div>
                <div className='p-5'>
                  <div className='space-y-6'>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Present Address</label>
                      <textarea type='dropdown' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Permanent Address</label>
                      <textarea type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>

                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>City</label>
                      <input type='date' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' />
                    </div>
                    <div>
                      <div>
                        <label class=' text-sm font-normal text-gray-600 pb-2'>Pin</label>
                        <input type='number' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='123456' />
                      </div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>State </label>
                      <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select State&hellip;</option>
                          <option value="Rajsthan">Rajsthan</option>
                          <option value='Delhi'>Delhi</option>
                          <option value='mp'>Madhya Pradesh</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class=' text-sm font-normal text-gray-600 pb-2'>Country</label>
                      <div className='px-3 py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                        <select className="appearance-none w-full  pr-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                          id="txType"
                          name="txType">
                          <option value="ALL">Select Country&hellip;</option>
                          <option value="Indian">Indian</option>
                        </select>
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-2'>Phone No.</label>
                      <input type='number' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='+1234567890' />
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-2'>Mobile No.</label>
                      <input type='number' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='+1234567890' />
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-2'>Email</label>
                      <input type='number' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='abc@comfygen.com' />
                    </div>
                    <div>
                      <label class='text-sm font-normal text-gray-600 pb-2'>Upload Photo</label>
                      <input type="file" id="myFile" className='text-base font-normal w-full' name="filename" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-4 px-2 pb-4'>
              <button className='text-white bg-sky-500 px-4 py-2'>Save</button>
            </div>
            <div className='px-5 border border-slate-300 rounded-sm'>
              <div className='flex justify-between items-center py-6'>
                <div>
                  <h1 className='text-base leading-normal  text-gray-500'>Employee's List</h1>
                </div>
                <div>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Search...' />
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Code</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Employee Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Qualification</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Designation</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Email</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Present/Absent</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">eWEB31383</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Jfon Jfon</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Math </td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Master Degree</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Teacher</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">abc@comfygen</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap"><button className='bg-red-600 text-white rounded-sm py-0.5 px-2 text-sm'>Absent</button></td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><ImEye className='h-6 w-6 text-blue-500' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">eWEB31383</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Jfon Jfon</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Math </td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Master Degree</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Teacher</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">abc@comfygen</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap"><button className='bg-red-600 text-white rounded-sm py-0.5 px-2 text-sm'>Absent</button></td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><ImEye className='h-6 w-6 text-blue-500' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">eWEB31383</td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Jfon Jfon</td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Math </td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Master Degree</td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Teacher</td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">abc@comfygen</td>
                          <td className="text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap"><button className='bg-red-600 text-white rounded-sm py-0.5 px-2 text-sm'>Absent</button></td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><ImEye className='h-6 w-6 text-blue-500' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
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
export default connect(mapStateToProps)(Students);