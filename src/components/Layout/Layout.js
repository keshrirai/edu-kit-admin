import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Header from "../Header";
import Dashboard from "../../pages/dashboard";
import Sidebar from "../Sidebar";
import Logout from "../../pages/Logout/Logout";
import Profile from "../../pages/profile";

import CreateStudent from "../../pages/CreateStudent/CreateStudent";
import StudentList from "../../pages/StudentList/StudentList";
import StudentListsingle from "../../pages/StudentListsingle/StudentListsingle";
import StudentIdCard from "../../pages/StudentIdCard/StudentIdCard";

// import CreateClass from "../../pages/CreateClass/CreateClass";
// import ClassList from "../../pages/ClassList/ClassList";

import Class from "../../pages/Class/Class";
import Section from "../../pages/Section/Section";

import Department from "../../pages/Department/Department";

import Batch from "../../pages/Batch/Batch";
import AdmissionEnquiry from "../../pages/AdmissionEnquiry/AdmissionEnquiry";
import VisitorLog from "../../pages/VisitorLog/VisitorLog";
import PostalRecord from "../../pages/PostalRecord/PostalRecord";
import Complaint from "../../pages/Complaint/Complaint";
import GatePass from "../../pages/GatePass/GatePass";
import VisitorMessage from "../../pages/VisitorMessage/VisitorMessage";





import StockCategory from "../../pages/InventoryMngt/StockCategory";
import StockItem from "../../pages/InventoryMngt/StockItem";
import Vendor from "../../pages/InventoryMngt/Vendor";
import Purchase from "../../pages/InventoryMngt/Purchase";
import Transfer from "../../pages/InventoryMngt/Transfer";


import Feed from "../../pages/PostMngt/Feed";
import Article from "../../pages/PostMngt/Article";

import Backup from "../../pages/Utility/Backup";
import IPFilter from "../../pages/Utility/IPFilter";
import Todo from "../../pages/Utility/Todo";

import Configuration from "../../pages/Configuration/Configuration";


import Subjects from "../../pages/Subjects/Subjects";
import SubjectsAllocationTeacher from "../../pages/SubjectsAllocationTeacher/SubjectsAllocationTeacher";

import CreateInstitute from "../../pages/CreateInstitute/CreateInstitute";
import InstituteList from "../../pages/InstituteList/InstituteList";

import CreateEmployee from "../../pages/CreateEmployee/CreateEmployee";
import EmployeeList from "../../pages/EmployeeList/EmployeeList";

import CreateRole from "../../pages/CreateRole/CreateRole";
import RoleList from "../../pages/RoleList/RoleList";

import CreateExam from "../../pages/CreateExam/CreateExam";
import ReportCard from "../../pages/CreateExam/ReportCard";
import ExamList from "../../pages/ExamList/ExamList";

import Book from "../../pages/Library/Book";
import Issue from "../../pages/Library/Issue";
import Return from "../../pages/Library/Return";

import Meeting from "../../pages/Meeting/Meeting";
import MyMeeting from "../../pages/MyMeeting/MyMeeting";
import History from "../../pages/History/History";
import MyNotification from "../../pages/MyNotification/MyNotification";
import SMS from "../../pages/SMS/SMS";
import Email from "../../pages/Email/Email";
import PushNotification from "../../pages/PushNotification/PushNotification";

import Routes from "../../pages/Transport/Routes";
import Vehicle from "../../pages/Transport/Vehicle";
import VehicleInchange from "../../pages/Transport/VehicleInchange";
import Document from "../../pages/Transport/Document";
import Fuel from "../../pages/Transport/Fuel";
import Log from "../../pages/Transport/Log";
import ServiceRecord from "../../pages/Transport/ServiceRecord";
import Report from "../../pages/Transport/Report";


import FreeGroup from "../../pages/Finance/FreeGroup";
import FeeHead from "../../pages/Finance/FeeHead";
import TransportFee from "../../pages/Finance/TransportFee";
import FeeConcession from "../../pages/Finance/FeeConcession";
import FeeAllocation from "../../pages/Finance/FeeAllocation";
import Account from "../../pages/Finance/Account";
import Income from "../../pages/Finance/Income";
import Expense from "../../pages/Finance/Expense";
import AccountTransfer from "../../pages/Finance/AccountTransfer";
import FeeReport from "../../pages/Finance/FeeReport";

import changePassword from "../../pages/changePassword/changePassword";
import Course from "../../pages/Course/Course";
import Exam from "../../pages/Exam/Exam";
// import OnlineExam from "../../pages/OnlineExam/OnlineExam";
import TimeTable from '../../pages/TimeTable/TimeTable';
import Attendance from '../../pages/Attendance/Attendance';
import Fee from '../../pages/Fee/Fee';


function Layout(props) {
  return (
    <div >
      <>
        <div className="overflow-hidden">
          <div className="bg-gray-100 ">
            <div className="flex flex-col justify-center min-h-screen">
              <div className="flex h-screen overflow-hidden" >
                <Sidebar />
                <div className="flex flex-col flex-1 w-0 overflow-hidden">
                  <Header history={props.history} name="" />
                  <Switch>
                    <Route path="/app/changePassword" component={withRouter(changePassword)} />
                    <Route path="/app/dashboard" component={withRouter(Dashboard)} />
                    <Route path="/app/logout" component={withRouter(Logout)} />
                    <Route path="/app/profile" component={withRouter(Profile)} />

                    <Route path="/app/createstudent" component={withRouter(CreateStudent)} />
                    <Route path="/app/studentlist" component={withRouter(StudentList)} />
                    <Route path="/app/studentlistsingle" component={withRouter(StudentListsingle)} />
                    <Route path="/app/student-id-card" component={withRouter(StudentIdCard)} />

                    <Route path="/app/batch" component={withRouter(Batch)} />

                    <Route path="/app/subjects" component={withRouter(Subjects)} />
                    <Route path="/app/subjectsallocationteacher" component={withRouter(SubjectsAllocationTeacher)} />

                    <Route path="/app/course" component={withRouter(Course)} />

                    <Route path="/app/employeeList" component={withRouter(EmployeeList)} />
                    <Route path="/app/createemployee" component={withRouter(CreateEmployee)} />

                    <Route path="/app/section" component={withRouter(Section)} />
                    <Route path="/app/class" component={withRouter(Class)} />
                    <Route path="/app/department" component={withRouter(Department)} />

                    {/* <Route path="/app/classList" component={withRouter(ClassList)} />
                    <Route path="/app/createclass" component={withRouter(CreateClass)} /> */}

                    <Route path="/app/instituteList" component={withRouter(InstituteList)} />
                    <Route path="/app/createinstitute" component={withRouter(CreateInstitute)} />
                    <Route path="/app/admissionenquiry" component={withRouter(AdmissionEnquiry)} />
                    <Route path="/app/visitorlog" component={withRouter(VisitorLog)} />
                    <Route path="/app/postalrecord" component={withRouter(PostalRecord)} />
                    <Route path="/app/complaint" component={withRouter(Complaint)} />
                    <Route path="/app/gatepass" component={withRouter(GatePass)} />
                    <Route path="/app/visitormessage" component={withRouter(VisitorMessage)} />

                    <Route path="/app/meeting" component={withRouter(Meeting)} />
                    <Route path="/app/mymeeting" component={withRouter(MyMeeting)} />
                    <Route path="/app/history" component={withRouter(History)} />
                    <Route path="/app/mynotification" component={withRouter(MyNotification)} />
                    <Route path="/app/sms" component={withRouter(SMS)} />
                    <Route path="/app/email" component={withRouter(Email)} />
                    <Route path="/app/pushnotification" component={withRouter(PushNotification)} />


                    <Route path="/app/routes" component={withRouter(Routes)} />
                    <Route path="/app/vehicle" component={withRouter(Vehicle)} />
                    <Route path="/app/vehicleinchange" component={withRouter(VehicleInchange)} />
                    <Route path="/app/document" component={withRouter(Document)} />
                    <Route path="/app/fuel" component={withRouter(Fuel)} />
                    <Route path="/app/log" component={withRouter(Log)} />
                    <Route path="/app/servicerecord" component={withRouter(ServiceRecord)} />
                    <Route path="/app/report" component={withRouter(Report)} />


                    <Route path="/app/stockcategory" component={withRouter(StockCategory)} />
                    <Route path="/app/stockitem" component={withRouter(StockItem)} />
                    <Route path="/app/vendor" component={withRouter(Vendor)} />
                    <Route path="/app/purchase" component={withRouter(Purchase)} />
                    <Route path="/app/transfer" component={withRouter(Transfer)} />

                    <Route path="/app/feed" component={withRouter(Feed)} />
                    <Route path="/app/article" component={withRouter(Article)} />

                    <Route path="/app/backup" component={withRouter(Backup)} />
                    <Route path="/app/ipfilter" component={withRouter(IPFilter)} />
                    <Route path="/app/todo" component={withRouter(Todo)} />

                    <Route path="/app/rolelist" component={withRouter(RoleList)} />
                    <Route path="/app/createrole" component={withRouter(CreateRole)} />

                    <Route path="/app/examlist" component={withRouter(ExamList)} />
                    <Route path="/app/createexam" component={withRouter(CreateExam)} />

                    <Route path="/app/exam" component={withRouter(Exam)} />
                    <Route path="/app/reportcard" component={withRouter(ReportCard)} />


                    <Route path="/app/book" component={withRouter(Book)} />
                    <Route path="/app/issuebook" component={withRouter(Issue)} />
                    <Route path="/app/returnbook" component={withRouter(Return)} />


                    <Route path="/app/freegroup" component={withRouter(FreeGroup)} />
                    <Route path="/app/feehead" component={withRouter(FeeHead)} />
                    <Route path="/app/transportfee" component={withRouter(TransportFee)} />
                    <Route path="/app/feeConcession" component={withRouter(FeeConcession)} />
                    <Route path="/app/feeallocation" component={withRouter(FeeAllocation)} />
                    <Route path="/app/account" component={withRouter(Account)} />
                    <Route path="/app/income" component={withRouter(Income)} />
                    <Route path="/app/expense" component={withRouter(Expense)} />
                    <Route path="/app/accounttransfer" component={withRouter(AccountTransfer)} />
                    <Route path="/app/feereport" component={withRouter(FeeReport)} />



                    {/* <Route path="/app/onlineexam" component={withRouter(OnlineExam)} /> */}
                    <Route path="/app/timetable" component={withRouter(TimeTable)} />
                    <Route path="/app/attendance" component={withRouter(Attendance)} />
                    <Route path="/app/fee" component={withRouter(Fee)} />

                    <Route path="/app/configuration" component={withRouter(Configuration)} />


                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
