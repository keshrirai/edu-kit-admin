import { authHeader } from '../_helpers';
import { CONST } from '../_config';
// import moment from 'moment';


export const dashboardService = {

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

    // All List API
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
    deleteVendor,
    deleteStockCat,
    deleteStockItem,
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

    // UPDATE LIST
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
// ====================  UPDATE API Function  =================================

function getCalAndStudentData(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCalAndStudentData`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCalAndStudentData: data.data
            }
            console.log("i am in service''...>>getCalAndStudentData ::", userObj);

            return userObj;
        });
}
function updateStockItem(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateStockItem`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateStockItem: data.data
            }
            console.log("i am in service''...>>updateStockItem ::", userObj);

            return userObj;
        });
}
function updateClass(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateClass`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateClass: data.data
            }
            console.log("i am in service''...>>updateClass ::", userObj);

            return userObj;
        });
}
function updateDepartment(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateDepartment`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateDepartment: data.data
            }
            console.log("i am in service''...>>updateDepartment ::", userObj);

            return userObj;
        });
}
function updateSubject(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateSubject`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateSubject: data.data
            }
            console.log("i am in service''...>>updateSubject ::", userObj);

            return userObj;
        });
}
function updateClsTeachAllocat(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateClsTeachAllocat`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateClsTeachAllocat: data.data
            }
            console.log("i am in service''...>>updateClsTeachAllocat ::", userObj);

            return userObj;
        });
}
function updateBatch(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateBatch`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateBatch: data.data
            }
            console.log("i am in service''...>>updateBatch ::", userObj);

            return userObj;
        });
}
function updateExam(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateExam`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateExam: data.data
            }
            console.log("i am in service''...>>updateExam ::", userObj);

            return userObj;
        });
}
function updateCourse(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateCourse`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateCourse: data.data
            }
            console.log("i am in service''...>>updateCourse ::", userObj);

            return userObj;
        });
}
function updateRole(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateRole`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateRole: data.data
            }
            console.log("i am in service''...>>updateRole ::", userObj);

            return userObj;
        });
}
function updateEmployee(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateEmployee`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateEmployee: data.data
            }
            console.log("i am in service''...>>updateEmployee ::", userObj);

            return userObj;
        });
}
function updateStudent(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateStudent`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateStudent: data.data
            }
            console.log("i am in service''...>>updateStudent ::", userObj);

            return userObj;
        });
}
function updateInst(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateInst`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateInst: data.data
            }
            console.log("i am in service''...>>updateInst ::", userObj);

            return userObj;
        });
}



// ====================  Create API Function  =================================

function createStockcat(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createStockcat`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                stockCatData: data.data
            }
            return userObj;
        });
}

function createStockItem(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createStockItem`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                stockItemData: data.data
            }
            return userObj;
        });
}

function createPurchase(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createPurchase`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                purchaseData: data.data
            }
            return userObj;
        });
}

function createAdmissionEnq(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createAdmissionEnq`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                admissionEnqData: data.data
            }
            return userObj;
        });
}

function createTransfer(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createTransfer`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                transferData: data.data
            }
            return userObj;
        });
}

function createVendor(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createVendor`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                vendorData: data.data
            }
            return userObj;
        });
}

function createSection(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createSection`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                sectionData: data.data
            }
            return userObj;
        });
}
function acceptFee(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/acceptFee`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                feeData: data.data
            }
            return userObj;
        });
}

function createEmployee(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createEmployee`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                empolyeeData: data.data
            }
            return userObj;
        });
}

function createStudent(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createStudent`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                studentData: data.data
            }
            return userObj;
        });
}

function createClsTeachAllocat(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createClsTeachAllocat`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                teacherData: data.data
            }
            return userObj;
        });
}
function createRole(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createRole`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                examData: data.data
            }
            return userObj;
        });
}
function createExam(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createExam`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                examData: data.data
            }
            return userObj;
        });
}

function createDepartment(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createDepartment`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                departmentData: data.data
            }
            return userObj;
        });
}

function createBatch(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createBatch`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                batchData: data.data
            }
            return userObj;
        });
}

function createCourse(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createCourse`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                courseData: data.data
            }
            return userObj;
        });
}
function createInst(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createInst`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                instData: data.data
            }
            return userObj;
        });
}

function createClass(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createClass`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                classData: data.data
            }
            return userObj;
        });
}

function createSubject(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createSubject`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                subjectData: data.data
            }
            return userObj;
        });
}



// ==================== All List API Function  =================================

function getAllStockCat(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllStockCat`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllStockCat: res.data
            }
            console.log("in service getAllStockCatgetAllStockCatgetAllStockCat ", userObj);
            return userObj;
        });
}
function getAllStudent(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllStudent`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllStudent: res.data
            }
            console.log("in service getAllStudentgetAllStudentgetAllStudent ", userObj);
            return userObj;
        });
}
function getAllClass(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllClass`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllClass: res.data
            }
            // console.log("in service getAllClassgetAllClassgetAllClass ", userObj);
            return userObj;
        });
}
function getAllSubject(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllSubject`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllSubject: res.data
            }
            console.log("in service getAllSubjectgetAllSubjectgetAllSubject ", userObj);
            return userObj;
        });
}

function getAllDepartment(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllDepartment`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllDepartment: res.data
            }
            console.log("in service getAllDepartmentgetAllDepartmentgetAllDepartment ", userObj);
            return userObj;
        });
}

function getAllBatch(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllBatch`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllBatch: res.data
            }
            console.log("in service getAllBatchgetAllBatchgetAllBatch ", userObj);
            return userObj;
        });
}
function getAllEmployee(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllEmployee`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllEmployee: res.data
            }
            console.log("in service getAllEmployeegetAllEmployeegetAllEmployee ", userObj);
            return userObj;
        });
}
function getAllInst(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllInst`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllInst: res.data
            }
            console.log("in service getAllInstgetAllInstgetAllInst ", userObj);
            return userObj;
        });
}
function getSectionList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getSectionList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getSectionList: res.data
            }
            console.log("in service getSectionListgetSectionListgetSectionList ", userObj);
            return userObj;
        });
}

function getVendorList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getVendorList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getVendorList: res.data
            }
            console.log("in service getVendorList ", userObj);
            return userObj;
        });
}
function getStockItemList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getStockItemList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getStockItemList: res.data
            }
            console.log("in service getStockItemList ", userObj);
            return userObj;
        });
}

function getStockCatList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getStockCatList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getStockCatList: res.data
            }
            console.log("in service getStockCatList ", userObj);
            return userObj;
        });
}

function getClsTeachAllocatList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getClsTeachAllocatList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getClsTeachAllocatList: res.data
            }
            console.log("in service getClsTeachAllocatListgetClsTeachAllocatListgetClsTeachAllocatList ", userObj);
            return userObj;
        });
}
function getPostalRecordList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getPostalRecordList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getPostalRecordList: res.data
            }
            console.log("in service getPostalRecordListgetPostalRecordListgetPostalRecordList ", userObj);
            return userObj;
        });
}
function getAdmissionEnqList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAdmissionEnqList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAdmissionEnqList: res.data
            }
            console.log("in service getAdmissionEnqListgetAdmissionEnqListgetAdmissionEnqList ", userObj);
            return userObj;
        });
}
function getAllCourse(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllCourse`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllCourse: res.data
            }
            // console.log("in service getAllCoursegetAllCoursegetAllCourse ", userObj);
            return userObj;
        });
}


// ====================  List API Function  =================================

function getExamList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getExamList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getExamList: res.data
            }
            console.log("in service getExamListgetExamListgetExamList ", res.data);
            return userObj;
        });
}

function getDepartmentList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getDepartmentList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getDepartmentList: res.data
            }
            console.log("in service getDepartmentListgetDepartmentListgetDepartmentList ", res.data);
            return userObj;
        });
}
function getClassList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getClassList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getClassList: res.data
            }
            console.log("in service getClassListgetClassListgetClassList ", res.data.list);
            return userObj;
        });
}
function getSubjectList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getSubjectList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getSubjectList: res.data
            }
            console.log("in service getSubjectListgetSubjectListgetSubjectList ", res.data);
            return userObj;
        });
}
function getBatchList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBatchList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getBatchList: res.data
            }
            console.log("in service getBatchListgetBatchListgetBatchList ", res.data);
            return userObj;
        });
}
function getCourseList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCourseList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getCourseList: res.data
            }
            // console.log("in service getCourseListgetCourseListgetCourseList ", res.data);
            return userObj;
        });
}
function getInstList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getInstList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getInstList: res.data
            }
            console.log("in service getInstListgetInstListgetInstList", res.data);
            return userObj;
        });
}
function getRoleList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getRoleList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getRoleList: res.data
            }
            console.log("in service getRoleListgetRoleListgetRoleList ", res.data);
            return userObj;
        });
}

function getEmployeeList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getEmployeeList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getEmployeeList: res.data
            }
            // console.log("in service getEmployeeListgetEmployeeListgetEmployeeList ", res.data);
            return userObj;
        });
}

function getStudentList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getStudentList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getStudentList: res.data
            }
            // console.log("in service getStudentListgetStudentListgetStudentList ", res.data);
            return userObj;
        });
}


function getRouteList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getRouteList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getRouteList: res.data
            }
            console.log("in service getRouteListgetRouteListgetRouteList ", res.data);
            return userObj;
        });
}

function getIssueBookList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getIssueBookList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getIssueBookList: res.data
            }
            console.log("in service getIssueBookListgetIssueBookListgetIssueBookList ", res.data);
            return userObj;
        });
}

function getTransferList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getTransferList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getTransferList: res.data
            }
            console.log("in service getTransferListgetTransferListgetTransferList ", res.data);
            return userObj;
        });
}

function getPurchaseList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getPurchaseList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getPurchaseList: res.data
            }
            console.log("in service getPurchaseListgetPurchaseListgetPurchaseList ", res.data);
            return userObj;
        });
}
function getVisitorList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getVisitorList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getVisitorList: res.data
            }
            // console.log("in service getVisitorListgetVisitorListgetVisitorList ", res.data);
            return userObj;
        });
}
function getComplaintList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getComplaintList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getComplaintList: res.data
            }
            console.log("in service getComplaintListgetComplaintListgetComplaintList ", res.data);
            return userObj;
        });
}
function getGatePassList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getGatePassList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getGatePassList: res.data
            }
            console.log("in service getGatePassListgetGatePassListgetGatePassList ", res.data);
            return userObj;
        });
}
function getMeetingHistoryList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getMeetingHistoryList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getMeetingHistoryList: res.data
            }
            console.log("in service getMeetingHistoryListgetMeetingHistoryListgetMeetingHistoryList ", res.data);
            return userObj;
        });
}
function getMeetingList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getMeetingList`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getMeetingList: res.data
            }
            console.log("in service getMeetingListgetMeetingListgetMeetingListuserObjuserObjuserObjuserObj ", userObj);
            return userObj;
        });
}



// ==================== Delete List API Function  =================================

function deleteComplaint(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteComplaint`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteComplaint: data.data
            }
            console.log("i am in service''...>> deleteComplaint ::", userObj);

            return userObj;
        });
}
function deleteMeeting(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteMeeting`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteMeeting: data.data
            }
            console.log("i am in service''...>> deleteMeeting ::", userObj);

            return userObj;
        });
}
function deleteGatePass(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteGatePass`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteGatePass: data.data
            }
            console.log("i am in service''...>> deleteGatePass ::", userObj);

            return userObj;
        });
}
function deleteVendor(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteVendor`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteVendor: data.data
            }
            console.log("i am in service''...>> deleteVendor ::", userObj);

            return userObj;
        });
}
function deleteStockCat(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteStockCat`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteStockCat: data.data
            }
            console.log("i am in service''...>> deleteStockCat ::", userObj);

            return userObj;
        });
}

function deletePostalRecord(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deletePostalRecord`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deletePostalRecord: data.data
            }
            console.log("i am in service''...>> deletePostalRecord ::", userObj);

            return userObj;
        });
}
function deleteVisitor(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteVisitor`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteVisitor: data.data
            }
            console.log("i am in service''...>> deleteVisitor ::", userObj);

            return userObj;
        });
}

function deleteAdmissionEnq(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteAdmissionEnq`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteAdmissionEnq: data.data
            }
            console.log("i am in service''...>> deleteAdmissionEnq ::", userObj);

            return userObj;
        });
}

function deleteRoute(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteRoute`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteRoute: data.data
            }
            console.log("i am in service''...>> deleteRoute ::", userObj);

            return userObj;
        });
}

function deleteIssueBook(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteIssueBook`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteIssueBook: data.data
            }
            console.log("i am in service''...>> deleteIssueBook ::", userObj);

            return userObj;
        });
}
function deleteTransfer(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteTransfer`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteTransfer: data.data
            }
            console.log("i am in service''...>> deleteTransfer ::", userObj);

            return userObj;
        });
}
function deletePurchase(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deletePurchase`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deletePurchase: data.data
            }
            console.log("i am in service''...>> deletePurchase ::", userObj);

            return userObj;
        });
}
function deleteStockItem(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteStockItem`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteStockItem: data.data
            }
            console.log("i am in service''...>> deleteStockItem ::", userObj);

            return userObj;
        });
}

function deleteClsTeachAllocat(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteClsTeachAllocat`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteTeacher: data.data
            }
            console.log("i am in service''...>> deleteClsTeachAllocat ::", userObj);

            return userObj;
        });
}

function deleteEmployee(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteEmployee`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteEmployee: data.data
            }
            console.log("i am in service''...>>deleteEmployee ::", userObj);

            return userObj;
        });
}

function deleteStudent(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteStudent`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteStudent: data.data
            }
            console.log("i am in service''...>>deleteStudent ::", userObj);

            return userObj;
        });
}
function deleteInst(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteInst`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteInst: data.data
            }
            console.log("i am in service''...>>deleteInst ::", userObj);

            return userObj;
        });
}
function deleteClass(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteClass`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteClass: data.data
            }
            console.log("i am in service''...>> deleteClass ::", userObj);

            return userObj;
        });
}
function deleteDepartment(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteDepartment`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteDepartment: data.data
            }
            console.log("i am in service''...>> deleteDepartment ::", userObj);

            return userObj;
        });
}
function deleteSubject(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteSubject`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteSubject: data.data
            }
            console.log("i am in service''...>> deleteSubject ::", userObj);

            return userObj;
        });
}
function deleteBatch(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteBatch`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteBatch: data.data
            }
            console.log("i am in service''...>> deleteBatch ::", userObj);

            return userObj;
        });
}
function deleteExam(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteExam`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteExam: data.data
            }
            console.log("i am in service''...>> deleteExam ::", userObj);

            return userObj;
        });
}
function deleteCourse(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteCourse`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteCourse: data.data
            }
            console.log("i am in service''...>> deleteCourse ::", userObj);

            return userObj;
        });
}
function deleteRole(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteRole`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                deleteRole: data.data
            }
            console.log("i am in service''...>> deleteRole ::", userObj);

            return userObj;
        });
}





function logout() {
    // remove user from local storage to log user out
    window.sessionStorage.removeItem('user');
    window.location.href = "#/home"
}






function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}