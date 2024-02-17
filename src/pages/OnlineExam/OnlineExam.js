import React, { Component } from 'react';
import { userActions } from '../../_actions';
import { connect } from 'react-redux';
// import { BsCurrencyDollar } from "react-icons/bs";
// import QRCode, { QRCodeSVG } from 'qrcode.react';
import moment from 'moment';
// import { confirmAlert } from 'react-confirm-alert';
import { ImEye, ImCross } from 'react-icons/im';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import LoadingOverlay from 'react-loading-overlay';
import Countdown from 'react-countdown';
import { Dropdown } from 'rsuite';
const Completionist = () => <span>Expired!</span>;

class Students extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      formField: {},
      errorField: {},
      dateDetails: {
        from_date: new Date(),
        to_date: new Date(),
      },
    }
  }

  // componentDidMount() {

  //   let data = {
  //     "txType": "WITHDRAW",
  //     "keyWord": "",
  //     "pageNo": 1,
  //     "size": 10
  //   }

  //   this.props.dispatch(userActions.getTx(data));
  //   this.props.dispatch(userActions.getDftWallet());
  //   this.props.dispatch(userActions.getUserPromoPackageByUserId());
  // }




  render() {



    let { users } = this.props;
    let { loading, userPromoPackage, } = users;

    // // console.log("RENDER_____________getDftWalletItems___--:::::", getDftWalletItems);
    // console.log("RENDER________________userPromoPackage--:::::", userPromoPackage);


    return (

      <>

        <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div>
        <div className="h-screen overflow-y-auto w-full bg-gray-100 p-6">
          <section>
            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-xl font-normal'>Create Online Exam</h1>
              </div>
              <div className='p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Online Exam Name</label>
                    <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Start Date</label>
                    <input type='date' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>End Date</label>
                    <input type='date' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Online Exam Time(Minutes)</label>
                    <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Pass Marks(Percentage)</label>
                    <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Exam For</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Please Select&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
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
            <div>
              <div className='flex justify-end items-center w-full'>
                <div>
                  <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal placeholder:text-xs font-medium text-black placeholder-gray-400' placeholder='Search...Exam|Course Name' />
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Exam Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Start Date</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">End Date</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Maximum Time(In Minutes)</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Pass Marks(In Percentage)</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Exam Type</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Exam Format</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Course</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Batch</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Evaluator</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Owner</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Test 1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">2022-03-08</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">2022-03-28</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">22</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">22</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">General</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Objective</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">LKG</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">A</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">NA</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Admin</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className='text-sm text-white bg-green-600 rounded-full px-4 py-2'>Add Question</div>
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className='border border-slate-300 bg-white space-y-6 py-7'>
              <div className='px-4'>
                <h1 className='text-lg font-normal'>View Online Exam</h1>
              </div>
              <div className='px-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Exam For</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Please Select&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
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
                        <option value="ALL">Select Course&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                    <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Get Exam Information</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-slate-300 bg-white space-y-6 py-7'>
              <div className='px-4'>
                <h1 className='text-lg font-normal'>Evaluate Exam</h1>
              </div>
              <div className='px-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Select Course&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
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
                        <option value="ALL">Select Batch&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Exam</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Please Select&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Student</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Please Select&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
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
            </div>

            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-xl font-normal'>Exam Wise Result</h1>
              </div>
              <div className='p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Course</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Please Course&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
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
                        <option value="ALL">Select Batch&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Exam</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Select Exam&hellip;</option>
                        <option value="student">Student</option>
                        <option value="applicant">Applicant</option>
                      </select>
                      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700">
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='pt-6'>
                    <button type='submit' className='py-2 px-4 bg-red-500 text-white rounded-sm text-sm'>Print</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-slate-300 bg-white'>
              <div className=' p-4'>
                <h1 className='text-xl font-normal'>Exam Wise Result</h1>
              </div>
              <div className="overflow-auto max-w-full ">
                <div className="inline-block min-w-full  ">
                  <div className="overflow-hidden  ">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Admission Number</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Roll No.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Student Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Score</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">WEB102</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">220111</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">EGBUA DEFECENCY</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">-----</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white whitespace-nowrap">Exam Not Attend</td>
                        </tr>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">WEB102</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">220111</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">EGBUA DEFECENCY</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">-----</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white whitespace-nowrap">Exam Not Attend</td>
                        </tr>
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">WEB102</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">220111</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">EGBUA DEFECENCY</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">-----</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white whitespace-nowrap">Exam Not Attend</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </>

    );
  }
}

function mapStateToProps(state) {
  const { users } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    setting
  };
}
export default connect(mapStateToProps)(Students);