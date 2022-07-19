import instance from "../utils/request";

const login = (data)=>{
    return instance({
        url:'/admin/login',
        method:'POST',
        data
    })
};
const loginOut = ()=>{
    return instance({
        url:'/admin/logout',
        method:'POST',
    })
};
const userInfo=()=>{
    return instance({
        url:"/admin/getinfo",
        method:'POST'
    })
}

export default{
    login,loginOut,userInfo
}