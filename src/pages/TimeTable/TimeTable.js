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
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='border border-slate-300 bg-white'>
                <div className='border-b border-slate-300 p-4'>
                  <h1 className='text-xl font-normal'>Add Room</h1>
                </div>
                <div className='p-8'>
                  <div className='space-y-6'>
                    <div className='space-y-1'>
                      <label class=' text-sm font-normal text-gray-600 pb-4'>Room Number</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                    </div>
                    <div className='space-y-1'>
                      <label class='text-sm font-normal text-gray-600'>Room Name</label>
                      <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Enter marks' />
                    </div>
                    <div className='flex justify-end items-center w-full'>
                      <div>
                        <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Create</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full overflow-auto">
                <div className="inline-block min-w-full">
                  <div className="overflow-x-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Room Number</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Room Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Manage</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >
                        <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                          <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Class 6th</td>
                          <td>
                            <span className='flex space-x-1'><MdOutlineEdit className='text-blue-500 h-6 w-6' /><MdOutlineClose className='text-blue-500 h-6 w-6' /></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-lg font-normal'>Select Course & Batch</h1>
              </div>
              <div className='p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Select Corse&hellip;</option>
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
                    <input type='text' className='w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base placeholder:font-normal font-medium text-black placeholder-gray-500' placeholder='Time Table Name' />
                  </div>
                  <div>
                    <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Set Weakdays</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-lg font-normal'>Active Time Table</h1>
              </div>
              <div className='p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div className='space-y-1'>
                    <label class='text-sm font-normal text-gray-600'>Course</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Select Corse&hellip;</option>
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
                  <div className='space-y-1'>
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
                </div>
              </div>
            </div>
            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-lg font-normal'>Time Table List</h1>
              </div>
              <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                <thead className="">
                  <tr className="text-left border border-slate-300">
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Time Table Name</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Operations</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap"></th>

                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">1</td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Grade 1 Time Table</td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <button className='text-white bg-green-600 rounded-sm px-4 py-2'>Deactivate</button></td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-lg font-normal'>View Time Table</h1>
              </div>
              <div className='p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                  <div className='space-y-1'>
                    <label class='text-sm font-normal text-gray-600'>Course</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Select Corse&hellip;</option>
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
                  <div className='space-y-1'>
                    <label class='text-sm font-normal text-gray-600'>Batch</label>
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
                  <div className='space-y-1'>
                    <label class='text-sm font-normal text-gray-600'>Time Table Name</label>
                    <div className='py-2 relative flex items-center md:w-auto w-full border  text-gray-800 bg-white rounded-sm cursor-pointer appearance-none'>
                      <select className="appearance-none w-full  px-4 bg-white text-sm font-normal focus:outline-none" onChange={this.inputTypeChange}
                        id="txType"
                        name="txType">
                        <option value="ALL">Select&hellip;</option>
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
                  <div className='space-y-2'>
                    <div>
                      <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Show Timetable</button>
                    </div>
                    <div>
                      <button type='submit' className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm'>Edit Timetable</button>
                    </div>
                    <div>
                      <button type='submit' className='py-2 px-4 bg-red-500 text-white rounded-sm text-sm'>Print</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-slate-300 bg-white'>
              <div className='border-b border-slate-300 p-4'>
                <h1 className='text-lg font-normal'>Time Table:GRADE 1-A</h1>
              </div>
              <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                <thead className="">
                  <tr className="text-left border border-slate-300">
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Weakdays</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Period-1</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Period-2</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Period-3</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Period-4</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Period-5</th>
                    <th scope="col" className="border border-slate-300 px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Period-6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[#FF8008]/10 cursor-pointer border border-slate-300">
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">Monday</td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <p className='text-gray-900'> Physic</p>
                      <p className='text-blue-600'>Chris John</p>
                      <p className='text-green-600'>1:30 PM-2:30 PM</p>
                    </td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <p className='text-gray-900'>Math</p>
                      <p className='text-blue-600'>King John</p>
                      <p className='text-green-600'>2:30 PM-3:30 PM</p>
                    </td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <p className='text-gray-900'>English</p>
                      <p className='text-blue-600'>Jonny Mong</p>
                      <p className='text-green-600'>3:30 PM-4:15 PM</p>
                    </td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <p className='text-gray-900'>Break</p>
                      <p className='text-green-600'>4:15 PM-4:30 PM</p>
                    </td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <p className='text-gray-900'>Break</p>
                      <p className='text-green-600'>4:15 PM-4:30 PM</p>
                    </td>
                    <td className="border border-slate-300 text-left px-4 py-3 text-sm font-serif text-black bg-white capitalize whitespace-nowrap">
                      <p className='text-gray-900'>Break</p>
                      <p className='text-green-600'>4:15 PM-4:30 PM</p>
                    </td>
                  </tr>
                </tbody>
              </table>
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