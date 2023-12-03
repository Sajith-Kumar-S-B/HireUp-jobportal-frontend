import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

// register

export const registerAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/signup`,user,"")
}


// login


export const LoginAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,user,"")
}



// recruit register

export const RecruitRegisterAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/recruit/signup`,user,"")
}


// recruit login


export const RecruitLoginAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/recruit/login`,user,"")
}





// edit user


export const editUserAPI = async (reqBody,reqHeader)=>{

    return await commonApi("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}
