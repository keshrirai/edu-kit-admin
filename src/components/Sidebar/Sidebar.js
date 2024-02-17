import React from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { RiWallet3Fill } from "react-icons/ri";
import { HiChevronRight, HiChevronDown } from "react-icons/hi";
import { GiWallet } from "react-icons/gi";
import { MdOutlineDashboardCustomize, MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { TbPackage } from "react-icons/tb";

function Sidebar({ location, history, user }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [institute, setInstitute] = React.useState(false);
  const [academic, setAcademic] = React.useState(false);
  const [reception, setReception] = React.useState(false);
  const [communication, setCommunication] = React.useState(false);
  const [student, setStudent] = React.useState(false);
  const [employee, setEmployee] = React.useState(false);
  const [role, setRole] = React.useState(false);
  const [exam, setExam] = React.useState(false);
  const [library, setLibrary] = React.useState(false);
  const [finance, setFinance] = React.useState(false);
  const [inventory, setInventory] = React.useState(false);
  const [post, setPost] = React.useState(false);
  const [utility, setUtility] = React.useState(false);
  const [transport, setTransport] = React.useState(false);

  const onClickMenu = (url) => {
    history.push(url);
    setTimeout(() => {
      setNavbarOpen(!navbarOpen)
    }, 150);

  }

  // const logout = (url) => {
  //   window.sessionStorage.removeItem('user');
  //   history.push(url);
  //   setTimeout(() => {
  //     setNavbarOpen(!navbarOpen)
  //   }, 150);

  // }

  // const logoutSubmit = () => {

  //   confirmAlert({
  //     title: 'Confirm to submit?',
  //     message: 'Are you sure want to logout.',
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick: () => logout('/login')
  //       },
  //       {
  //         label: 'No'
  //       }
  //     ]
  //   });
  // }

  return (
    <>


      {/* Navbar Toggle */}
      <button className={` ${navbarOpen === true ? 'hidden' : 'flex'} absolute top-0 left-0 px-5 items-center justify-center  text-white focus:outline-none focus:bg-gray-800 focus:text-gray-600 z-50 h-16 lg:hidden `} onClick={() => setNavbarOpen(!navbarOpen)}>
        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7">
          </path>
        </svg>
      </button>


      {/* Navbar transparent Background & close Button */}
      {navbarOpen ?
        <div className={` ${navbarOpen === false ? 'hidden' : ''} lg:hidden lg:flex-shrink-0 lg:static inset-0 z-50 fixed bg-black bg-opacity-40`} onClick={() => setNavbarOpen(!navbarOpen)}>

          <div className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600 absolute left-[250px] lg:left-80 top-0 z-20   " aria-label="Close sidebar">
            <svg className="w-6 h-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
              </path>
            </svg>
          </div>
        </div>
        : null}

      {/* Main Navbar */}
      <div className={` ${navbarOpen === false ? 'hidden' : 'flex'} bg-[#1B293A] fixed left-0 inset-y-0 lg:static lg:left-auto lg:inset-auto lg:flex  w-64 z-50`}>

        <div className="relative flex flex-col w-64 overflow-y-auto lg:w-80">

          <div onClick={() => onClickMenu('/app/dashboard')} className="bg-[#1B293A] cursor-pointer flex justify-center items-center h-16 border-b border-white/10 flex-shrink-0 px-4 w-ful z-50 sticky top-0 text-white capitalize">
            <img className="w-10 h-10 mr-2 bg-contain rounded-full" src="school/logo.png" alt="logo" />
            <h1 classNanme="text-lg">school Management</h1>
          </div>

          <div className="">
            <nav className="flex-1 space-y-2">

              <span onClick={() => onClickMenu('/app/dashboard')} className={` w-full h-12 cursor-pointer flex items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/dashboard" ? "text-black bg-white" : ""}`}>
                <MdOutlineDashboardCustomize className="text-[1.5rem]" />
                <span className="ml-3">Dashboard</span>
              </span>

              {
                institute ?
                  <div>
                    <span onClick={() => setInstitute(!institute)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                      <div className="flex justify-between space-x-2">
                        <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                        <span className="text-sm font-medium mt-1.5">Institute Management</span>
                      </div>
                      {
                        institute ? <HiChevronDown /> : <HiChevronRight />
                      }
                    </span>
                    <div onClick={() => onClickMenu('/app/createinstitute')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/createinstitute" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <RiWallet3Fill className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Create Institute</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/institutelist')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/institutelist" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Institute List</span>
                    </div>
                  </div>
                  :
                  <div onClick={() => setInstitute(!institute)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />

                      <span className="text-sm font-medium ">Institute Management</span>
                    </div>
                    {
                      institute ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </div>
              }

              {
                reception ?
                  <div>
                    <span onClick={() => setReception(!reception)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                      <div className="flex justify-between space-x-2">
                        <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                        <span className="text-sm font-medium mt-1.5">Reception Management</span>
                      </div>
                      {
                        reception ? <HiChevronDown /> : <HiChevronRight />
                      }
                    </span>
                    <div onClick={() => onClickMenu('/app/admissionenquiry')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/admissionenquiry" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <RiWallet3Fill className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Admission Enquiry</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/visitorlog')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/visitorlog" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Visitor Log</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/postalrecord')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/postalrecord" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Postal Record</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/complaint')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/complaint" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Complaint</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/gatepass')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/gatepass" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Gate Pass</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/visitormessage')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/visitormessage" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Visitor Message</span>
                    </div>
                  </div>
                  :
                  <div onClick={() => setReception(!reception)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium ">Reception Management</span>
                    </div>
                    {
                      reception ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </div>
              }

              {
                communication ?
                  <div>
                    <span onClick={() => setCommunication(!communication)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                      <div className="flex justify-between space-x-2">
                        <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                        <span className="text-sm font-medium mt-1.5">Communication</span>
                      </div>
                      {
                        communication ? <HiChevronDown /> : <HiChevronRight />
                      }
                    </span>
                    <div onClick={() => onClickMenu('/app/meeting')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/admissionenquiry" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <RiWallet3Fill className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Meeting</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/mymeeting')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/visitorlog" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">My Meeting</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/history')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/postalrecord" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">History</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/mynotification')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/complaint" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">My Notification</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/sms')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/gatepass" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">SMS</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/email')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/visitormessage" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Email</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/pushnotification')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/visitormessage" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">PushNotification</span>
                    </div>
                  </div>
                  :
                  <div onClick={() => setCommunication(!communication)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium ">Communication</span>
                    </div>
                    {
                      communication ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </div>
              }

              {
                academic ?
                  <div>
                    <span onClick={() => setAcademic(!academic)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                      <div className="flex justify-between space-x-2">
                        <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                        <span className="text-sm font-medium mt-1.5">Academic Management</span>
                      </div>
                      {
                        academic ? <HiChevronDown /> : <HiChevronRight />
                      }
                    </span>
                    <div onClick={() => onClickMenu('/app/course')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/course" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <RiWallet3Fill className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Course</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/batch')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/batch" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Batch</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/department')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/department" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Department</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/section')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/section" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Section</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/class')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/class" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Class</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/subjects')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/subjects" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Subjects</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/subjectsallocationteacher')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/subjectsallocationteacher" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Subjects Allocation Teacher</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/attendance')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/attendance" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Attendance</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/exam')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/exam" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Exam</span>
                    </div>
                    <div onClick={() => onClickMenu('/app/fee')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/fee" ? "text-black bg-white" : ""}`}>
                      <div className=" ml-[12px]">
                        <GiWallet className="w-6 h-6 " />
                      </div>
                      <span className="text-xs font-medium ">Fee</span>
                    </div>
                  </div>
                  :
                  <div onClick={() => setAcademic(!academic)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium ">Academic Management</span>
                    </div>
                    {
                      academic ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </div>
              }

              {student ?
                <div>
                  <span onClick={() => setStudent(!student)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Student Management</span>
                    </div>
                    {
                      student ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>
                  <div onClick={() => onClickMenu('/app/createstudent')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/createstudent" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Create Student</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/studentlist')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/studentlist" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Student List</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/student-id-card')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/student-id-card" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">ID Card</span>
                  </div>
                </div>
                :
                <div onClick={() => setStudent(!student)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />

                    <span className="text-sm font-medium ">Student Management</span>
                  </div>
                  {
                    student ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }



              {employee ?
                <div>
                  <span onClick={() => setEmployee(!employee)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Employee Management</span>
                    </div>
                    {
                      employee ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>

                  <div onClick={() => onClickMenu('/app/createemployee')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/createemployee" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Create Employee</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/employeeList')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/employeeList" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Employee List</span>
                  </div>

                </div>
                :
                <div onClick={() => setEmployee(!employee)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Employee Management</span>
                  </div>
                  {
                    employee ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {role ?
                <div>
                  <span onClick={() => setRole(!role)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Role Management</span>
                    </div>
                    {
                      role ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>

                  <div onClick={() => onClickMenu('/app/createrole')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/createrole" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Create Role</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/rolelist')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/rolelist" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Role List</span>
                  </div>

                </div>
                :
                <div onClick={() => setRole(!role)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Role Management</span>
                  </div>
                  {
                    role ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {exam ?
                <div>
                  <span onClick={() => setExam(!exam)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Exam Management</span>
                    </div>
                    {
                      exam ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>

                  <div onClick={() => onClickMenu('/app/createexam')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/createexam" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Create Exam</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/examlist')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/examlist" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Exam List</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/reportcard')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/reportcard" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Report Card</span>
                  </div>

                </div>
                :
                <div onClick={() => setExam(!exam)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Exam Management</span>
                  </div>
                  {
                    exam ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {library ?
                <div>
                  <span onClick={() => setLibrary(!library)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Library Management</span>
                    </div>
                    {
                      library ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>

                  <div onClick={() => onClickMenu('/app/book')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/book" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Book</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/issuebook')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/issuebook" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Issue Book</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/returnbook')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/returnbook" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Return Book</span>
                  </div>

                </div>
                :
                <div onClick={() => setLibrary(!library)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Library Management</span>
                  </div>
                  {
                    library ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {finance ?
                <div>
                  <span onClick={() => setFinance(!finance)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Finance Management</span>
                    </div>
                    {
                      finance ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>


                  <div onClick={() => onClickMenu('/app/freegroup')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/freegroup" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Free Group</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/feehead')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/feehead" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Fee Head</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/transportfee')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/transportfee" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Transport Fee</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/feeConcession')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/feeConcession" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Fee Concession</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/feeallocation')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/feeallocation" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Fee Allocation</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/account')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/account" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Account</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/income')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/income" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Income</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/expense')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/expense" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Expense</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/accounttransfer')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/accounttransfer" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Account Transfer</span>
                  </div>

                  <div onClick={() => onClickMenu('/app/feereport')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/feereport" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Report</span>
                  </div>
                </div>
                :
                <div onClick={() => setFinance(!finance)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Finance Management</span>
                  </div>
                  {
                    finance ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {transport ?
                <div>
                  <span onClick={() => setTransport(!transport)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Transport Management</span>
                    </div>
                    {
                      transport ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>

                  <div onClick={() => onClickMenu('/app/routes')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/routes" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Routes</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/vehicle')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/vehicle" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Vehicle</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/vehicleinchange')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/vehicleinchange" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Vehicle Inchange</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/document')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/document" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Document</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/fuel')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/fuel" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Fuel</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/log')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/log" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Log</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/servicerecord')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/servicerecord" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Service Record</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/report')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/report" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Report</span>
                  </div>
                </div>
                :
                <div onClick={() => setTransport(!transport)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Transport Management</span>
                  </div>
                  {
                    transport ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }


              {inventory ?
                <div>
                  <span onClick={() => setInventory(!inventory)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Inventory Management</span>
                    </div>
                    {
                      inventory ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>

                  <div onClick={() => onClickMenu('/app/stockcategory')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/stockcategory" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Stock Category</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/stockitem')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/stockitem" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Stock Item</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/vendor')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/vendor" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Vendor</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/purchase')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/purchase" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Purchase</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/transfer')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/transfer" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Transfer</span>
                  </div>

                </div>
                :
                <div onClick={() => setInventory(!inventory)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Inventory Management</span>
                  </div>
                  {
                    inventory ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {post ?
                <div>
                  <span onClick={() => setPost(!post)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Post Management</span>
                    </div>
                    {
                      post ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>
                  <div onClick={() => onClickMenu('/app/feed')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/feed" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Feed</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/article')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/article" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Article</span>
                  </div>
                </div>
                :
                <div onClick={() => setPost(!post)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Post Management</span>
                  </div>
                  {
                    post ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {utility ?
                <div>
                  <span onClick={() => setUtility(!utility)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                    <div className="flex justify-between space-x-2">
                      <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                      <span className="text-sm font-medium mt-1.5">Utility Management</span>
                    </div>
                    {
                      utility ? <HiChevronDown /> : <HiChevronRight />
                    }
                  </span>
                  <div onClick={() => onClickMenu('/app/todo')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/todo" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Todo</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/backup')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/backup" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <RiWallet3Fill className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">Backup</span>
                  </div>
                  <div onClick={() => onClickMenu('/app/ipfilter')} className={`hover:bg-gray-800 cursor-pointer items-center flex space-x-2 px-6 pl-10 py-2 text-md   font-medium text-gray-400 hover:text-white  focus:outline-none  transition ease-in-out duration-150  ${location.pathname === "/app/ipfilter" ? "text-black bg-white" : ""}`}>
                    <div className=" ml-[12px]">
                      <GiWallet className="w-6 h-6 " />
                    </div>
                    <span className="text-xs font-medium ">IP Filter</span>
                  </div>
                </div>
                :
                <div onClick={() => setUtility(!utility)} className={`w-full h-12 cursor-pointer flex justify-between items-center px-4 py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/portfolio" ? "text-black bg-white" : ""}`}>
                  <div className="flex justify-between space-x-2">
                    <MdOutlineAccountBalanceWallet className="text-[1.5rem]" />
                    <span className="text-sm font-medium ">Utility Management</span>
                  </div>
                  {
                    utility ? <HiChevronDown /> : <HiChevronRight />
                  }
                </div>
              }

              {/* <span onClick={() => onClickMenu('/app/onlineexam')} className={`w-full h-12 cursor-pointer flex    items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/onlineexam" ? "text-black bg-white" : ""}`}>
                <TbPackage className="text-[1.5rem]" />
                <span className="ml-3">Online Exam</span>
              </span> */}
              <span onClick={() => onClickMenu('/app/timetable')} className={`w-full h-12 cursor-pointer flex    items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/timetable" ? "text-black bg-white" : ""}`}>
                <TbPackage className="text-[1.5rem]" />
                <span className="ml-3">Time Table</span>
              </span>

              <span onClick={() => onClickMenu('/app/configuration')} className={`w-full h-12 cursor-pointer flex    items-center px-4   py-3 text-md font-medium text-white focus:outline-none  transition ease-in-out duration-150 ${location.pathname === "/app/configuration" ? "text-black bg-white" : ""}`}>
                <TbPackage className="text-[1.5rem]" />
                <span className="ml-3">Configuration</span>
              </span>


            </nav>
          </div>
        </div>

      </div>
    </>
  );

}

function mapStateToProps(state) {
  const { users } = state;
  const { overview } = users ? users : {};
  const { setting, user } = overview ? overview : {};
  // console.log("overviewoverviewoverviewoverview", overview);
  return {
    users,
    setting,
    user
  };
}


export default (connect(mapStateToProps)(withRouter(Sidebar)));

// export default withRouter(Sidebar);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          