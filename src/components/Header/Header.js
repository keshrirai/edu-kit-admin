import React, { Component } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions'; 
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Menu } from '@headlessui/react'; 
import { FaRegUserCircle } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotifications,MdLogout } from "react-icons/md";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

    onClickMenu = (url) => {
      this.props.history.push(url);
    setTimeout(() => {
    
    }, 150);

  }
   

  logout = (url) => {
    window.sessionStorage.removeItem('user');
    this.props.history.push(url);
    setTimeout(() => {
    }, 150);

  }

  componentDidMount() {
    // this.props.dispatch(userActions.getUserDetails());

  }

  logoutSubmit = (data) => {

    confirmAlert({
      title: 'Confirm to submit?',
      message: 'Are you sure want to logout.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.logout('/login')
        },
        {
          label: 'No'
        }
      ]
    });
  }

  classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

  onClickMenu = (url) => {
    this.props.history.push(url)
    // console.log('this.props____:', this.props);
  }

  render() {



    return (
      <>
        <div className="relative z-10 h-16  bg-[#1B293A]  flex items-center justify-between px-6 shadow-md">


          <div className="lg:pl-0 pl-10 lg:flex hidden ">
            <div className="bg-white/20 flex items-center rounded overflow-hidden p-2" >
              <input placeholder="Search here..." className=" bg-transparent text-white   focus:outline-none w-40 text-sm font-light" />
              <BiSearch className="text-[1.3rem] text-white" /> </div>
          </div>

          <div>

          </div>

          <div className="items-center py-2">
            <Menu as="div" className="relative  text-left flex lg:space-x-4 space-x-1 items-center">
              {({ open }) => (
                <>
                  <div className="lg:ml-6 relative flex space-x-4 items-center">
                    <MdOutlineNotifications className="text-[1.5rem] text-white cursor-pointer" />
                    <Menu.Button className="max-w-xs flex lg:space-x-1 items-center text-sm rounded-full focus:outline-none focus:shadow-outline">
                      <img src="https://i.pinimg.com/originals/e2/11/a4/e211a415704901d04f0f6d8c88bd35b6.jpg" className="w-10 h-10 rounded-full shadow" />
                    </Menu.Button>
                  </div>
                  <Transition show={open} as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items static className="origin-top-right absolute right-0 mt-2 w-56 top-12 font-medium rounded-md shadow-3xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg">
                      <div className="py-2 space-y-2">

                        <div className="px-4 space-y-0.5" >
                          <h1 className="text-lg font-semibold   text-gray-800" > User Name</h1>
                          <p className="text-sm text-gray-800" >Gold User</p>
                        </div>

                      <div className="" >
                      <Menu.Item>
                          {({ active }) =>
                          (<span  onClick={() => this.onClickMenu('/app/profile')} className={this.classNames(active ? '  text-gray-500 hover:bg-[#FF8008]/20 hover:text-[#FF8008]' : 'text-gray-500 ', 'transition ease-in-out duration-500 cursor-pointer block px-4 py-1 text-sm')}>Profile</span>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) =>
                          (<span  onClick={() => this.onClickMenu('/app/changePassword')}  className={this.classNames(active ? ' text-gray-500 hover:bg-[#FF8008]/20 hover:text-[#FF8008]' : 'text-gray-500 ', 'transition ease-in-out duration-500 cursor-pointer block px-4 py-1 text-sm')}>Change Password</span>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) =>
                          (<span onClick={() => this.onClickMenu('/app/changePassword')} className={this.classNames(active ? ' text-gray-500 hover:bg-[#FF8008]/20 hover:text-[#FF8008]' : 'text-gray-500 ', 'transition ease-in-out duration-500 cursor-pointer block px-4 py-1 text-sm')}>Change Email</span>
                          )}
                        </Menu.Item>
                        
                      </div>
                        <div className="flex items-center justify-center " >
                        <Menu.Item>
                          {({ active }) =>
                          (<span onClick={() => this.logoutSubmit('/login')} className={this.classNames(active ? ' hover:text-[#FF8008] ' : 'text-[#FF8008] ', 'transition ease-in-out duration-500 cursor-pointer   px-4 py-1 font-medium text-md flex items-center')}>Logout <MdLogout className="ml-2 text-[1.2rem]" /> </span>
                          )}
                        </Menu.Item>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>

        </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  const { loggingIn, user, otpSent } = state.authentication;
  const { users } = state;
  return {
    loggingIn,
    otpSent,
    user,
    users
  };
}
export default withRouter(connect(mapStateToProps)(Header));
// export default NetworkDetector(connect(mapStateToProps)(Header));

// export default withRouter(Sidebar);
