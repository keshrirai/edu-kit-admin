import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Department extends Component {

  constructor(props) {
    super(props);
    this.deptmentSubmit = this.deptmentSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsDept: {},
      errorsDept: {},
      fieldsDepartmentUpdate: {},
      errorDepartmentUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getDepartmentList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsDepartmentUpdate: {},
        errorDepartmentUpdate: {},
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
    let fieldsDept = this.state.fieldsDept;
    let errorsDept = this.state.errorsDept;
    fieldsDept[name] = value;
    errorsDept[name] = "";
    console.log(name, value);
    this.setState({ fieldsDept, errorsDept });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsDepartmentUpdate = this.state.fieldsDepartmentUpdate;
    let errorDepartmentUpdate = this.state.errorDepartmentUpdate;
    fieldsDepartmentUpdate[name] = value;
    errorDepartmentUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsDepartmentUpdate, errorDepartmentUpdate });
  }

  deptmentSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { deprtName } = this.state.fieldsDept;
      this.props.dispatch(dashboardActions.createDepartment({
        deprtName: deprtName,
      }, this.props));
    }
  }

  deptmentUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { deprtName, id } = this.state.fieldsDepartmentUpdate;
      this.props.dispatch(dashboardActions.updateDepartment({
        id: id,
        deprtName: deprtName,
      }, this.props));
    }
  }
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsDept: {},
      errorsDept: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsDept = this.state.fieldsDept;
    let errorsDept = {};
    let formIsValid = true;
    //subject
    if (!fieldsDept["deprtName"]) {
      formIsValid = false;
      errorsDept["deprtName"] = "Please enter Batch Name!";
    }
    this.setState({ errorsDept: errorsDept });
    return formIsValid;
  }

  handleValidationUpdateBatch = () => {
    let fieldsDepartmentUpdate = this.state.fieldsDepartmentUpdate;
    let errorDepartmentUpdate = {};
    let formIsValid = true;
    //subject
    if (!fieldsDepartmentUpdate["deprtName"]) {
      fieldsDepartmentUpdate = false;
      errorDepartmentUpdate["deprtName"] = "Please enter Batch Name!";
    }
    this.setState({ errorDepartmentUpdate: errorDepartmentUpdate });
    return formIsValid;
  }


  handleUpadte = (data) => {
    this.setState({ fieldsDepartmentUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteDepartment(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {
    let { dashboard } = this.props;
    let { loading, getDepartmentList, } = dashboard;

    console.log("RENDER_____________this.state.updateShow:::", this.state.updateShow);
    // console.log('getDepartmentListgetDepartmentListgetDepartmentList', getDepartmentList);

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
                      <div className='border-b border-slate-300 p-4'>
                        <h1 className='text-xl font-normal'>Add Batch</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class='text-sm font-normal text-gray-600 pb-4'>Batch Name</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsDept["deprtName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="deprtName"
                              value={this.state.fieldsDepartmentUpdate && this.state.fieldsDepartmentUpdate.deprtName ? this.state.fieldsDepartmentUpdate.deprtName : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="text" />
                            {this.state.errorsDept["deprtName"] ?
                              <div className="invalid-feedback  text-yellow-600">
                                {this.state.errorsDept["deprtName"]}
                              </div>
                              : null}
                          </div>
                          <div className='w-full px-5 pb-4'>
                            <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.deptmentUpdateSubmit} data-config-id="01_primary-action">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <div className='border border-slate-300 bg-white'>
                      <div className='border-b border-slate-300 p-4'>
                        <h1 className='text-xl font-normal'>Add Batch</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class='text-sm font-normal text-gray-600 pb-4'>Batch Name</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsDept["deprtName"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="deprtName"
                              value={this.state.fieldsDept["deprtName"] ? this.state.fieldsDept["deprtName"] : ''}
                              onChange={this.inputChange} placeholder='Enter batch name' type="text" />
                            {this.state.errorsDept["deprtName"] ?
                              <div className="invalid-feedback  text-yellow-600">
                                {this.state.errorsDept["deprtName"]}
                              </div>
                              : null}
                          </div>
                          <div className='w-full px-5 pb-4'>
                            <button className='py-2 px-4 bg-sky-500 text-white rounded-sm text-sm' type="button" onClick={this.deptmentSubmit} data-config-id="01_primary-action">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
              }
              <div className="overflow-auto max-w-full">
                <div className="inline-block min-w-full">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left border border-slate-300 border-collapse bg-white">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Department Name</th>
                          <th scope="col" className="px-4 py-3 text-left text-sm capitalize font-medium text-gray-600 whitespace-nowrap">Action</th>
                        </tr>
                      </thead>
                      <tbody className='divide-y' >

                        {
                          getDepartmentList && getDepartmentList.length > 0 ?
                            getDepartmentList.map((element, index) => (
                              <>
                                <tr className="border border-slate-300">
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{index}</td>
                                  <td className=" text-left px-4 py-3 text-sm font-serif text-black bg-white uppercase whitespace-nowrap">{element && element.deprtName ? element.deprtName : "-"}</td>
                                  <td className='flex space-x-1'>
                                    <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                      <MdOutlineEdit className='text-blue-500 h-5 w-5' onClick={() => this.handleUpadte(element)}/>
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
export default connect(mapStateToProps)(Department);