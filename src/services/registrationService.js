import apiHelper from '@/utils/apiHelper'

//
const getRegistrationFormInfo = () => {
  return apiHelper.get(apiHelper.apiServers.login, '/api/EApplication')
}

const verifyPhoneNumber = ({ phoneNumber, countryCode }) => {
  const requestData = {
    phoneNumber,
    countryCode
  }
  return apiHelper.post(apiHelper.apiServers.ipos, '/api/RegisterMember/VerifyPhoneNumber', requestData)
}

const generateTokenAndSendSms = ({ phoneNumber, countryCode }) => {
  const requestData = {
    phoneNumber,
    countryCode
  }
  return apiHelper.post(apiHelper.apiServers.login, '/Account/GenerateTokenAndSendSms', requestData)
}

const confirmPhoneVerificationCode = ({ code, phoneNumber, countryCode }) => {
  const requestData = {
    code,
    phoneNumber,
    countryCode
  }
  return apiHelper.post(apiHelper.apiServers.login, '/Account/ConfirmPhoneVerificationCode', requestData)
}

const registerBasicInfo = ({ registerLocationMarketId, chineseName, chineseLastName, englishName, englishLastName, gender, email, addressId, jobId, incomeGroupId, isRejectEmailNotification, isRejectPhoneNotification, verifiedSqlId, countryCode, userId, phoneNumber, agegroupid, birthmonth, textForHousingEstate, buildingName, floor, department }) => {
  const requestData = {
    registerLocationMarketId,
    chineseName,
    englishName,
    chineseLastName,
    englishLastName,
    gender,
    email,
    addressId,
    jobId,
    incomeGroupId,
    isRejectEmailNotification,
    isRejectPhoneNotification,
    verifiedSqlId,
    countryCode,
    phoneNumber,
    agegroupid,
    birthmonth,
    textForHousingEstate,
    buildingName,
    floor,
    department
  }

  if (userId) { requestData.userId = userId }

  return apiHelper.post(apiHelper.apiServers.login, '/api/EApplication', requestData)
}

export default {
  getRegistrationFormInfo,
  verifyPhoneNumber,
  generateTokenAndSendSms,
  confirmPhoneVerificationCode,
  registerBasicInfo
}
