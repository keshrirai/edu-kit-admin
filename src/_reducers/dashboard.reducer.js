import { dashboardConstants } from '../_constants';

export function dashboard(state = {}, action) {
  // console.log("action.typeaction.typeaction.type  ", action);

  switch (action.type) {

    // ====================  UPDATE API Reducer  =================================


    case dashboardConstants.UPDATE_STOCK_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_STOCK_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_STOCK_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_CLASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_SUBJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_SUBJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_TEACHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_TEACHER_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_BATCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_BATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_BATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_EXAM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_EXAM_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_EXAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_EMPOLYEE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_EMPOLYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_EMPOLYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.UPDATE_INSTITUTE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.UPDATE_INSTITUTE_SUCCESS:
      return {
        ...state,
        loading: false,
        updateShow: true
      };
    case dashboardConstants.UPDATE_INSTITUTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };


    // ====================  CREARTE API Function  =================================

    case dashboardConstants.CREATE_STOCK_CAT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_STOCK_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_STOCK_CAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_STOCK_ITEM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_STOCK_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_STOCK_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_VENDOR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_VENDOR_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_VENDOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_PURCHASE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_PURCHASE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_PURCHASE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_TRANSFER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_TRANSFER_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_TRANSFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_SECTION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_SECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_SECTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_ADMISSION_ENQ_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_ADMISSION_ENQ_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_ADMISSION_ENQ_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_FEE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_FEE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_FEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_TEACHER_ALLOCATION_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_TEACHER_ALLOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_TEACHER_ALLOCATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_EXAM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_EXAM_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_EXAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_DEAPRTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_DEAPRTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_DEAPRTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_BATCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_BATCH_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_BATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_INSTITUE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_INSTITUE_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_INSTITUE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_CLASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.CREATE_SUBJECTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.CREATE_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        // isTicketCreated: true
      };
    case dashboardConstants.CREATE_SUBJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };



    // ==================== All List API Reducer  ===================================


    case dashboardConstants.GET_MEETING_HISTORY_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_MEETING_HISTORY_LIST_SUCCESS:
      return {
        ...state,
        getMeetingHistoryList: action.dashboards.getMeetingHistoryList.list,
        // stdTotal: action.dashboards.getComplaintList.total,

      };
    case dashboardConstants.GET_MEETING_HISTORY_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_MEETING_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_MEETING_LIST_SUCCESS:
      return {
        ...state,
        getMeetingList: action.dashboards.getMeetingList,
        // stdTotal: action.dashboards.getComplaintList.total,

      };
    case dashboardConstants.GET_MEETING_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };



    case dashboardConstants.GET_GATEPASS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_GATEPASS_LIST_SUCCESS:
      return {
        ...state,
        getGatePassList: action.dashboards.getGatePassList.list,
        // stdTotal: action.dashboards.getComplaintList.total,

      };
    case dashboardConstants.GET_GATEPASS_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };






    case dashboardConstants.GET_COMPLINT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_COMPLINT_LIST_SUCCESS:
      return {
        ...state,
        getComplaintList: action.dashboards.getComplaintList.list,
        // stdTotal: action.dashboards.getComplaintList.total,

      };
    case dashboardConstants.GET_COMPLINT_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_VISITOR_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_VISITOR_LIST_SUCCESS:
      return {
        ...state,
        getVisitorList: action.dashboards.getVisitorList.list,
        // stdTotal: action.dashboards.getVisitorList.total,

      };
    case dashboardConstants.GET_VISITOR_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };



    case dashboardConstants.GET_ALL_STOCK_CAT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_STOCK_CAT_LIST_SUCCESS:
      return {
        ...state,
        getAllStockCat: action.dashboards.getAllStockCat,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_STOCK_CAT_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_STUDENT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_STUDENT_LIST_SUCCESS:
      return {
        ...state,
        getAllStudent: action.dashboards.getAllStudent,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_STUDENT_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_POSTAL_RECORD_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_POSTAL_RECORD_LIST_SUCCESS:
      return {
        ...state,
        PostalRecordData: action.dashboards.getPostalRecordList.data,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_POSTAL_RECORD_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };



    case dashboardConstants.GET_ALL_CLASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_CLASS_SUCCESS:
      return {
        ...state,
        getAllClass: action.dashboards.getAllClass,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_CLASS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_SUBJECT_SUCCESS:
      return {
        ...state,
        getAllSubject: action.dashboards.getAllSubject,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_SUBJECT_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_DEPARTMENT_SUCCESS:
      return {
        ...state,
        getAllDepartment: action.dashboards.getAllDepartment,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_DEPARTMENT_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_BATCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_BATCH_SUCCESS:
      return {
        ...state,
        getAllBatch: action.dashboards.getAllBatch,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_BATCH_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_EMPOLYEE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_EMPOLYEE_SUCCESS:
      return {
        ...state,
        getAllEmployee: action.dashboards.getAllEmployee,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_EMPOLYEE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_COURSE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_COURSE_LIST_SUCCESS:
      return {
        ...state,
        getAllCourse: action.dashboards.getAllCourse,
        // stdTotal: action.dashboards.getAllCourse.total,

      };
    case dashboardConstants.GET_ALL_COURSE_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_INST_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_INST_LIST_SUCCESS:
      return {
        ...state,
        getAllInst: action.dashboards.getAllInst,
        // stdTotal: action.dashboards.getAllINST.total,

      };
    case dashboardConstants.GET_ALL_INST_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_STUDENT_CALDATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_STUDENT_CALDATA_SUCCESS:
      return {
        ...state,
        getCalAndStudentData: action.dashboards.getCalAndStudentData,
        stdTotal: action.dashboards.getCalAndStudentData.total,

      };
    case dashboardConstants.GET_STUDENT_CALDATA_FAILURE:
      return {
        ...state,
        error: action.error
      };







    // ====================  List API Reducer  ===================================

    case dashboardConstants.GET_ALL_TRANSFER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_TRANSFER_LIST_SUCCESS:
      return {
        ...state,
        getTransferList: action.dashboards.getTransferList.list,
        // stdTotal: action.dashboards.getTRANSFERList.total,

      };
    case dashboardConstants.GET_ALL_TRANSFER_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_POSTAL_RECORD_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_POSTAL_RECORD_LIST_SUCCESS:
      return {
        ...state,
        getPostalRecordList: action.dashboards.getPostalRecordList.list,
        // stdTotal: action.dashboards.getPOSTAL_RECORDList.total,

      };
    case dashboardConstants.GET_ALL_POSTAL_RECORD_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_ADMISSION_ENQ_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_ADMISSION_ENQ_LIST_SUCCESS:
      return {
        ...state,
        getAdmissionEnqList: action.dashboards.getAdmissionEnqList.list,
        // stdTotal: action.dashboards.getADMISSION_ENQList.total,

      };
    case dashboardConstants.GET_ALL_ADMISSION_ENQ_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_ROUTE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_ROUTE_LIST_SUCCESS:
      return {
        ...state,
        getRouteList: action.dashboards.getRouteList,
        // stdTotal: action.dashboards.getRouteList.total,

      };
    case dashboardConstants.GET_ALL_ROUTE_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_PURCHASE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_PURCHASE_LIST_SUCCESS:
      return {
        ...state,
        getPurchaseList: action.dashboards.getPurchaseList.list,
        // stdTotal: action.dashboards.getPurchaseList.total,

      };
    case dashboardConstants.GET_ALL_PURCHASE_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_ISSUE_BOOK_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_ISSUE_BOOK_LIST_SUCCESS:
      return {
        ...state,
        getIssueBookList: action.dashboards.getIssueBookList.list,
        // stdTotal: action.dashboards.getIssueBookList.total,

      };
    case dashboardConstants.GET_ALL_ISSUE_BOOK_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_VENDOR_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_VENDOR_LIST_SUCCESS:
      return {
        ...state,
        getVendorList: action.dashboards.getVendorList.list,
        // stdTotal: action.dashboards.getVendorList.total,

      };
    case dashboardConstants.GET_ALL_VENDOR_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_SECTION_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_SECTION_LIST_SUCCESS:
      return {
        ...state,
        getSectionList: action.dashboards.getSectionList.list,
        stdTotal: action.dashboards.getSectionList.total,

      };
    case dashboardConstants.GET_ALL_SECTION_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_CLASS_TEACHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_CLASS_TEACHER_SUCCESS:
      return {
        ...state,
        getClsTeachAllocatList: action.dashboards.getClsTeachAllocatList.list,
        stdTotal: action.dashboards.getClsTeachAllocatList.total,

      };
    case dashboardConstants.GET_ALL_CLASS_TEACHER_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_EXAM_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_EXAM_LIST_SUCCESS:
      return {
        ...state,
        getExamList: action.dashboards.getExamList.list,
        stdTotal: action.dashboards.getExamList.total,

      };
    case dashboardConstants.GET_ALL_EXAM_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_DEPARTMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_DEPARTMENT_LIST_SUCCESS:
      return {
        ...state,
        getDepartmentList: action.dashboards.getDepartmentList.list,
        stdTotal: action.dashboards.getDepartmentList.total,

      };
    case dashboardConstants.GET_ALL_DEPARTMENT_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_CLASS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_CLASS_LIST_SUCCESS:
      return {
        ...state,
        getClassList: action.dashboards.getClassList
        // stdTotal: action.dashboards.getClassList.total,

      };
    case dashboardConstants.GET_ALL_CLASS_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_ALL_SUBJECT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_SUBJECT_LIST_SUCCESS:
      return {
        ...state,
        getSubjectList: action.dashboards.getSubjectList.list,
        stdTotal: action.dashboards.getSubjectList.total,

      };
    case dashboardConstants.GET_ALL_SUBJECT_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_BATCH_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_BATCH_LIST_SUCCESS:
      return {
        ...state,
        getBatchList: action.dashboards.getBatchList.list,
        stdTotal: action.dashboards.getBatchList.total,

      };
    case dashboardConstants.GET_ALL_BATCH_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_COURSE_SUCCESS:
      return {
        ...state,
        getCourseList: action.dashboards.getCourseList.list,
        stdTotal: action.dashboards.getCourseList.total,

      };
    case dashboardConstants.GET_ALL_COURSE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_INSTITUTE_REQUEST:
      return {
        ...state,
        loading: true,
        updateShow: false
      };
    case dashboardConstants.GET_ALL_INSTITUTE_SUCCESS:
      return {
        ...state,
        getInstList: action.dashboards.getInstList.list,
        stdTotal: action.dashboards.getInstList.total,

      };
    case dashboardConstants.GET_ALL_INSTITUTE_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_ALL_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_ROLE_SUCCESS:
      return {
        ...state,
        getRoleList: action.dashboards.getRoleList.list,
        stdTotal: action.dashboards.getRoleList.total,

      };
    case dashboardConstants.GET_ALL_ROLE_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_EMPLOYEE_SUCCESS:
      return {
        ...state,
        getEmployeeList: action.dashboards.getEmployeeList.list,
        stdTotal: action.dashboards.getEmployeeList.total,

      };
    case dashboardConstants.GET_ALL_EMPLOYEE_FAILURE:
      return {
        ...state,
        error: action.error
      };


    case dashboardConstants.GET_ALL_STUDENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_STUDENT_SUCCESS:
      return {
        ...state,
        getStudentList: action.dashboards.getStudentList.list,
        stdTotal: action.dashboards.getStudentList.total,

      };
    case dashboardConstants.GET_ALL_STUDENT_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_STOCK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_STOCK_SUCCESS:
      return {
        ...state,
        getStockCatList: action.dashboards.getStockCatList.list,
        stdTotal: action.dashboards.getStockCatList.total,

      };
    case dashboardConstants.GET_ALL_STOCK_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case dashboardConstants.GET_ALL_STOCK_ITEMS_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GET_ALL_STOCK_ITEMS_LIST_SUCCESS:
      return {
        ...state,
        getStockItemList: action.dashboards.getStockItemList.list,
        // stdTotal: action.dashboards.getStockItemList.total,

      };
    case dashboardConstants.GET_ALL_STOCK_ITEMS_LIST_FAILURE:
      return {
        ...state,
        error: action.error
      };



    case dashboardConstants.DELETE_POSTAL_RECORD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_POSTAL_RECORD_SUCCESS:
      return {
        ...state,
        // addPOSTAL_RECORDSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_POSTAL_RECORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_MEETING_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_MEETING_SUCCESS:
      return {
        ...state,
        // addMEETINGSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_MEETING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_GATEPASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_GATEPASS_SUCCESS:
      return {
        ...state,
        // addGATEPASSSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_GATEPASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_COMPLAINT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_COMPLAINT_SUCCESS:
      return {
        ...state,
        // addCOMPLAINTSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_COMPLAINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_VISITOR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_VISITOR_SUCCESS:
      return {
        ...state,
        // addVISITORSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_VISITOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_ADMISSION_ENQ_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_ADMISSION_ENQ_SUCCESS:
      return {
        ...state,
        // addADMISSION_ENQSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_ADMISSION_ENQ_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case dashboardConstants.DELETE_ROUTE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_ROUTE_SUCCESS:
      return {
        ...state,
        // addROUTESuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_ROUTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_ISSUE_BOOK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_ISSUE_BOOK_SUCCESS:
      return {
        ...state,
        // addISSUE_BOOKSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_ISSUE_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_TRANSFER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_TRANSFER_SUCCESS:
      return {
        ...state,
        // addTRANSFERSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_TRANSFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_PURCHASE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_PURCHASE_SUCCESS:
      return {
        ...state,
        // addPURCHASESuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_PURCHASE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_TEACHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_TEACHER_SUCCESS:
      return {
        ...state,
        // addTEACHERSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_TEACHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_STOCK_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_STOCK_ITEMS_SUCCESS:
      return {
        ...state,
        // addSTOCK_ITEMSSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_STOCK_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_VENDOR_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_VENDOR_SUCCESS:
      return {
        ...state,
        // addVENDORSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_VENDOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_STOCK_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_STOCK_CATEGORY_SUCCESS:
      return {
        ...state,
        // addSTOCK_CATEGORYSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_STOCK_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        // addSTUDENTSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_INST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_INST_SUCCESS:
      return {
        ...state,
        // addINSTSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_INST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_CLASS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_CLASS_SUCCESS:
      return {
        ...state,
        // addCLASSSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_CLASS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_DEPARTMENT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_DEPARTMENT_SUCCESS:
      return {
        ...state,
        // addDEPARTMENTSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_DEPARTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_SUBJECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_SUBJECT_SUCCESS:
      return {
        ...state,
        // addSUBJECTSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_SUBJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_BATCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_BATCH_SUCCESS:
      return {
        ...state,
        // addBATCHSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_BATCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_EXAM_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_EXAM_SUCCESS:
      return {
        ...state,
        // addEXAMSuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_EXAM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        // addCOURSESuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case dashboardConstants.DELETE_ROLE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETE_ROLE_SUCCESS:
      return {
        ...state,
        // addROLESuccess: false,
        loading: false,
      };
    case dashboardConstants.DELETE_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };







    case dashboardConstants.RESET_DASHBOARD_REDUX:
      return {
      };

    default:
      return state
  }
}