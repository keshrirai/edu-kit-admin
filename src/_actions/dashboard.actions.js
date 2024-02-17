import { dashboardConstants } from '../_constants';
import { dashboardService } from '../_services';
import { alertActions } from './';
// import {  dashboardActions } from './';


export const dashboardActions = {
    resetDashboard,

    // List API
    getStudentList,
    getVisitorList,
    getEmployeeList,
    getRoleList,
    getInstList,
    getCourseList,
    getBatchList,
    getSubjectList,
    getClassList,
    getDepartmentList,
    getExamList,
    getClsTeachAllocatList,
    getSectionList,
    getStockCatList,
    getStockItemList,
    getVendorList,
    getPurchaseList,
    getTransferList,
    getIssueBookList,
    getRouteList,
    getAdmissionEnqList,
    getPostalRecordList,
    getComplaintList,
    getGatePassList,
    getMeetingList,
    getMeetingHistoryList,

    // ALL API List
    getAllCourse,
    getAllDepartment,
    getAllSubject,
    getAllBatch,
    getAllEmployee,
    getAllInst,
    getAllClass,
    getAllStudent,
    getAllStockCat,

    // Create API 
    createSubject,
    createClass,
    createInst,
    createCourse,
    createBatch,
    createDepartment,
    createExam,
    createRole,
    createStudent,
    createClsTeachAllocat,
    createEmployee,
    acceptFee,
    createSection,
    createStockcat,
    createStockItem,
    createVendor,
    createPurchase,
    createTransfer,
    createAdmissionEnq,


    // Delete List 
    deleteClsTeachAllocat,
    deleteRole,
    deleteCourse,
    deleteExam,
    deleteBatch,
    deleteSubject,
    deleteDepartment,
    deleteClass,
    deleteInst,
    deleteStudent,
    deleteEmployee,
    deleteStockItem,
    deleteStockCat,
    deleteVendor,
    deletePurchase,
    deleteTransfer,
    deleteIssueBook,
    deleteRoute,
    deleteAdmissionEnq,
    deleteVisitor,
    deletePostalRecord,
    deleteComplaint,
    deleteGatePass,
    deleteMeeting,


    // Update List 
    updateInst,
    updateStudent,
    updateEmployee,
    updateRole,
    updateCourse,
    updateExam,
    updateBatch,
    updateClsTeachAllocat,
    updateSubject,
    updateDepartment,
    updateClass,
    updateStockItem,

    getCalAndStudentData,

};


function getCalAndStudentData(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getCalAndStudentData(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_STUDENT_CALDATA_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_STUDENT_CALDATA_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_STUDENT_CALDATA_FAILURE, error } }
}

function updateStockItem(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateStockItem========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateStockItem(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_STOCK_ITEM_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_STOCK_ITEM_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_STOCK_ITEM_FAILURE, error } }
}
function updateClass(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateClass========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateClass(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_CLASS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_CLASS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_CLASS_FAILURE, error } }
}
function updateDepartment(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateDepartment========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateDepartment(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_DEPARTMENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_DEPARTMENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_DEPARTMENT_FAILURE, error } }
}
function updateSubject(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateSubject========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateSubject(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_SUBJECT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_SUBJECT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_SUBJECT_FAILURE, error } }
}
function updateClsTeachAllocat(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateClsTeachAllocat========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateClsTeachAllocat(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_TEACHER_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_TEACHER_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_TEACHER_FAILURE, error } }
}

function updateBatch(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateBatch========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateBatch(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_BATCH_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_BATCH_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_BATCH_FAILURE, error } }
}

function updateExam(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateExam========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateExam(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_EXAM_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_EXAM_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_EXAM_FAILURE, error } }
}
function updateCourse(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateCourse========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateCourse(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_COURSE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_COURSE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_COURSE_FAILURE, error } }
}
function updateRole(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateRole========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateRole(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_ROLE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_ROLE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_ROLE_FAILURE, error } }
}
function updateEmployee(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateEmployee========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateEmployee(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_EMPOLYEE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_EMPOLYEE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_EMPOLYEE_FAILURE, error } }
}
function updateStudent(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateStudent========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateStudent(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_STUDENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_STUDENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_STUDENT_FAILURE, error } }
}

function updateInst(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    console.log("updateInst========>ACTION:", data);

    return dispatch => {
        dispatch(request());
        dashboardService.updateInst(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Update Successfully"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.UPDATE_INSTITUTE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.UPDATE_INSTITUTE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.UPDATE_INSTITUTE_FAILURE, error } }
}



// ====================  Create API Function  =================================
function createStockcat(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createStockcat(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_STOCK_CAT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_STOCK_CAT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_STOCK_CAT_FAILURE, error } }
}

function createVendor(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createVendor(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_VENDOR_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_VENDOR_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_VENDOR_FAILURE, error } }
}

function createPurchase(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createPurchase(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_PURCHASE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_PURCHASE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_PURCHASE_FAILURE, error } }
}

function createStockItem(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createStockItem(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_STOCK_ITEM_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_STOCK_ITEM_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_STOCK_ITEM_FAILURE, error } }
}

function createTransfer(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createTransfer(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_TRANSFER_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_TRANSFER_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_TRANSFER_FAILURE, error } }
}

function createSection(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createSection(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_SECTION_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_SECTION_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_SECTION_FAILURE, error } }
}

function createAdmissionEnq(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createAdmissionEnq(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSectionList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_ADMISSION_ENQ_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_ADMISSION_ENQ_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_ADMISSION_ENQ_FAILURE, error } }
}


function acceptFee(data) {

    // let tempdata = {
    //     "keyWord": "",
    //     "pageNo": 1,
    //     "size": 10
    // }

    return dispatch => {
        dispatch(request());
        dashboardService.acceptFee(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    // dispatch(this.getEmployeeList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_FEE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_FEE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_FEE_FAILURE, error } }
}
function createEmployee(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createEmployee(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getEmployeeList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_EMPLOYEE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_EMPLOYEE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_EMPLOYEE_FAILURE, error } }
}
function createStudent(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createStudent(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getStudentList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_STUDENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_STUDENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_STUDENT_FAILURE, error } }
}
function createClsTeachAllocat(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createClsTeachAllocat(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getClsTeachAllocatList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_TEACHER_ALLOCATION_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_TEACHER_ALLOCATION_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_TEACHER_ALLOCATION_FAILURE, error } }
}
function createRole(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createRole(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getRoleList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_ROLE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_ROLE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_ROLE_FAILURE, error } }
}
function createExam(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createExam(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getExamList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_EXAM_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_EXAM_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_EXAM_FAILURE, error } }
}
function createDepartment(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createDepartment(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getDepartmentList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_DEPARTMENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_DEPARTMENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_DEPARTMENT_FAILURE, error } }
}
function createBatch(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createBatch(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getBatchList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_BATCH_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_BATCH_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_BATCH_FAILURE, error } }
}

function createCourse(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createCourse(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getCourseList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_COURSE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_COURSE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_COURSE_FAILURE, error } }
}
function createInst(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createInst(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_INSTITUE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_INSTITUE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_INSTITUE_FAILURE, error } }
}

function createClass(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createClass(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getClassList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_CLASS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_CLASS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_CLASS_FAILURE, error } }
}

function createSubject(data) {

    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }

    return dispatch => {
        dispatch(request());
        dashboardService.createSubject(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSubjectList(tempdata));
                    dispatch(alertActions.success("Success"));
                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.CREATE_SUBJECTS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.CREATE_SUBJECTS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.CREATE_SUBJECTS_FAILURE, error } }
}





// ====================  ALL List API Function  =================================



function getAllStockCat(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllStockCat(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_STOCK_CAT_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_STOCK_CAT_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_STOCK_CAT_LIST_FAILURE, error } }
}

function getAllStudent(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllStudent(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_STUDENT_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_STUDENT_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_STUDENT_LIST_FAILURE, error } }
}
function getAllClass(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllClass(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_CLASS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_CLASS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_CLASS_FAILURE, error } }
}
function getAllInst(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllInst(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_INST_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_INST_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_INST_LIST_FAILURE, error } }
}
function getAllCourse(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllCourse(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_COURSE_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_COURSE_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_COURSE_LIST_FAILURE, error } }
}

function getAllDepartment(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllDepartment(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_DEPARTMENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_DEPARTMENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_DEPARTMENT_FAILURE, error } }
}

function getAllBatch(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllBatch(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_BATCH_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_BATCH_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_BATCH_FAILURE, error } }
}
function getAllEmployee(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllEmployee(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_EMPOLYEE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_EMPOLYEE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_EMPOLYEE_FAILURE, error } }
}

function getAllSubject(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAllSubject(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_SUBJECT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_SUBJECT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_SUBJECT_FAILURE, error } }
}



// ====================  List API Function  =================================

function getPostalRecordList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getPostalRecordList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_POSTAL_RECORD_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_POSTAL_RECORD_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_POSTAL_RECORD_LIST_FAILURE, error } }
}
function getAdmissionEnqList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getAdmissionEnqList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_ADMISSION_ENQ_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_ADMISSION_ENQ_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_ADMISSION_ENQ_LIST_FAILURE, error } }
}
function getRouteList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getRouteList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_ROUTE_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_ROUTE_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_ROUTE_LIST_FAILURE, error } }
}

function getIssueBookList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getIssueBookList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_ISSUE_BOOK_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_ISSUE_BOOK_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_ISSUE_BOOK_LIST_FAILURE, error } }
}
function getTransferList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getTransferList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_TRANSFER_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_TRANSFER_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_TRANSFER_LIST_FAILURE, error } }
}

function getPurchaseList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getPurchaseList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_PURCHASE_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_PURCHASE_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_PURCHASE_LIST_FAILURE, error } }
}
function getVendorList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getVendorList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_VENDOR_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_VENDOR_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_VENDOR_LIST_FAILURE, error } }
}
function getSectionList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getSectionList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_SECTION_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_SECTION_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_SECTION_LIST_FAILURE, error } }
}


function getStockItemList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getStockItemList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_STOCK_ITEMS_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_STOCK_ITEMS_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_STOCK_ITEMS_LIST_FAILURE, error } }
}
function getStockCatList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getStockCatList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_STOCK_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_STOCK_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_STOCK_FAILURE, error } }
}

function getClsTeachAllocatList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getClsTeachAllocatList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_CLASS_TEACHER_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_CLASS_TEACHER_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_CLASS_TEACHER_FAILURE, error } }
}

function getExamList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getExamList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_EXAM_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_EXAM_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_EXAM_LIST_FAILURE, error } }
}

function getDepartmentList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getDepartmentList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_DEPARTMENT_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_DEPARTMENT_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_DEPARTMENT_LIST_FAILURE, error } }
}


function getClassList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getClassList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_CLASS_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_CLASS_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_CLASS_LIST_FAILURE, error } }
}
function getSubjectList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getSubjectList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_SUBJECT_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_SUBJECT_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_SUBJECT_LIST_FAILURE, error } }
}
function getBatchList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getBatchList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_BATCH_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_BATCH_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_BATCH_LIST_FAILURE, error } }
}
function getCourseList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getCourseList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_COURSE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_COURSE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_COURSE_FAILURE, error } }
}
function getInstList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getInstList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_INSTITUTE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_INSTITUTE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_INSTITUTE_FAILURE, error } }
}

function getRoleList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getRoleList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_ROLE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_ROLE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_ROLE_FAILURE, error } }
}

function getEmployeeList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getEmployeeList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_EMPLOYEE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_EMPLOYEE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_EMPLOYEE_FAILURE, error } }
}
function getStudentList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getStudentList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_ALL_STUDENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_ALL_STUDENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_ALL_STUDENT_FAILURE, error } }
}

function getVisitorList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getVisitorList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_VISITOR_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_VISITOR_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_VISITOR_LIST_FAILURE, error } }
}

function getComplaintList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getComplaintList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_COMPLINT_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_COMPLINT_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_COMPLINT_LIST_FAILURE, error } }
}
function getMeetingHistoryList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getMeetingHistoryList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_MEETING_HISTORY_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_MEETING_HISTORY_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_MEETING_HISTORY_LIST_FAILURE, error } }
}
function getMeetingList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getMeetingList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_MEETING_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_MEETING_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_MEETING_LIST_FAILURE, error } }
}
function getGatePassList(data) {
    return dispatch => {
        dispatch(request());
        dashboardService.getGatePassList(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.GET_GATEPASS_LIST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.GET_GATEPASS_LIST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.GET_GATEPASS_LIST_FAILURE, error } }
}

// ==================== DELETE ALL List API Function  =================================

function deleteMeeting(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteMeeting(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getGatePassList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_MEETING_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_MEETING_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_MEETING_FAILURE, error } }
}
function deleteGatePass(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteGatePass(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getGatePassList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_GATEPASS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_GATEPASS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_GATEPASS_FAILURE, error } }
}
function deletePostalRecord(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deletePostalRecord(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getPostalRecordList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_POSTAL_RECORD_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_POSTAL_RECORD_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_POSTAL_RECORD_FAILURE, error } }
}
function deleteComplaint(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteComplaint(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getComplaintList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_COMPLAINT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_COMPLAINT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_COMPLAINT_FAILURE, error } }
}
function deleteVisitor(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteVisitor(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getVisitorList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_VISITOR_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_VISITOR_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_VISITOR_FAILURE, error } }
}

function deleteAdmissionEnq(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteAdmissionEnq(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getAdmissionEnqList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_ADMISSION_ENQ_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_ADMISSION_ENQ_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_ADMISSION_ENQ_FAILURE, error } }
}
function deleteRoute(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteRoute(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getRouteList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_ROUTE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_ROUTE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_ROUTE_FAILURE, error } }
}
function deleteIssueBook(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteIssueBook(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getIssueBookList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_ISSUE_BOOK_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_ISSUE_BOOK_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_ISSUE_BOOK_FAILURE, error } }
}
function deleteTransfer(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteTransfer(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getTransferList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_TRANSFER_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_TRANSFER_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_TRANSFER_FAILURE, error } }
}
function deletePurchase(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deletePurchase(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getPurchaseList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_PURCHASE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_PURCHASE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_PURCHASE_FAILURE, error } }
}
function deleteVendor(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteVendor(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getVendorList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_VENDOR_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_VENDOR_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_VENDOR_FAILURE, error } }
}
function deleteStockCat(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteStockCat(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getStockCatList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_STOCK_CATEGORY_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_STOCK_CATEGORY_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_STOCK_CATEGORY_FAILURE, error } }
}
function deleteStockItem(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteStockItem(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getStockItemList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_STOCK_ITEMS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_STOCK_ITEMS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_STOCK_ITEMS_FAILURE, error } }
}
function deleteClsTeachAllocat(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteClsTeachAllocat(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getClsTeachAllocatList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_TEACHER_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_TEACHER_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_TEACHER_FAILURE, error } }
}

function deleteEmployee(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteEmployee(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getEmployeeList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_EMPLOYEE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_EMPLOYEE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_EMPLOYEE_FAILURE, error } }
}

function deleteStudent(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteStudent(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getStudentList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_STUDENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_STUDENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_STUDENT_FAILURE, error } }
}

function deleteInst(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteInst(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getInstList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_INST_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_INST_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_INST_FAILURE, error } }
}

function deleteClass(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteClass(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getClassList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_CLASS_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_CLASS_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_CLASS_FAILURE, error } }
}

function deleteDepartment(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteDepartment(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getDepartmentList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_DEPARTMENT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_DEPARTMENT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_DEPARTMENT_FAILURE, error } }
}

function deleteSubject(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteSubject(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getSubjectList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_SUBJECT_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_SUBJECT_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_SUBJECT_FAILURE, error } }
}

function deleteBatch(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteBatch(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getBatchList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_BATCH_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_BATCH_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_BATCH_FAILURE, error } }
}

function deleteExam(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteExam(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getExamList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_EXAM_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_EXAM_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_EXAM_FAILURE, error } }
}

function deleteCourse(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteCourse(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getCourseList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_COURSE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_COURSE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_COURSE_FAILURE, error } }
}

function deleteRole(data) {
    let tempdata = {
        "keyWord": "",
        "pageNo": 1,
        "size": 10
    }
    return dispatch => {
        dispatch(request());
        dashboardService.deleteRole(data)
            .then(
                dashboards => {
                    dispatch(success(dashboards));
                    dispatch(this.getRoleList(tempdata));

                },
                error => {
                    dispatch(alertActions.error(error));
                    dispatch(failure(error))
                }
            );
    };
    function request() { return { type: dashboardConstants.DELETE_ROLE_REQUEST } }
    function success(dashboards) { return { type: dashboardConstants.DELETE_ROLE_SUCCESS, dashboards } }
    function failure(error) { return { type: dashboardConstants.DELETE_ROLE_FAILURE, error } }
}

function resetDashboard() {
    return dispatch => {
        dispatch(success());
    };
    function success() { return { type: dashboardConstants.RESET_DASHBOARD_REDUX } }
}
