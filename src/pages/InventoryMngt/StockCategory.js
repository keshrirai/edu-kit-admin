import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class StockCategory extends Component {

  constructor(props) {
    super(props);
    this.stockSubmit = this.stockSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsStock: {},
      errorStock: {},
      fieldsStockUpdate: {},
      errorStockUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getStockCatList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsStockUpdate: {},
        errorStockUpdate: {},
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
    let fieldsStock = this.state.fieldsStock;
    let errorStock = this.state.errorStock;
    fieldsStock[name] = value;
    errorStock[name] = "";
    console.log(name, value);
    this.setState({ fieldsStock, errorStock });
  }

  inputChangeUpdate = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    let fieldsStockUpdate = this.state.fieldsStockUpdate;
    let errorStockUpdate = this.state.errorStockUpdate;
    fieldsStockUpdate[name] = value;
    errorStockUpdate[name] = "";
    console.log(name, value);
    this.setState({ fieldsStockUpdate, errorStockUpdate });
  }

  stockSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { name, description } = this.state.fieldsStock;
      this.props.dispatch(dashboardActions.createStockcat({
        name: name,
        description: description,
      }, this.props));
    }
  }

  stockSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { name, description, id } = this.state.fieldsStockUpdate;
      this.props.dispatch(dashboardActions.updateBatch({
        id: id,
        name: name,
        description: description,
      }, this.props));
    }
  }
  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsStock: {},
      errorStock: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsStock = this.state.fieldsStock;
    let errorStock = {};
    let formIsValid = true;

    //name
    if (!fieldsStock["name"]) {
      formIsValid = false;
      errorStock["name"] = "Please select name!";
    }
    //description
    if (!fieldsStock["description"]) {
      formIsValid = false;
      errorStock["description"] = "Please enter description!";
    }
    this.setState({ errorStock: errorStock });
    return formIsValid;
  }
  handleValidationUpdateBatch = () => {
    let fieldsStockUpdate = this.state.fieldsStockUpdate;
    let errorStockUpdate = {};
    let formIsValid = true;

    //name
    if (!fieldsStockUpdate["name"]) {
      formIsValid = false;
      errorStockUpdate["name"] = "Please select name!";
    }
    //description
    if (!fieldsStockUpdate["description"]) {
      formIsValid = false;
      errorStockUpdate["description"] = "Please enter description!";
    }
    console.log('errorStockUpdateerrorStockUpdateerrorStockUpdate', errorStockUpdate);
    this.setState({ errorStockUpdate: errorStockUpdate });
    return formIsValid;
  }

  handleUpadte = (data) => {
    this.setState({ fieldsStockUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteStockCat(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { getStockCatList } = dashboard;

    console.log('getStockCatListgetStockCatListgetStockCatList', getStockCatList);


    return (

      <>

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>

              {
                this.state.updateShow ?
                  <>
                    <div className='bg-white border border-slate-300'>
                      <div className='p-4 border-b border-slate-300'>
                        <h1 className='text-xl font-normal'>Update Stock Category</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Name</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStock["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="name"
                              value={this.state.fieldsStockUpdate && this.state.fieldsStockUpdate.name ? this.state.fieldsStockUpdate.name : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="text" />
                            {this.state.errorStockUpdate["name"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorStockUpdate["name"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Description</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStock["description"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="description"
                              value={this.state.fieldsStockUpdate && this.state.fieldsStockUpdate.description ? this.state.fieldsStockUpdate.description : ""}
                              onChange={this.inputChangeUpdate} placeholder='Enter batch name' type="text" />
                            {this.state.errorStockUpdate["description"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorStockUpdate["description"]}
                              </div>
                              : null}
                          </div>
                          <div className='w-full px-5 pb-4'>
                            <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchUpdateSubmit} data-config-id="01_primary-action">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    <div className='bg-white border border-slate-300'>
                      <div className='p-4 border-b border-slate-300'>
                        <h1 className='text-xl font-normal'>Add Stock Category</h1>
                      </div>
                      <div className='p-8'>
                        <div className='space-y-6'>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Name</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStock["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="name"
                              value={this.state.fieldsStock && this.state.fieldsStock["name"] ? this.state.fieldsStock["name"] : ""}
                              onChange={this.inputChange} placeholder='Enter batch name' type="text" />
                            {this.state.errorStock["name"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorStock["name"]}
                              </div>
                              : null}
                          </div>
                          <div>
                            <label class=' text-sm font-normal text-gray-600 pb-4'>Description</label>
                            <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorStock["description"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                              name="description"
                              value={this.state.fieldsStock && this.state.fieldsStock["description"] ? this.state.fieldsStock["description"] : ""}
                              onChange={this.inputChange} placeholder='Enter batch name' type="text" />
                            {this.state.errorStock["description"] ?
                              <div className="text-yellow-600 invalid-feedback">
                                {this.state.errorStock["description"]}
                              </div>
                              : null}
                          </div>
                          <div className='w-full px-5 pb-4'>
                            <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.stockSubmit} data-config-id="01_primary-action">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
              }

              <div className="max-w-full overflow-auto ">
                <div className="inline-block min-w-full ">
                  <div className="overflow-hidden ">
                    <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                      <thead className="">
                        <tr className="text-left border border-slate-300">
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">name</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">description</th>
                          <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">action</th>
                          {/* <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Manage</th> */}
                        </tr>
                      </thead>
                      <tbody className='divide-y' >

                        {
                          getStockCatList && getStockCatList.length > 0 ?
                            getStockCatList.map((element, index) => (
                              <>

                                <tr className="border border-slate-300">
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">1</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.name ? element.name : "-"}</td>
                                  <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.description ? element.description : "-"}</td>
                                  <td className='flex space-x-1'>
                                    <span className='hover:bg-[#FF7F50] cursor-pointer'>
                                      <MdOutlineEdit className='w-5 h-5 text-blue-500' onClick={() => this.handleUpadte(element)} />
                                    </span>
                                    <span className='hover:bg-[#FF8008] cursor-pointer'>
                                      <MdOutlineClose className='w-6 h-6 text-blue-500' onClick={() => this.deleteUser(element)} />
                                    </span>
                                  </td>
                                </tr>

                              </>
                            )) : <td colspan="7" className="col-span-7 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj">Data Not Found</td>
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
export default connect(mapStateToProps)(StockCategory);