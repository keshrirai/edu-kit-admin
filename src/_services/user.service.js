
import { authHeader, history } from '../_helpers';
import { CONST } from '../_config';

export const userService = {
    saveBTST,
    getKYC,
    swapAmount,
    sendCoin,
    getPrice,
    getTicketList,
    getTx,
    getTxAllMulti,
    createTicket,
    createKYC,
    getDocumentList,
    login,
    loginValidateOtp,
    registerValidateOtp,
    forgotPassword,
    sendOtpTX,
    sendFromWithOTP,
    transactionSearch,
    resendVerificationLink,
    register,
    logout,
    sendFrom,
    getUserDetails,
    verifyEmail,
    createNotification,
    validateId,
    forgotUpdatePassword,
    addUser,
    uploadImage,
    statics,
    disableUser,
    updateUser,
    deleteUser,
    updatePassword,
    updateUserInfo,
    getUserInfo,
    getBTST,
    getPackageBTST,
    getSTAKE,
    getPackageSTAKE,
    saveSTAKE,
    saveUserInfo,
    getDocumentListObj,
    saveKycDoc,
    uploadImagePan,
    uploadImagePassport,
    uploadImageAdhaar,
    uploadImageSelfie,
    saveKycDocAadhar,
    saveKycDocPan,
    saveKycDocPassport,
    saveKycDocSelfie,
    getWalletList,
    getAllIndex,
    buyIndex,
    getCoinBalance,
    getIndexOrder,
    sellIndex,
    createWallet,
    getAllCountry,
    getAllState,
    getAllCity,
    validateLoginOtp,
    updatePasswordValidateOtp,
    swapCoinAmount,
    getAllCoinIndexByIndexId,
    getINRCoinId,
    createMakePayment,
    getMakePaymentList,
    getUserWalletByCoinName,
    getCountriesList,
    getCitiesList,
    getStatesList,
    getReferalById,
    saveUserPersonalAddr,
    saveSocialMedia,
    sendBalance,
    getUserNameVerified,
    getCmcCoinByTickerName,
    getProfileDataPi,
    getPackageList,
    // getUserPackages,
    getUserByRefCode,
    getDftWallet,
    saveDftWalletAddress,
    claimAddress,
    withdrawBalance,
    getUserListByEmail,
    createUserPromoPackage,
    getUserPromoPackageByUserId,
    claimPromoPack,
    getSocialMediaById,
    getCmcCoinList,
    getAllLevelWelcome,
    getAllLevelMining,
    getLevelByIdUser,
    getLevelByIdUserPackage,
    getLevelByIdUserTx,
    changeEmail

};


function getLevelByIdUserTx(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getLevelByIdUserTx`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getLevelByIdUserTx: res.data
            }
            console.log("in service getLevelByIdUserTxgetLevelByIdUserTxgetLevelByIdUserTx ", res.data);
            return userObj;
        });
}

function getLevelByIdUserPackage(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getLevelByIdUserPackage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getLevelByIdUserPackage: res.data
            }
            console.log("in service getLevelByIdUserPackagegetLevelByIdUserPackagegetLevelByIdUserPackage ", res.data);
            return userObj;
        });
}

function getLevelByIdUser(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getLevelByIdUser`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getLevelByIdUser: res.data
            }
            console.log("in service getLevelByIdUsergetLevelByIdUsergetLevelByIdUser ", res.data);
            return userObj;
        });
}

function getAllLevelMining(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllLevelMining`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllLevelMining: res.data
            }
            console.log("in service getAllLevelMininggetAllLevelMininggetAllLevelMining ", res.data);
            return userObj;
        });
}

function getAllLevelWelcome(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllLevelWelcome`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                getAllLevelWelcome: res.data
            }
            console.log("in service getAllLevelWelcomegetAllLevelWelcomegetAllLevelWelcome ", res.data);
            return userObj;
        });
}


function getCmcCoinList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });

    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCmcCoinList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            // console.log("res_________res:::=======>getCmcCoinList?", data);



            let userObj = {
                cmcCoinData: data.data
            }
            // console.log("In_Service_getCmcCoinList!!!!!!!!!!!!!!!!!!!!!!!! ", userObj);
            return userObj;
        });
}
function withdrawBalance(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/withdrawBalance`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                withdrawBalance: data
            }
            // console.log("I am in service withdrawBalance::", userObj);
            return userObj;
        });
}

function saveDftWalletAddress(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveDftWalletAddress`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveDftWalletAddress: data
            }
            // console.log("I am in service saveDftWalletAddress::", userObj);
            return userObj;
        });
}

function createUserPromoPackage(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createUserPromoPackage`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                createUserPromoPackage: data
            }
            // console.log("I am in service createUserPromoPackage::", userObj);
            return userObj;
        });
}

function claimAddress(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/claimAddress`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                claimAddress: data
            }
            // console.log("I am in service claimAddress::", userObj);
            return userObj;
        });
}


function getUserByRefCode(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        // "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserByRefCode`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                getUserByRefCode: user.data
            }
            // console.log("getUserByRefCode___SERVICE___________-", userObj);
            return userObj;
        });
}


function saveSTAKE(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }

    return fetch(CONST.BACKEND_URL + `/saveSTAKE`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userInfo = {
                userInformation: data.data
            }

            return userInfo;
        });
}
function getUserNameVerified(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }

    return fetch(CONST.BACKEND_URL + `/getUserNameVerified`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userInfo = {
                getUserNameVerified: data.data
            }

            return userInfo;
        });
}
function saveBTST(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }

    return fetch(CONST.BACKEND_URL + `/saveBTST`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userInfo = {
                userInformation: data.data
            }

            return userInfo;
        });
}

function getUserInfo(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserInfo`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userInfo = {
                userInformation: data.data
            }

            return userInfo;
        });
}

function logout() {
    window.sessionStorage.removeItem('user');
    history.push(`#/login`);

}
function onerrorlogout() {
    window.sessionStorage.removeItem('user');
    history.push(`#/login`);
    window.location.reload();
}
function login(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            if (user.data) {
                window.sessionStorage.setItem('user', JSON.stringify(user.data));
            }

            return userObj;
        });
}
function updatePasswordValidateOtp(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updatePasswordValidateOtp`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            // if (user.data) {
            //     window.sessionStorage.setItem('user', JSON.stringify(user.data));
            // }

            return userObj;
        });
}
function validateLoginOtp(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/validateLoginOtp`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            if (user.data) {
                window.sessionStorage.setItem('user', JSON.stringify(user.data));
            }

            return userObj;
        });
}
function loginValidateOtp(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/loginValidateOtp`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            if (user.data) {
                window.sessionStorage.setItem('user', JSON.stringify(user.data));
            }

            return userObj;
        });
}
function registerValidateOtp(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/validateOtp`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            if (user.data) {
                window.sessionStorage.setItem('user', JSON.stringify(user.data));
            }

            return userObj;
        });
}
function verifyEmail(data) {

    const requestOptions = {
        method: "GET",
    }
    return fetch(CONST.BACKEND_URL + `/verifyEmail?id=${data.id}&token=${data.token}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}
function validateId(data) {
    const requestOptions = {
        method: "GET",
    }
    return fetch(CONST.BACKEND_URL + `/validateId?id=${data.id}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfotoken: user.data
            }
            return userObj;
        });
}

function forgotPassword(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/forgotPassword`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}

function getUserListByEmail(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserListByEmail`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                getUserListByEmail: user
            }
            return userObj;
        });
}


function resendVerificationLink(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/resendVerificationLink`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}
function createNotification(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createNotification`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}
function sellIndex(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sellIndex`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                sellIndex: user
            }
            return userObj;
        });
}
function buyIndex(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/buyIndex`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                buyIndex: user
            }
            return userObj;
        });
}
function register(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}

function sendBalance(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sendBalance`, requestOptions)
        .then(handleResponse)
        .then(user => {

            let userObj = {
                sendBalance: user
            }
            return userObj;
        });
}

function sendCoin(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sendCoin`, requestOptions)
        .then(handleResponse)
        .then(user => {

            let userObj = {
                sendCoin: user
            }
            return userObj;
        });
}
function forgotUpdatePassword(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/forgotUpdatePassword`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}

function createWallet(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createWallet`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                createWallet: data.data
            }
            return userObj;
        });
}

function getWalletList() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getWalletList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getWalletList: data.data
            }
            // console.log("I AM IN SERVICE  getWalletList___getWalletList::", userObj);
            return userObj;
        });
}

function getProfileDataPi(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getProfileDataPi`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let tempData = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '100%'],
                        label: {
                            position: 'outer',
                            fontSize: 14
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: Number(parseFloat(data.data.teamWB).toFixed(0)), name: 'Team Welcome Bonus' },
                            { value: Number(parseFloat(data.data.miningP).toFixed(0)), name: 'Mining Profit' },
                            { value: Number(parseFloat(data.data.teamMiningP).toFixed(0)), name: 'Team Mining Profit' },
                            { value: Number(parseFloat(data.data.balance).toFixed(0)), name: 'Balance' },
                        ]
                    }
                ]
            }
            // console.log("asif_____pukuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", tempData)

            let userObj = {
                getProfileDataPi: tempData
            }
            // console.log('I am service getProfileDataPi::', userObj);
            return userObj;
        });
}
function getCmcCoinByTickerName(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCmcCoinByTickerName`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCmcCoinByTickerName: data.data
            }
            // console.log('I am service getCmcCoinByTickerName::', userObj);
            return userObj;
        });
}

function getUserDetails(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getProfile`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getUserDetails: data.data
            }
            // console.log('I am service ghdfhdfghdfhhhhhhhhhhhhhhhhhhhhhhg::', userObj);
            return userObj;
        });
}
function getSocialMediaById(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getSocialMediaById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getSocialMediaById: data.data
            }
            // console.log('I am service ghdfhdfghdfhhhhhhhhhhhhhhhhhhhhhhg::', userObj);
            return userObj;
        });
}

function updateUserInfo(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateUserInfo`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                updateUserInfo: data
            }
            return userObj;
        });
}

function getPrice(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getPrice`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getPrice: data.data
            }
            return userObj;
        });
}
function swapAmount(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/swapAmount`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                swapAmount: data
            }
            return userObj;
        });
}

function getAllCountry() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllCountry`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllCountry: data.data
            }
            return userObj;
        });
}

function getAllState() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllState`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllState: data.data
            }
            return userObj;
        });
}

function getAllCity() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllCity`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllCity: data.data
            }
            return userObj;
        });
}

function getDocumentList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getDocumentList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getDocDetails: data.data
            }
            return userObj;
        });
}
function getCountriesList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCountriesList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let countryObj = {
                getCountriesList: data.data
            }
            return countryObj;
        });
}
function getCitiesList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCityById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let cityObj = {
                getCityDetails: data.data
            }
            return cityObj;
        });
}
function getStatesList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getStateById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let stateObj = {
                getStateDetails: data.data
            }
            return stateObj;
        });
}

function getReferalById(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getReferalById`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let stateObj = {
                getReferalById: data.data
            }
            return stateObj;
        });
}

function getKYC(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getKYC`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getKYC: data.data
            }
            return userObj;
        });
}

function saveKycDocSelfie(data) {
    // console.log("Service____saveKycDocSelfie____data::", data);
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveKycDocSelfie`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveKycDocSelfieData: data.data
            }
            return userObj;
        });
}

function saveKycDocPassport(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveKycDocPassport`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveKycDocPassportData: data.data
            }
            return userObj;
        });
}

function saveKycDocPan(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveKycDocPan`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveKycDocPanData: data.data
            }
            return userObj;
        });
}

function saveKycDocAadhar(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveKycDocAadhar`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveKycDocAadharData: data.data
            }
            return userObj;
        });
}

function saveKycDoc(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveKycDoc`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveKycDocData: data.data
            }
            return userObj;
        });
}

function createMakePayment(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createMakePayment`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                createMakePayment: data.data
            }
            return userObj;
        });
}

function saveUserPersonalAddr(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveUserPersonalAddr`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveUserPersonalAddr: data.data
            }
            return userObj;
        });
}

function saveSocialMedia(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveSocialMedia`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveSocialMedia: data.data
            }
            return userObj;
        });
}

function saveUserInfo(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/saveUserInfo`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                saveUserInfoData: data.data
            }
            return userObj;
        });
}

function createKYC(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createKYC`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                kycData: data.data
            }
            return userObj;
        });
}
function createTicket(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/createTicket`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                ticketData: data.data
            }
            return userObj;
        });
}

function getINRCoinId() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getINRCoinId`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getINRCoinId: data.data
            }
            return userObj;
        });
}

function getMakePaymentList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getMakePaymentList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getMakePaymentList: data.data
            }
            return userObj;
        });
}

function getTicketList(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getTicketList`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // console.log("00000000000000000000", data)
            let userObj = {
                ticketlistData: data.data

            }
            // console.log("9999999999999999", userObj)


            return userObj;
        });
}

function getPackageSTAKE(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getPackageSTAKE`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getPackageSTAKE: data
            }
            // console.log("in am in service getPackageSTAKE :::", userObj);
            return userObj;
        });
}
function getPackageBTST(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getPackageBTST`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getPackageBTST: data
            }
            // console.log("in am in service getPackageBTST :::", userObj);
            return userObj;
        });
}
function getSTAKE(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getSTAKE`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getSTAKElistData: data
            }
            // console.log("in am in service getSTAKE :::", userObj);
            return userObj;
        });
}
function getBTST(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getBTST`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getbtstlistData: data
            }
            // console.log("in am in service getBTST :::", userObj);
            return userObj;
        });
}
function getAllCoinIndexByIndexId(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllCoinIndexByIndexId`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllCoinIndexByIndexIdData: data.data
            }
            return userObj;
        });
}
function getDocumentListObj(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getDocumentListObj`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getDocumentListObjData: data.data
            }
            return userObj;
        });
}
function getIndexOrder() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getIndexOrder`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getIndexOrder: data.data
            }
            // console.log('I Am In Service getIndexOrder:::', userObj);
            return userObj;
        });
}
function getCoinBalance() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getCoinBalance`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getCoinBalance: data.data
            }
            // console.log('I Am In Service getCoinBalance:::', userObj);
            return userObj;
        });
}
function getAllIndex() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        // body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getAllIndex`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getAllIndex: data.data
            }
            return userObj;
        });
}


function getUserPromoPackageByUserId() {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getUserPromoPackageByUserId`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getUserPromoPackage: data.data
            }
            // console.log("I am in service getUserPromoPackageByUserId::", userObj);
            return userObj;
        });
}

function getDftWallet() {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/getDftWallet`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getDftWallet: data.data
            }
            // console.log("I am in service getDftWallet::", userObj);
            return userObj;
        });
}

function getPackageList(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getPackageList`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getPackageList: data.data
            }
            // console.log("I am in service getPackageList::", userObj);
            return userObj;
        });
}
// function getUserPackages() {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//     }
//     return fetch(CONST.BACKEND_URL + `/getUserPackages`, requestOptions)
//         .then(handleResponse)
//         .then(data => {

//             let userObj = {
//                 getUserPackages: data.data
//             }
//             // console.log("I am in service getUserPackages::", userObj);
//             return userObj;
//         });
// }
function getTx(data) {
    // console.log("I am in service getTx________data::", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getTxAll`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                txlistData: data.data
            }
            // console.log("I am in service getTx::", userObj);
            return userObj;
        });
}

function getTxAllMulti(data) {
    // console.log("I am in service getTx________data::", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getTxAllMulti`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                txlistData: data.data
            }
            // console.log("I am in service getTx::", userObj);
            return userObj;
        });
}
function claimPromoPack(data) {
    // console.log("I am in service getTx________data::", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
    }
    return fetch(CONST.BACKEND_URL + `/claimPromoPack`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                txlistData: data.data
            }
            // console.log("I am in service getTx::", userObj);
            return userObj;
        });
}

function transactionSearch(data) {
    // console.log("I am transactionSearch in service ::", data);

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getTxAll`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                txlistDataByDate: data.data
            }
            // console.log("I am in service getTx::", userObj);
            return userObj;
        });
}


function sendFrom(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sendFrom`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user.data
            }
            return userObj;
        });
}
function sendFromWithOTP(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sendFromWithOTP`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user.data
            }
            return userObj;
        });
}
function sendOtpTX(data) {

    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/sendOtpTX`, requestOptions)
        .then(handleResponse)
        .then(user => {
            let userObj = {
                userinfo: user
            }
            return userObj;
        });
}

function addUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/addUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }

            return userObj;
        });
}
function disableUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/disableUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }

            return userObj;
        });
}
function deleteUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/deleteUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }

            return userObj;
        });
}
function updatePassword(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/changePassword`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                userinfo: data
            }

            return userObj;
        });
}
function changeEmail(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/changeEmail`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                changeEmail: data
            }

            return userObj;
        });
}


function updateUser(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/updateUser`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                addUser: data.data
            }

            return userObj;
        });
}
function uploadImagePassport(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                passportFilesDetails: res.data
            }
            return userObj;
        });
}
function uploadImageAdhaar(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                adhaarFilesDetails: res.data
            }
            return userObj;
        });
}
function uploadImagePan(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                panFilesDetails: res.data
            }
            return userObj;
        });
}
function uploadImageSelfie(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                selfieFilesDetails: res.data
            }
            // console.log("service uploadImageSelfie:", userObj);
            return userObj;
        });
}
function uploadImage(filedata) {

    let header = new Headers({
        "Authorization": authHeader().Authorization
    });
    var data = new FormData();
    data.append('image', filedata);

    const requestOptions = {
        method: "POST",
        headers: header,
        body: data
    }
    return fetch(CONST.BACKEND_URL + `/uploadImage`, requestOptions)
        .then(handleResponse)
        .then(res => {
            let userObj = {
                filesDetails: res.data
            }
            return userObj;
        });
}
function statics() {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header
    }
    return fetch(CONST.BACKEND_URL + `/statics`, requestOptions)
        .then(handleResponse)
        .then(data => {
            let userObj = {
                statics: data.data
            }
            return userObj;
        });
}
function handleResponse(response) {

    return response.text().then(text => {
        const data = text && JSON.parse(text);
        // console.log("handleResponse_handleResponse_handleResponse:::", data);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        if (data.error) {
            if (data.code === 3) {
                onerrorlogout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}



function swapCoinAmount(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/swapCoinAmount`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                swapCoinAmountData: data.data
            }
            return userObj;
        });
}


function getUserWalletByCoinName(data) {
    let header = new Headers({
        'Content-Type': 'application/json',
        "Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    }
    return fetch(CONST.BACKEND_URL + `/getUserWalletByCoinName`, requestOptions)
        .then(handleResponse)
        .then(data => {

            let userObj = {
                getUserWalletByCoinNameData: data.data
            }
            return userObj;
        });
}