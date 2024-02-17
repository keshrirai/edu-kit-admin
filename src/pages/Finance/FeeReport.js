import React, { Component } from 'react';
import { dashboardActions } from '../../_actions';
import { connect } from 'react-redux';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import { MdOutlineClose, MdOutlineEdit } from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';

class FeeReport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      size: 10,
      keyWord: "",
      pageNo: 1,
    }
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 10
    }
    this.props.dispatch(dashboardActions.getExamList(data));
    this.props.dispatch(dashboardActions.getAllCourse(data));
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
          onClick: () => this.props.dispatch(dashboardActions.deleteExam(datatemp))
        },
        {
          label: 'No'
        }
      ]
    });
  }


  render() {
    let { dashboard } = this.props;
    let { getExamList, getAllCourse } = dashboard;

    console.log('getAllCoursegetAllCourse1111', getAllCourse);

    return (

      <>

        {/* <div >
          <LoadingOverlay
            active={loading}
            className="temp001"
            spinner
            text='Please wait...' />
        </div> */}

        <div className="w-full h-screen p-6 overflow-y-auto bg-gray-100">
          <section>

            <div className='bg-white border border-slate-300'>
              <div className='p-4 border-b border-slate-300'>
                <h1 className='text-xl font-normal'>FeeReport Book</h1>
              </div>
              <div className='p-8'>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2'>

                  <div className="p-5 space-y-4 border">
                    <h1 className="text-lg">Fee Summary Report</h1>
                    <p className="text-sm text-gray-500">Get all student's fee summary including total fee, paid fee, balance fee etc. Filter student with various filter.</p>
                    <div className='flex justify-start w-full'>
                      <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Go to Fee Summary Report</button>
                    </div>
                  </div>
                  <div className="p-5 space-y-4 border">
                    <h1 className="text-lg">Fee Concession Report</h1>
                    <p className="text-sm text-gray-500">Get all student's fee summary including total fee, paid fee, balance fee etc. Filter student with various filter.</p>
                    <div className='flex justify-start w-full'>
                      <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Go to Fee Concession Report</button>
                    </div>
                  </div>
                  <div className="p-5 space-y-4 border">
                    <h1 className="text-lg">Fee Due Report</h1>
                    <p className="text-sm text-gray-500">Get all student's fee summary including total fee, paid fee, balance fee etc. Filter student with various filter.</p>
                    <div className='flex justify-start w-full'>
                      <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Go to Fee Due Report</button>
                    </div>
                  </div>
                  <div className="p-5 space-y-4 border">
                    <h1 className="text-lg">Fee Payment Report</h1>
                    <p className="text-sm text-gray-500">Get all student's fee summary including total fee, paid fee, balance fee etc. Filter student with various filter.</p>
                    <div className='flex justify-start w-full'>
                      <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Go to Fee Payment Report</button>
                    </div>
                  </div>
                  <div className="p-5 space-y-4 border">
                    <h1 className="text-lg">Fee Transaction Summary Report</h1>
                    <p className="text-sm text-gray-500">Get all student's fee summary including total fee, paid fee, balance fee etc. Filter student with various filter.</p>
                    <div className='flex justify-start w-full'>
                      <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Go to Transaction Summary Report</button>
                    </div>
                  </div>
                  <div className="p-5 space-y-4 border">
                    <h1 className="text-lg">Transaction Day Book Report</h1>
                    <p className="text-sm text-gray-500">Get all student's fee summary including total fee, paid fee, balance fee etc. Filter student with various filter.</p>
                    <div className='flex justify-start w-full'>
                      <button className='px-4 py-2 text-sm text-white rounded-sm bg-sky-500 hover:bg-sky-600' type="button" onClick={this.examSubmit} data-config-id="01_primary-action">Go ot Transaction Day Book Report</button>
                    </div>
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
  const { users, dashboard } = state;
  const { overview } = users ? users : {};
  const { setting } = overview ? overview : {};
  return {
    users,
    dashboard,
    setting
  };
}
export default connect(mapStateToProps)(FeeReport);