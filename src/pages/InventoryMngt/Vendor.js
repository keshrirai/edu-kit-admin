import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';

class Vendor extends Component {

  constructor(props) {
    super(props);
    this.batchSubmit = this.batchSubmit.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
      updateShow: false,
      fieldsVendor: {},
      errorsVendor: {},
      fieldsVendorUpdate: {},
      errorsVendorUpdate: {},
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getAllStudent(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
    this.props.dispatch(dashboardActions.getAllBatch(data));
    this.props.dispatch(dashboardActions.getVendorList(data));
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if (nextProps.dashboard.updateShow) {
      return {
        ...nextProps,
        fieldsVendorUpdate: {},
        errorsVendorUpdate: {},
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
    let fieldsVendor = this.state.fieldsVendor;
    let errorsVendor = this.state.errorsVendor;
    fieldsVendor[name] = value;
    errorsVendor[name] = "";
    console.log(name, value);
    this.setState({ fieldsVendor, errorsVendor });
  }

  // inputChangeUpdate = (e) => {
  //   e.preventDefault();
  //   let { name, value } = e.target;
  //   let fieldsVendorUpdate = this.state.fieldsVendorUpdate;
  //   let errorsVendorUpdate = this.state.errorsVendorUpdate;
  //   fieldsVendorUpdate[name] = value;
  //   errorsVendorUpdate[name] = "";
  //   console.log(name, value);
  //   this.setState({ fieldsVendorUpdate, errorsVendorUpdate });
  // }

  batchSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationBatch()) {
      let { name, phone, alernatePhone, email, taxId, contactPerson, contactPersonPhone, contactPersonEmail, addressLine1, addressLine2, city, state, zipcode, country } = this.state.fieldsVendor;
      this.props.dispatch(dashboardActions.createVendor({
        name: name,
        phone: phone,
        alernatePhone: alernatePhone,
        email: email,
        taxId: taxId,
        contactPerson: contactPerson,
        contactPersonPhone: contactPersonPhone,
        contactPersonEmail: contactPersonEmail,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country
      }, this.props));
    }
  }

  batchUpdateSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidationUpdateBatch()) {
      let { id, name, phone, alernatePhone, email, taxId, contactPerson, contactPersonPhone, contactPersonEmail, addressLine1, addressLine2, city, state, zipcode, country } = this.state.fieldsVendorUpdate;
      this.props.dispatch(dashboardActions.updateBatch({
        id: id,
        name: name,
        phone: phone,
        alernatePhone: alernatePhone,
        email: email,
        taxId: taxId,
        contactPerson: contactPerson,
        contactPersonPhone: contactPersonPhone,
        contactPersonEmail: contactPersonEmail,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country
      }, this.props));
    }
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState({
      fieldsVendor: {},
      errorsVendor: {},
    })
    this.hideErrorcomment();
  }

  handleValidationBatch = () => {
    let fieldsVendor = this.state.fieldsVendor;
    let errorsVendor = {};
    let formIsValid = true;

    //subject
    if (!fieldsVendor["name"]) {
      formIsValid = false;
      errorsVendor["name"] = "Please enter name!";
    }
    if (!fieldsVendor["phone"]) {
      formIsValid = false;
      errorsVendor["phone"] = "Please enter phone!";
    }
    if (!fieldsVendor["alernatePhone"]) {
      formIsValid = false;
      errorsVendor["alernatePhone"] = "Please enter alernatePhone!";
    }
    if (!fieldsVendor["email"]) {
      formIsValid = false;
      errorsVendor["email"] = "Please enter email!";
    }
    if (!fieldsVendor["taxId"]) {
      formIsValid = false;
      errorsVendor["taxId"] = "Please enter taxId!";
    }
    if (!fieldsVendor["contactPerson"]) {
      formIsValid = false;
      errorsVendor["contactPerson"] = "Please enter contactPerson!";
    }
    if (!fieldsVendor["contactPersonPhone"]) {
      formIsValid = false;
      errorsVendor["contactPersonPhone"] = "Please enter contactPersonPhone!";
    }
    if (!fieldsVendor["contactPersonEmail"]) {
      formIsValid = false;
      errorsVendor["contactPersonEmail"] = "Please enter contactPersonEmail!";
    }
    if (!fieldsVendor["addressLine1"]) {
      formIsValid = false;
      errorsVendor["addressLine1"] = "Please enter addressLine1!";
    }
    if (!fieldsVendor["addressLine2"]) {
      formIsValid = false;
      errorsVendor["addressLine2"] = "Please enter addressLine2!";
    }
    if (!fieldsVendor["city"]) {
      formIsValid = false;
      errorsVendor["city"] = "Please enter city!";
    }
    if (!fieldsVendor["state"]) {
      formIsValid = false;
      errorsVendor["state"] = "Please enter state!";
    }
    if (!fieldsVendor["zipcode"]) {
      formIsValid = false;
      errorsVendor["zipcode"] = "Please enter zipcode!";
    }
    if (!fieldsVendor["country"]) {
      formIsValid = false;
      errorsVendor["country"] = "Please enter country!";
    }

    this.setState({ errorsVendor: errorsVendor });
    return formIsValid;
  }

  handleValidationUpdateBatch = () => {
    let fieldsVendorUpdate = this.state.fieldsVendorUpdate;
    let errorsVendorUpdate = {};
    let formIsValid = true;

    //subject
    if (!fieldsVendorUpdate["courseId"]) {
      formIsValid = false;
      errorsVendorUpdate["courseId"] = "Please enter Batch Name!";
    }
    if (!fieldsVendorUpdate["name"]) {
      formIsValid = false;
      errorsVendorUpdate["name"] = "Please enter name!";
    }
    if (!fieldsVendorUpdate["phone"]) {
      formIsValid = false;
      errorsVendorUpdate["phone"] = "Please enter phone!";
    }
    if (!fieldsVendorUpdate["alernatePhone"]) {
      formIsValid = false;
      errorsVendorUpdate["alernatePhone"] = "Please enter alernatePhone!";
    }
    if (!fieldsVendorUpdate["email"]) {
      formIsValid = false;
      errorsVendorUpdate["email"] = "Please enter email!";
    }
    if (!fieldsVendorUpdate["taxId"]) {
      formIsValid = false;
      errorsVendorUpdate["taxId"] = "Please enter taxId!";
    }
    if (!fieldsVendorUpdate["contactPerson"]) {
      formIsValid = false;
      errorsVendorUpdate["contactPerson"] = "Please enter contactPerson!";
    }
    if (!fieldsVendorUpdate["contactPersonPhone"]) {
      formIsValid = false;
      errorsVendorUpdate["contactPersonPhone"] = "Please enter contactPersonPhone!";
    }
    if (!fieldsVendorUpdate["contactPersonEmail"]) {
      formIsValid = false;
      errorsVendorUpdate["contactPersonEmail"] = "Please enter contactPersonEmail!";
    }
    if (!fieldsVendorUpdate["addressLine1"]) {
      formIsValid = false;
      errorsVendorUpdate["addressLine1"] = "Please enter addressLine1!";
    }
    if (!fieldsVendorUpdate["addressLine2"]) {
      formIsValid = false;
      errorsVendorUpdate["addressLine2"] = "Please enter addressLine2!";
    }
    if (!fieldsVendorUpdate["city"]) {
      formIsValid = false;
      errorsVendorUpdate["city"] = "Please enter city!";
    }
    if (!fieldsVendorUpdate["state"]) {
      formIsValid = false;
      errorsVendorUpdate["state"] = "Please enter state!";
    }
    if (!fieldsVendorUpdate["zipcode"]) {
      formIsValid = false;
      errorsVendorUpdate["zipcode"] = "Please enter zipcode!";
    }
    if (!fieldsVendorUpdate["country"]) {
      formIsValid = false;
      errorsVendorUpdate["country"] = "Please enter country!";
    }

    console.log('errorsVendorUpdateerrorsVendorUpdateerrorsVendorUpdate', errorsVendorUpdate);
    this.setState({ errorsVendorUpdate: errorsVendorUpdate });
    return formIsValid;
  }

  handleUpadte = (data) => {
    this.setState({ fieldsVendorUpdate: data, updateShow: true });
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
          onClick: () => this.props.dispatch(dashboardActions.deleteVendor(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {

    let { dashboard } = this.props;
    let { getBatchList, getAllCourse, getAllStudent, getAllBatch, getVendorList } = dashboard;

    console.log('getAllStudent3333333333getVendorListgetVendorListgetVendorListgetVendorList', getVendorList);

    return (

      <>

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>


            <div className='bg-white border border-slate-300'>
              <div className='p-4 border-b border-slate-300'>
                <h1 className='text-xl font-normal'>Add Vendor</h1>
              </div>
              <div className='space-y-6'>
                <div className='grid grid-cols-1 gap-6 p-8 lg:grid-cols-4 md:grid-cols-2'>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Name</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["name"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="name"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["name"] ? this.state.fieldsVendor["name"] : ""}
                      onChange={this.inputChange} placeholder='Enter Name' type="text" />
                    {this.state.errorsVendor["name"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["name"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Phone</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["phone"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="phone"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["phone"] ? this.state.fieldsVendor["phone"] : ""}
                      onChange={this.inputChange} placeholder='Enter Phone' type="number" />
                    {this.state.errorsVendor["phone"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["phone"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Alternate Phone</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["alernatePhone"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="alernatePhone"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["alernatePhone"] ? this.state.fieldsVendor["alernatePhone"] : ""}
                      onChange={this.inputChange} placeholder='Enter Alternate Phone' type="number" />
                    {this.state.errorsVendor["alernatePhone"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["alernatePhone"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Email</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["email"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="email"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["email"] ? this.state.fieldsVendor["email"] : ""}
                      onChange={this.inputChange} placeholder='Enter Email' type="text" />
                    {this.state.errorsVendor["email"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["email"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Tax ID</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["taxId"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="taxId"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["taxId"] ? this.state.fieldsVendor["taxId"] : ""}
                      onChange={this.inputChange} placeholder='Enter Tax ID' type="text" />
                    {this.state.errorsVendor["taxId"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["taxId"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Contact Person</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["contactPerson"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="contactPerson"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["contactPerson"] ? this.state.fieldsVendor["contactPerson"] : ""}
                      onChange={this.inputChange} placeholder='Enter Contact Person' type="text" />
                    {this.state.errorsVendor["contactPerson"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["contactPerson"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Contact Person Phone</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["contactPersonPhone"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="contactPersonPhone"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["contactPersonPhone"] ? this.state.fieldsVendor["contactPersonPhone"] : ""}
                      onChange={this.inputChange} placeholder='Enter Contact Person Phone' type="number" />
                    {this.state.errorsVendor["contactPersonPhone"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["contactPersonPhone"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Contact Person Email</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["contactPersonEmail"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="contactPersonEmail"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["contactPersonEmail"] ? this.state.fieldsVendor["contactPersonEmail"] : ""}
                      onChange={this.inputChange} placeholder='Enter Contact Person Email' type="text" />
                    {this.state.errorsVendor["contactPersonEmail"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["contactPersonEmail"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Address Line 1</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["addressLine1"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="addressLine1"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["addressLine1"] ? this.state.fieldsVendor["addressLine1"] : ""}
                      onChange={this.inputChange} placeholder='Enter Address Line 1' type="text" />
                    {this.state.errorsVendor["addressLine1"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["addressLine1"]}
                      </div>
                      : null}
                  </div>

                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Address Line 2</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["addressLine2"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="addressLine2"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["addressLine2"] ? this.state.fieldsVendor["addressLine2"] : ""}
                      onChange={this.inputChange} placeholder='Enter Address Line 2' type="text" />
                    {this.state.errorsVendor["addressLine2"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["addressLine2"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>City</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["city"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="city"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["city"] ? this.state.fieldsVendor["city"] : ""}
                      onChange={this.inputChange} placeholder='Enter City' type="text" />
                    {this.state.errorsVendor["city"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["city"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>State</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["state"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="state"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["state"] ? this.state.fieldsVendor["state"] : ""}
                      onChange={this.inputChange} placeholder='Enter State' type="text" />
                    {this.state.errorsVendor["state"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["state"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Zipcode</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["zipcode"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="zipcode"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["zipcode"] ? this.state.fieldsVendor["zipcode"] : ""}
                      onChange={this.inputChange} placeholder='Enter Zipcode' type="number" />
                    {this.state.errorsVendor["zipcode"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["zipcode"]}
                      </div>
                      : null}
                  </div>
                  <div>
                    <label class=' text-sm font-normal text-gray-600 pb-4'>Country</label>
                    <input className={`w-full border px-4 py-1.5 rounded-xs focus:outline-none text-base text-gray-700 placeholder-gray-500 ${!this.state.errorsVendor["country"] ? "'border-opacity-20 " : "order-opacity-100 border-red-500 bg-red-100"}`}
                      name="country"
                      value={this.state.fieldsVendor && this.state.fieldsVendor["country"] ? this.state.fieldsVendor["country"] : ""}
                      onChange={this.inputChange} placeholder='Enter Country' type="text" />
                    {this.state.errorsVendor["country"] ?
                      <div className="text-yellow-600 invalid-feedback">
                        {this.state.errorsVendor["country"]}
                      </div>
                      : null}
                  </div>
                </div>
              </div>
              <div className='flex justify-end w-full px-5 pb-4'>
                <button className='px-6 py-2 text-sm text-white rounded-sm bg-sky-500' type="button" onClick={this.batchSubmit} data-config-id="01_primary-action">Save</button>
              </div>
            </div>


            <div className="max-w-full mt-6 overflow-auto">
              <div className="inline-block min-w-full ">
                <div className="overflow-hidden ">
                  <table className="min-w-full text-left bg-white border border-collapse border-slate-300">
                    <thead className="">
                      <tr className="text-left border border-slate-300">
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">Sl.N.</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">name</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">phone</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">email</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">city</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">state</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">country</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">contactPerson</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">contactPersonPhone</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">contactPersonEmail</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">addressLine1</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">addressLine2</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">zipcode</th>
                        <th scope="col" className="px-4 py-3 text-sm font-medium text-left text-gray-600 capitalize whitespace-nowrap">action</th>
                      </tr>
                    </thead>
                    <tbody className='divide-y' >

                      {
                        getVendorList && getVendorList.length > 0 ?
                          getVendorList.map((element, index) => (
                            <>

                              <tr className="border border-slate-300">
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">1</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.name ? element.name : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.phone ? element.phone : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.email ? element.email : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.city ? element.city : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.state ? element.state : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.country ? element.country : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.contactPerson ? element.contactPerson : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.contactPersonPhone ? element.contactPersonPhone : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.contactPersonEmail ? element.contactPersonEmail : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.addressLine1 ? element.addressLine1 : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.addressLine2 ? element.addressLine2 : "-"}</td>
                                <td className="px-4 py-3 font-serif text-sm text-left text-black uppercase bg-white whitespace-nowrap">{element && element.zipcode ? element.zipcode : "-"}</td>
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
                          )) : <td colspan="2" className="col-span-2 whitespace-nowrap border border-gray-300 text-center px-[11.5px] py-3 text-xs font-semibold text-black bg-white uppercase bg-whj"></td>
                      }

                    </tbody>
                  </table>
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
export default connect(mapStateToProps)(Vendor);